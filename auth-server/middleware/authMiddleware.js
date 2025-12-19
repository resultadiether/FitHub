import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fithub_dev_secret'

export function authMiddleware(req, res, next) {
  const auth = req.headers.authorization || ''
  const parts = auth.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ message: 'Unauthorized' })
  const token = parts[1]
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' })
    req.user = decoded
    next()
  })
}
