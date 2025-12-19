import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import authRoutes from './routes/auth.js'
import { initDB } from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())
const FRONTEND_URL = process.env.FRONTEND_URL || ''
app.use(cors({ origin: FRONTEND_URL || true, credentials: true }))
app.use(express.json())

// Simple request logger for debugging
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url, 'body:', JSON.stringify(req.body || {}))
  next()
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at Promise', p, 'reason:', reason)
})

// Mount routes under /api
app.use('/api', authRoutes)

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'FitHub MySQL Auth Server running' }))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Server error' })
})

async function start() {
  const dbOk = await initDB()
  if (!dbOk) console.warn('Warning: MySQL not reachable — server will continue to run but registration may fail until DB is up.')
  app.listen(PORT, () => console.log(`Auth server listening on http://127.0.0.1:${PORT}`))
}

start().catch(e => {
  console.error('Failed to start server', e)
  process.exit(1)
})
