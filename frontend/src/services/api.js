import axios from 'axios'

const getToken = () => {
  try {
    return localStorage.getItem('fithub_token')
  } catch (e) {
    return null
  }
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1'
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

export function setToken(token) {
  try { localStorage.setItem('fithub_token', token) } catch(e) {}
}

export function clearToken(){
  try { localStorage.removeItem('fithub_token') } catch(e) {}
}

export default api
