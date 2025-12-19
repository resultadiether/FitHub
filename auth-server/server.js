import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import authRoutes from './routes/auth.js'
import { connectDB } from './config/db.js'

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// DB
connectDB()

// Session store (MongoDB)
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/fithub'
app.use(session({
  name: process.env.SESSION_NAME || 'fithub.sid',
  secret: process.env.SESSION_SECRET || 'change_this_in_prod',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: mongoUri }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    httpOnly: true,
    sameSite: 'lax'
  }
}))

// Routes
app.use('/api/v1/auth', authRoutes)

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'FitHub Auth Server (MongoDB) running' }))

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Server error' })
})

app.listen(PORT, () => {
  console.log(`FitHub Auth Server running at http://127.0.0.1:${PORT}`)
})
