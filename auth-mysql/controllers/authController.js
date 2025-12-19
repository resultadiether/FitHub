import pool from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import validator from 'validator'

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS) || 10
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'

export async function register(req, res) {
  console.log('Register endpoint hit', { path: req.path, ip: req.ip })
  console.log('Body:', req.body)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errObj = {}
    for (const e of errors.array()) {
      errObj[e.param] = errObj[e.param] || []
      errObj[e.param].push(e.msg)
    }
    return res.status(400).json({ message: 'Validation failed', errors: errObj })
  }

  const { fullName, email, password, confirmPassword } = req.body

  if (!fullName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  try {
    // detect name column (support full_name or name)
    const [cols] = await pool.query("SHOW COLUMNS FROM users")
    const colNames = cols.map(c => c.Field)
    const nameCol = colNames.includes('full_name') ? 'full_name' : (colNames.includes('name') ? 'name' : null)

    const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email])
    if (rows.length > 0) return res.status(400).json({ message: 'Email already exists' })

    const hashed = await bcrypt.hash(password, BCRYPT_ROUNDS)
    // insert using detected name column if available
    let insertSql, insertParams
    if (nameCol) {
      insertSql = `INSERT INTO users (${nameCol}, email, password) VALUES (?, ?, ?)`
      insertParams = [fullName, email, hashed]
    } else {
      // fallback: try columns full_name (may error) — keep compatibility
      insertSql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)'
      insertParams = [fullName, email, hashed]
    }
    const [result] = await pool.query(insertSql, insertParams)

    const userId = result.insertId
    const user = { id: userId, fullName, email }
    // sign token for frontend compatibility
    const token = jwt.sign({ id: userId, fullName, email }, JWT_SECRET, { expiresIn: '7d' })

    return res.status(201).json({ message: 'Registration successful', user, token })
  } catch (e) {
    console.error('Register error', e)
    return res.status(500).json({ message: 'Server error' })
  }
}

export async function login(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ message: 'Validation failed' })

  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })

  try {
    // detect name column to select appropriately
    const [cols] = await pool.query("SHOW COLUMNS FROM users")
    const colNames = cols.map(c => c.Field)
    const nameCol = colNames.includes('full_name') ? 'full_name' : (colNames.includes('name') ? 'name' : null)

    const selectCols = nameCol ? `id, ${nameCol} as full_name, email, password` : 'id, email, password'
    const [rows] = await pool.query(`SELECT ${selectCols} FROM users WHERE email = ?`, [email])
    if (rows.length === 0) return res.status(400).json({ message: 'Invalid credentials' })

    const userRow = rows[0]
    const match = await bcrypt.compare(password, userRow.password)
    if (!match) return res.status(400).json({ message: 'Invalid credentials' })
    const user = { id: userRow.id, fullName: userRow.full_name || userRow.name || null, email: userRow.email }
    const token = jwt.sign({ id: user.id, fullName: user.fullName, email: user.email }, JWT_SECRET, { expiresIn: '7d' })

    return res.json({ message: 'Login successful', user, token })
  } catch (e) {
    console.error('Login error', e)
    return res.status(500).json({ message: 'Server error' })
  }
}
