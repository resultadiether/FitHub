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
    navigate('/')
  }
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
             FitHub
          </Link>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
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
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/beginners" element={<Beginners />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/nutrition-guide" element={<NutritionGuide />} />
        <Route path="/budget-friendly" element={<BudgetFriendly />} />
        <Route path="/home-training" element={<HomeTraining />} />
        <Route path="/goals" element={<GoalAchievement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 FitHub. Your journey to better fitness starts here.</p>
      </footer>
    </div>
  )
}