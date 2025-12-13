import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Complete Fitness Journey</h1>
          <p>Master exercises with expert guidance, follow structured coaching plans, and achieve your nutrition goals all in one place.</p>
          <div className="hero-cta">
            <Link to="/exercises" className="btn btn-primary">Explore Exercises</Link>
            <Link to="/coaching" className="btn btn-secondary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
        <section className="features">
          <div className="feature-card">
            <h3 style={{ fontSize: '30px', fontWeight: '600', fontFamily: 'Times New Roman, sans-serif', marginBottom: '12px' }}>BETTER FORM</h3>
            <p style={{ fontSize: '20px', fontFamily: 'Comic Sans', lineHeight: '1.6', textAlign: 'center', color: '#d0cec8ff' }}>Learn proper exercise technique with step-by-step instructions and safety tips to prevent injuries and maximize results.</p>
          </div>
          <div className="feature-card">
            <h3 style={{ fontSize: '30px', fontWeight: '600', fontFamily: 'Times New Roman, sans-serif', marginBottom: '12px' }}>BETTER SUPPORT</h3>
            <p style={{ fontSize: '20px', fontFamily: 'Comic Sans', lineHeight: '1.6', textAlign: 'center', color: '#d0cec8ff' }}>Get personalized coaching and structured training plans designed for your level, whether you're a beginner or advanced.</p>
          </div>
          <div className="feature-card">
            <h3 style={{ fontSize: '30px', fontWeight: '600', fontFamily: 'Times New Roman, sans-serif', marginBottom: '12px' }}>BETTER NUTRITION</h3>
            <p style={{ fontSize: '20px', fontFamily: 'Comic Sans', lineHeight: '1.6', textAlign: 'center', color: '#d0cec8ff' }}>Receive tailored meal suggestions and nutrition guidance aligned with your fitness goals and lifestyle.</p>
          </div>
        </section>

        {/* Who Benefits */}
          <section className="section">
            <h2 style={{ fontSize: '36px', fontFamily: 'Arial, sans-serif', fontWeight: '700' }}>Perfect For Everyone</h2>
            <div className="grid">
              <Link to="/beginners" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}>Beginners</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Gym Novices</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>New to the gym? Get detailed guidance on proper form, exercise basics, and injury prevention to build confidence from day one.</p>
                  </div>
                </div>
              </Link>

              <Link to="/intermediate" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}>Intermediate</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Experienced Lifters</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>Break through plateaus with advanced programming, form refinement, and structured plans from expert coaches.</p>
                  </div>
                </div>
              </Link>

              <Link to="/nutrition-guide" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}> Nutrition</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Diet Support</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>Struggling to align your diet with fitness goals? Get practical, easy-to-follow meal suggestions for muscle gain or fat loss.</p>
                  </div>
                </div>
              </Link>

              <Link to="/budget-friendly" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}> Budget</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Affordable Coaching</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>Get professional coaching without personal trainer costs. FitHub brings expert guidance to your budget.</p>
                  </div>
                </div>
              </Link>

              <Link to="/home-training" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}> Remote</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Home Training</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>Train at home with clear video tutorials, form guidance, and motivation—no gym membership required.</p>
                  </div>
                </div>
              </Link>

              <Link to="/goals" style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="card-header">
                    <div className="card-label" style={{ fontSize: '14px', fontFamily: 'Times New Roman, sans-serif' }}> Goals</div>
                    <div className="card-title" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Goal Achievement</div>
                  </div>
                  <div className="card-body">
                    <p style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.5' }}>Whether you want to build muscle, lose weight, or get fit, FitHub keeps you motivated and on track.</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(13, 122, 132, 1), rgba(31, 31, 46, 1))', padding: '80px 20px', borderRadius: '10px', marginTop: '40px' }}>
        <h2>Ready to Transform Your Fitness?</h2>
        <p style={{ fontSize: '18px', color: '#d0cec8ff', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Join thousands of users on their journey to better form, better support, and better nutrition.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" style={{ background: '#667eea', color: 'white' }}>Sign Up Free</button>
          <Link to="/exercises" className="btn btn-secondary" style={{ color: '#667eea', borderColor: '#667eea' }}>Browse Exercises</Link>
        </div>
      </section>
    </main>
  )
}

