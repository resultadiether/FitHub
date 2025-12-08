import React from 'react'
import { Link } from 'react-router-dom'

export default function Intermediate() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Experienced Lifters</h1>
          <p>Break Through Plateaus & Achieve Advanced Results</p>
        </div>
      </section>

      <section className="section">
        <h2>For Intermediate Athletes</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #2a2a3e 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #a89968'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              🎯 What You'll Master
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Advanced Programming:</strong> Periodization, intensity techniques, and training phases</li>
              <li><strong>Form Refinement:</strong> Optimize movement patterns for maximum efficiency</li>
              <li><strong>Plateau Busting:</strong> Break through strength and muscle-building plateaus</li>
              <li><strong>Program Design:</strong> Create customized workout plans based on your goals</li>
              <li><strong>Advanced Nutrition:</strong> Macronutrient cycling and performance optimization</li>
              <li><strong>Recovery Science:</strong> Advanced sleep, stress management, and injury prevention</li>
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #2a2a3e 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #a89968'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              📋 Advanced Training Techniques
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Hypertrophy Focus (Muscle Gain)</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Drop sets, supersets, and 6-12 rep ranges for maximum muscle growth</p>
              
              <p><strong>Strength Focus</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Heavy compound lifts with 1-6 reps for raw strength development</p>
              
              <p><strong>Endurance & Conditioning</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Circuit training and metabolic conditioning for athleticism</p>
              
              <p><strong>Periodization</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Structured phases to continuously progress and prevent plateaus</p>
            </div>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #2a2a3e 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #a89968'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              💪 Plateau-Breaking Strategies
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Progressive Overload:</strong> Increase weight, reps, sets, or volume systematically</li>
              <li><strong>Exercise Variation:</strong> Switch exercises to hit muscles from different angles</li>
              <li><strong>Intensity Techniques:</strong> Use drop sets, supersets, rest-pause sets, and pauses</li>
              <li><strong>Deload Weeks:</strong> Strategic recovery weeks to prevent overtraining</li>
              <li><strong>Training Frequency:</strong> Optimize how often you train each muscle group</li>
              <li><strong>Nutrition Adjustment:</strong> Fine-tune calories and macros for your goals</li>
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #a89968 0%, #8b7d5f 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: '700' }}>
              Push Your Limits Further
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              Access advanced exercise variations and expert coaching programs designed for experienced lifters
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/exercises" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                Advanced Exercises
              </Link>
              <Link to="/coaching" className="btn btn-secondary">
                Advanced Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
