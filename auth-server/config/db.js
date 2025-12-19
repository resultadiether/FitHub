import mongoose from 'mongoose'

export async function connectDB() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/fithub'
  try {
    await mongoose.connect(uri, { })
    console.log('Connected to MongoDB')
  } catch (e) {
    console.error('MongoDB connection error', e)
    process.exit(1)
  }
}
