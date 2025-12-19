import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, validate: [validator.isEmail, 'Invalid email'] },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)
