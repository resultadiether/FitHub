import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getUser } from '../services/api'

export default function ProtectedRoute({ children }) {
  const user = getUser()
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
