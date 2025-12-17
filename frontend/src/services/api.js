import axios from 'axios'

const getToken = () => {
  try {
    return localStorage.getItem('fithub_token')
  } catch (e) {
    return null
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1',
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
  try { localStorage.setItem('fithub_token', token) } catch(e) {}
}

export function clearToken(){
  try { localStorage.removeItem('fithub_token') } catch(e) {}
}

export default api
