import React from 'react'
import { Link } from 'react-router-dom'

export default function GoalAchievement() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Goal Achievement</h1>
          <p>Reach Your Fitness Goals with Structured Guidance</p>
        </div>
      </section>

      <section className="section">
        <h2>Achieve Your Fitness Goals</h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #aac5c9'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              🎯 Common Fitness Goals
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Build Muscle Mass:</strong> Gain strength and size with hypertrophy training</li>
              <li><strong>Lose Fat:</strong> Burn calories and improve body composition</li>
              <li><strong>Improve Strength:</strong> Increase max lifts and raw power</li>
              <li><strong>Boost Endurance:</strong> Build cardiovascular fitness and stamina</li>
              <li><strong>Increase Flexibility:</strong> Improve mobility and range of motion</li>
              <li><strong>Overall Health:</strong> Better fitness, energy, and mental well-being</li>
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #aac5c9'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              📊 Goal Setting Framework (SMART)
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Specific:</strong> "Build 10 lbs of muscle" not "get bigger"</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>Clear target helps focus efforts</p>
              
              <p><strong>Measurable:</strong> Track weight, measurements, or strength gains</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>Data shows progress and keeps motivation high</p>
              
              <p><strong>Achievable:</strong> Realistic within 8-12 weeks or less</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>Ambitious but not impossible</p>
              
              <p><strong>Relevant:</strong> Aligned with your lifestyle and values</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>Something you actually want to achieve</p>
              
              <p><strong>Time-Bound:</strong> Set a deadline (e.g., 12 weeks)</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Creates urgency and accountability</p>
            </div>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #aac5c9'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              💪 Goal-Specific Strategies
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Goal: Build Muscle (3-6 months)</strong></p>
              <ul style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>
                <li>Eat 300-500 surplus, lift heavy 3-4x/week, get 7-9 hours sleep</li>
              </ul>
              
              <p><strong>Goal: Lose Fat (8-16 weeks)</strong></p>
              <ul style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>
                <li>Eat 300-500 deficit, maintain strength training, walk more daily</li>
              </ul>
              
              <p><strong>Goal: Improve Strength (12-16 weeks)</strong></p>
              <ul style={{ marginLeft: '20px', color: '#c0c0c0', marginBottom: '15px' }}>
                <li>Follow periodized program, focus on compound lifts, proper recovery</li>
              </ul>
              
              <p><strong>Goal: Better Endurance (8-12 weeks)</strong></p>
              <ul style={{ marginLeft: '20px', color: '#c0c0c0' }}>
                <li>Incorporate cardio 2-3x/week, high-rep weight training, HIIT workouts</li>
              </ul>
            </div>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #aac5c9'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              📈 Track Your Progress
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Weekly Weigh-Ins:</strong> Track bodyweight trends</li>
              <li><strong>Measurements:</strong> Chest, waist, arms, legs - shows body composition changes</li>
              <li><strong>Strength Tracking:</strong> Log reps and weight for each exercise</li>
              <li><strong>Photos:</strong> Monthly progress photos are incredibly motivating</li>
              <li><strong>Energy Levels:</strong> Note how you feel during workouts</li>
              <li><strong>Recovery Quality:</strong> Sleep, soreness, and overall well-being</li>
              <li><strong>Consistency Streak:</strong> Track workout completion (aim for 80%+ adherence)</li>
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: '#e8e8e8',
            borderLeft: '5px solid #aac5c9'
          }}>
            <h3 style={{ color: '#a89968', marginBottom: '15px', fontSize: '28px', fontWeight: '700' }}>
              🔥 Motivation & Accountability
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Join Our Community:</strong> Connect with others on their fitness journey</li>
              <li><strong>Share Your Goals:</strong> Public commitment increases follow-through</li>
              <li><strong>Celebrate Small Wins:</strong> Every workout and healthy meal matters</li>
              <li><strong>Find a Workout Buddy:</strong> Train with someone for accountability</li>
              <li><strong>Schedule Workouts:</strong> Treat them like important appointments</li>
              <li><strong>Prepare Your Environment:</strong> Lay out gym clothes the night before</li>
              <li><strong>Remember Your "Why":</strong> Connect with deeper motivation</li>
            </ul>
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
            padding: '40px',
            borderRadius: '12px',
            marginBottom: '40px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: '700' }}>
              Start Your Transformation Today
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              Set your goal and follow a proven plan to achieve it with FitHub's guidance
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/coaching" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                Choose Your Program
              </Link>
              <Link to="/exercises" className="btn btn-secondary">
                Browse Exercises
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
