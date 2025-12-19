import express from 'express'
import { body } from 'express-validator'
import { register, login, me } from '../controllers/authController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register
router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  register
)

// Login
router.post(
  '/login',
  [
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  login
)

// Example protected route
router.get('/me', authMiddleware, me)

export default router
