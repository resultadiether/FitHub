import axios from 'axios'

const getToken = () => {
  try {
    return localStorage.getItem('fithub_token')
  } catch (e) {
    return null
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api',
  timeout: 5000, // 5 second timeout
  headers: {
    'Content-Type': 'application/json',
  }
})

// Attach token if present
api.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for better error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      console.warn('API request timed out - backend may not be running')
      return Promise.reject(new Error('Backend service is currently unavailable. Please try again later.'))
    }
    return Promise.reject(error)
  }
)

export function setToken(token) {
  try {
    localStorage.setItem('fithub_token', token)
    // try to decode token payload and store user for UI
    try {
      const payload = token.split('.')[1]
      // base64url -> base64
      const b64 = payload.replace(/-/g, '+').replace(/_/g, '/')
      const json = decodeURIComponent(atob(b64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      const data = JSON.parse(json)
      const user = { id: data.id || data.sub, fullName: data.name || data.fullName || null, email: data.email }
      localStorage.setItem('fithub_user', JSON.stringify(user))
      try { window.dispatchEvent(new Event('fithub_auth_changed')) } catch(e){}
    } catch (e) {
      // ignore decode errors
    }
  } catch(e) {}
}

export function clearToken(){
  try { localStorage.removeItem('fithub_token'); localStorage.removeItem('fithub_user') } catch(e) {}
  try { window.dispatchEvent(new Event('fithub_auth_changed')) } catch(e){}
}

export function getUser(){
  try { return JSON.parse(localStorage.getItem('fithub_user')) } catch(e) { return null }
}

export default api
