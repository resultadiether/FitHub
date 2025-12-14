import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.post('/auth/login', { email, password });
      
      if (res.data.token) {
        localStorage.setItem('fithub_token', res.data.token);
        localStorage.setItem('fithub_user', JSON.stringify(res.data.user));
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Section - Branding */}
      <div className="login-brand">
        <div className="brand-content">
          <h1>FitHub</h1>
          <p className="brand-tagline">Your Complete Fitness Journey</p>
          
          <div className="brand-features">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Better Form</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👨‍🏫</span>
              <span>Better Support</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🥗</span>
              <span>Better Nutrition</span>
            </div>
          </div>

          <p className="brand-description">
            Master exercises with expert guidance, follow structured coaching plans, and achieve your nutrition goals.
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in to your FitHub account</p>

          {error && <div className="alert alert-error">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="checkbox">
                <input type="checkbox" disabled={loading} />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-login"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="form-divider">
            <span>or continue with</span>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button type="button" className="social-btn google">
              <span>Google</span>
            </button>
            <button type="button" className="social-btn github">
              <span>GitHub</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="signup-prompt">
            Don't have an account? 
            <Link to="/signup" className="signup-link">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}