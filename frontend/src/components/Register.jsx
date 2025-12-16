import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api, { setToken } from '../services/api'
import './Register.css'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const response = await api.post('/auth/register', formData)
      const { token } = response.data
      if (token) setToken(token)
      navigate('/')
    } catch (err) {
      if (err.message.includes('Backend service is currently unavailable')) {
        setError('Unable to connect to the server. Please check if the backend is running.')
      } else {
        setError(err.response?.data?.message || 'Registration failed. Please check your input and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create your FitHub account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" id="password_confirmation" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} required />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={loading}>{loading ? 'Creating account...' : 'Register'}</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  )
}
