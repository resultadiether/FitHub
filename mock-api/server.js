import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT = 8000
const DB_FILE = path.join(process.cwd(), 'db.sqlite')

app.use(cors())
app.use(express.json())

// Ensure DB file exists
const dbExists = fs.existsSync(DB_FILE)
const sqlite = sqlite3.verbose()
const db = new sqlite.Database(DB_FILE)

// Initialize schema and seed data if needed
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT,
      difficulty TEXT,
      primary_muscles TEXT,
      equipment TEXT,
      instructions TEXT,
      video_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  db.get('SELECT COUNT(*) as count FROM exercises', (err, row) => {
    if (err) {
      console.error('Count error', err)
      return
    }
    const count = row?.count || 0
    if (count === 0) {
      const stmt = db.prepare(`INSERT INTO exercises (name, category, difficulty, primary_muscles, equipment, instructions, video_url) VALUES (?, ?, ?, ?, ?, ?, ?)`)
      const seed = [
        ['Push-ups', 'Chest', 'Beginner', 'Chest, Triceps, Shoulders', 'Bodyweight', 'Get in plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor. Push back up to starting position. Keep your core tight and body in a straight line throughout.', null],
        ['Pull-ups', 'Back', 'Intermediate', 'Back, Biceps, Shoulders', 'Pull-up Bar', 'Grip the bar with hands slightly wider than shoulder-width. Pull your body up until your chin clears the bar. Lower yourself back down with control. Keep your core engaged and avoid swinging.', null],
        ['Squats', 'Legs', 'Beginner', 'Quadriceps, Glutes, Hamstrings', 'Bodyweight', 'Stand with feet shoulder-width apart. Keep your chest up and core tight. Lower your hips back and down as if sitting in a chair. Lower until thighs are parallel to ground. Push through heels to stand back up.', null],
        ['Planks', 'Core', 'Beginner', 'Core, Shoulders, Chest', 'Bodyweight', 'Get into a forearm plank position with elbows under shoulders. Keep your body in a straight line from head to heels. Engage your core and glutes. Hold this position without letting hips sag. Breathe steadily throughout.', null],
        ['Sit-ups', 'Core', 'Beginner', 'Abdominals, Hip Flexors', 'Bodyweight', 'Lie on your back with knees bent and feet flat on floor. Place hands behind your head or across your chest. Engage your core and lift your shoulders off the ground. Lower back down with control. Focus on using your abs, not pulling on your neck.', null],
        ['Deadlifts', 'Back', 'Intermediate', 'Back, Glutes, Hamstrings', 'Barbell', 'Stand with feet hip-width apart. Grip bar with hands just outside legs. Keep chest up and core tight. Lift by extending hips and knees simultaneously. Drive through heels. Return to starting position with control.', null],
        ['Bench Press', 'Chest', 'Intermediate', 'Chest, Triceps, Shoulders', 'Barbell, Bench', 'Lie on bench with feet flat on floor. Grip bar slightly wider than shoulders. Lower bar to upper chest. Press up explosively until arms extended. Maintain control on the descent.', null]
      ]
      for (const s of seed) stmt.run(s)
      stmt.finalize()
      console.log('Seeded exercises into SQLite DB')
    }
  })
})

// Simple helper to create user for testing if none exist
db.get('SELECT COUNT(*) as ucount FROM users', (err, row) => {
  if (!err && row && row.ucount === 0) {
    import('bcryptjs').then(mod => {
      const bcrypt = mod.default || mod
      const pwd = bcrypt.hashSync('password123', 8)
      db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', ['Demo User', 'demo@example.com', pwd])
      console.log('Created demo user: demo@example.com / password123')
    }).catch(e => console.error('bcrypt import error', e))
  }
})

// Helpers
function paginateResults(rows, page, perPage) {
  const p = Number(page) || 1
  const per = Number(perPage) || 20
  const start = (p - 1) * per
  const data = rows.slice(start, start + per)
  return { data, current_page: p, per_page: per, total: rows.length }
}

// API Routes
app.get('/api/v1/exercises', (req, res) => {
  const page = req.query.page || 1
  const perPage = req.query.per_page || 20
  db.all('SELECT * FROM exercises ORDER BY id ASC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' })
    res.json(paginateResults(rows, page, perPage))
  })
})

app.get('/api/v1/exercises/:id', (req, res) => {
  const id = req.params.id
  db.get('SELECT * FROM exercises WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: 'DB error' })
    if (!row) return res.status(404).json({ error: 'Exercise not found' })
    res.json(row)
  })
})

// Protected endpoints middleware
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET || 'fithub_dev_secret'

function authMiddleware(req, res, next) {
  const auth = req.headers['authorization'] || ''
  const parts = auth.split(' ')
  if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ error: 'Unauthorized' })
  const token = parts[1]
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' })
    req.user = decoded
    next()
  })
}

// Create exercise (protected)
app.post('/api/v1/exercises', authMiddleware, (req, res) => {
  const { name, category, difficulty, primary_muscles, equipment, instructions, video_url } = req.body
  if (!name) return res.status(400).json({ error: 'Name required' })
  db.run(
    `INSERT INTO exercises (name, category, difficulty, primary_muscles, equipment, instructions, video_url) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, category, difficulty, primary_muscles, equipment, instructions, video_url],
    function (err) {
      if (err) return res.status(500).json({ error: 'DB error' })
      db.get('SELECT * FROM exercises WHERE id = ?', [this.lastID], (err2, row) => {
        if (err2) return res.status(500).json({ error: 'DB error' })
        res.status(201).json(row)
      })
    }
  )
})

// Update exercise (protected)
app.put('/api/v1/exercises/:id', authMiddleware, (req, res) => {
  const id = req.params.id
  const { name, category, difficulty, primary_muscles, equipment, instructions, video_url } = req.body
  db.run(
    `UPDATE exercises SET name=?, category=?, difficulty=?, primary_muscles=?, equipment=?, instructions=?, video_url=? WHERE id=?`,
    [name, category, difficulty, primary_muscles, equipment, instructions, video_url, id],
    function (err) {
      if (err) return res.status(500).json({ error: 'DB error' })
      db.get('SELECT * FROM exercises WHERE id = ?', [id], (err2, row) => {
        if (err2) return res.status(500).json({ error: 'DB error' })
        if (!row) return res.status(404).json({ error: 'Not found' })
        res.json(row)
      })
    }
  )
})

// Delete exercise (protected)
app.delete('/api/v1/exercises/:id', authMiddleware, (req, res) => {
  const id = req.params.id
  db.run('DELETE FROM exercises WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' })
    if (this.changes === 0) return res.status(404).json({ error: 'Not found' })
    res.json({ success: true })
  })
})

app.get('/api/v1/exercises/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase()
  if (!q) return res.json({ data: [] })
  const like = `%${q}%`
  db.all(
    `SELECT * FROM exercises WHERE LOWER(name) LIKE ? OR LOWER(primary_muscles) LIKE ? OR LOWER(category) LIKE ? ORDER BY id ASC`,
    [like, like, like],
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'DB error' })
      res.json({ data: rows })
    }
  )
})

// Simple auth mocks (keep for parity with frontend)
// Register
app.post('/api/v1/auth/register', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json({ error: 'Missing fields' })
  try {
    const mod = await import('bcryptjs')
    const bcrypt = mod.default || mod
    const hashed = bcrypt.hashSync(password, 8)
    db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashed], function (err) {
      if (err) return res.status(400).json({ error: 'Email already exists' })
      const user = { id: this.lastID, name, email }
      const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' })
      res.json({ user, token })
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Server error' })
  }
})

// Login
app.post('/api/v1/auth/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' })
  try {
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) return res.status(500).json({ error: 'DB error' })
      if (!user) return res.status(400).json({ error: 'Invalid credentials' })
      const mod = await import('bcryptjs')
      const bcrypt = mod.default || mod
      const match = bcrypt.compareSync(password, user.password)
      if (!match) return res.status(400).json({ error: 'Invalid credentials' })
      const payload = { id: user.id, name: user.name, email: user.email }
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
      res.json({ user: payload, token })
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Server error' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'FitHub Mock API (SQLite) running' })
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`\n✓ FitHub Mock API (SQLite) running at http://127.0.0.1:${PORT}`)
  console.log('  DB file:', DB_FILE)
  console.log('  Endpoints: GET /api/v1/exercises, /api/v1/exercises/:id, /api/v1/exercises/search')
})
