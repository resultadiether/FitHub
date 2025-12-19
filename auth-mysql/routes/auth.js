import express from 'express'
import { body } from 'express-validator'
import { register, login } from '../controllers/authController.js'

const router = express.Router()

router.post(
  '/auth/register',
  [
    body('fullName').trim().notEmpty().withMessage('Full name is required'),
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('confirmPassword').notEmpty().withMessage('Confirm password is required')
  ],
  register
)

router.post(
  '/auth/login',
  [
    body('email').trim().isEmail().withMessage('A valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  login
)

export default router
