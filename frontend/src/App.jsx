import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
import './App.css'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <BrowserRouter>
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
              <li><Link to="/login" className="btn-login" onClick={() => setMobileMenuOpen(false)}>Login</Link></li>
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
    </BrowserRouter>
  )
}
