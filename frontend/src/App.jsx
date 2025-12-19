import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Exercises from './components/Exercises'
import ExerciseDetail from './components/ExerciseDetail'
import Coaching from './components/Coaching'
import Nutrition from './components/Nutrition'
import Beginners from './components/Beginners'
import Intermediate from './components/Intermediate'
import NutritionGuide from './components/NutritionGuide'
import BudgetFriendly from './components/BudgetFriendly'
import HomeTraining from './components/HomeTraining'
import GoalAchievement from './components/GoalAchievement'
import Login from './components/Login'
import Register from './components/Register'
import api, { getUser, clearToken } from './services/api'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import { useLocation, Navigate } from 'react-router-dom'

function NavigateToLanding(){
  const user = getUser()
  const location = useLocation()
  if (user) return <Navigate to="/home" replace />
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <BrowserRouter>
      <NavContent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </BrowserRouter>
  )
}

function NavContent({ mobileMenuOpen, setMobileMenuOpen }) {
  const [user, setUser] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  // read current user from localStorage

  useEffect(() => {
    setUser(getUser())
    const onAuthChange = () => setUser(getUser())
    window.addEventListener('storage', onAuthChange)
    window.addEventListener('fithub_auth_changed', onAuthChange)
    return () => {
      window.removeEventListener('storage', onAuthChange)
      window.removeEventListener('fithub_auth_changed', onAuthChange)
    }
  }, [])

  function handleLogout() {
    clearToken()
    setUser(null)
    setShowDropdown(false)
    navigate('/login')
  }
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/home" className="navbar-brand">
             FitHub
          </Link>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/exercises" onClick={() => setMobileMenuOpen(false)}>Exercises</Link></li>
            <li><Link to="/coaching" onClick={() => setMobileMenuOpen(false)}>Coaching</Link></li>
            <li><Link to="/nutrition" onClick={() => setMobileMenuOpen(false)}>Nutrition</Link></li>
            {!user && (
              <li><Link to="/login" className="btn-login" onClick={() => setMobileMenuOpen(false)}>Login</Link></li>
            )}
            {user && (
              <li className="nav-profile">
                <button className="avatar" onClick={() => setShowDropdown(s => !s)} aria-haspopup="true" aria-expanded={showDropdown}>
                  {user.fullName ? user.fullName.split(' ').map(n=>n[0]).slice(0,2).join('') : (user.email || 'U').slice(0,2).toUpperCase()}
                </button>
                {showDropdown && (
                  <div className="profile-dropdown" role="menu">
                    <div className="profile-info">
                      <div className="profile-name">{user.fullName || user.email}</div>
                      <div className="profile-email">{user.email}</div>
                    </div>
                    <div className="profile-actions">
                      <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        {/* Root landing: redirect to /login or /home depending on auth */}
        <Route path="/" element={<NavigateToLanding />} />

        {/* Protected routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/exercises" element={<ProtectedRoute><Exercises /></ProtectedRoute>} />
        <Route path="/exercises/:id" element={<ProtectedRoute><ExerciseDetail /></ProtectedRoute>} />
        <Route path="/coaching" element={<ProtectedRoute><Coaching /></ProtectedRoute>} />
        <Route path="/nutrition" element={<ProtectedRoute><Nutrition /></ProtectedRoute>} />
        <Route path="/beginners" element={<ProtectedRoute><Beginners /></ProtectedRoute>} />
        <Route path="/intermediate" element={<ProtectedRoute><Intermediate /></ProtectedRoute>} />
        <Route path="/nutrition-guide" element={<ProtectedRoute><NutritionGuide /></ProtectedRoute>} />
        <Route path="/budget-friendly" element={<ProtectedRoute><BudgetFriendly /></ProtectedRoute>} />
        <Route path="/home-training" element={<ProtectedRoute><HomeTraining /></ProtectedRoute>} />
        <Route path="/goals" element={<ProtectedRoute><GoalAchievement /></ProtectedRoute>} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 FitHub. Your journey to better fitness starts here.</p>
      </footer>
    </div>
  )
}