import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { validationResult } from 'express-validator'

const JWT_SECRET = process.env.JWT_SECRET || 'fithub_dev_secret'

export const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const err = {}
    for (const e of errors.array()) {
      err[e.param] = err[e.param] || []
      err[e.param].push(e.msg)
    }
    return res.status(400).json({ message: 'Validation failed', errors: err })
  }

  const { name, email, password } = req.body
  try {
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ message: 'Email already exists' })

    const saltRounds = Number(process.env.BCRYPT_ROUNDS) || 10
    const hashed = await bcrypt.hash(password, saltRounds)

    const user = await User.create({ name, email, password: hashed })
    const payload = { id: user._id, name: user.name, email: user.email }
    // set session
    try { req.session.user = payload } catch (e) {}
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })

    return res.status(201).json({ user: payload, token, redirect: '/login' })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Server error' })
  }
}

export const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ message: 'Validation failed' })

  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ message: 'Invalid credentials' })

    const payload = { id: user._id, name: user.name, email: user.email }
    // set session for server-side session handling
    try { req.session.user = payload } catch (e) {}
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })

    return res.json({ user: payload, token })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Server error' })
  }
}

export const me = async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' })
  const { id, name, email } = req.user
  res.json({ user: { id, name, email } })
}
