import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeTraining() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Home Training</h1>
          <p>Build Strength & Fitness From Your Living Room</p>
        </div>
      </section>

      <section className="section">
        <h2>Train Anywhere, Anytime</h2>
        
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
              🏠 Why Train at Home?
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>No Gym Commute:</strong> Save 30-60 minutes per day on travel</li>
              <li><strong>Zero Membership Fees:</strong> No monthly gym costs</li>
              <li><strong>Privacy & Comfort:</strong> Train at your own pace without feeling watched</li>
              <li><strong>Flexible Timing:</strong> Workout before work, during lunch, or late at night</li>
              <li><strong>No Waiting:</strong> All equipment is always available</li>
              <li><strong>Family-Friendly:</strong> Train while kids are home or sleeping</li>
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
              🛠️ Home Gym Setup (Budget Options)
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Minimal Setup ($0-100):</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Bodyweight exercises, resistance bands, yoga mat</p>
              
              <p><strong>Basic Setup ($200-500):</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Adjustable dumbbell set, bench, pull-up bar</p>
              
              <p><strong>Full Setup ($1000+):</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Barbell, rack, weights, bench, cardio equipment</p>
              
              <p><strong>Key Pieces (Priority Order):</strong></p>
              <div style={{ marginLeft: '20px', color: '#c0c0c0' }}>
                <p>1. Pull-up bar (door bar or wall-mounted)</p>
                <p>2. Adjustable dumbbells</p>
                <p>3. Weight bench (optional, can use floor)</p>
                <p>4. Resistance bands</p>
                <p>5. Yoga mat for floor exercises</p>
              </div>
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
              💪 Bodyweight Exercises (No Equipment)
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Chest:</strong> Push-ups, Diamond Push-ups, Archer Push-ups</li>
              <li><strong>Back:</strong> Pull-ups, Chin-ups, Reverse Snow Angels</li>
              <li><strong>Legs:</strong> Squats, Lunges, Pistol Squats, Jump Squats</li>
              <li><strong>Arms:</strong> Dips, Tricep Push-ups, Pike Push-ups</li>
              <li><strong>Core:</strong> Planks, Ab Wheel, Leg Raises, Mountain Climbers</li>
              <li><strong>Full Body:</strong> Burpees, Bear Crawls, Jump Rope</li>
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
              📋 Sample Home Workout (20-30 minutes)
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Warm-up (3 min):</strong> 10 jumping jacks, 10 arm circles each direction, light stretching</p>
              
              <p><strong>Circuit (3 rounds, 30 sec rest between exercises):</strong></p>
              <div style={{ marginLeft: '20px', color: '#c0c0c0' }}>
                <p>• 15 Push-ups</p>
                <p>• 15 Bodyweight Squats</p>
                <p>• 15 Dumbbell Rows (each side)</p>
                <p>• 30-sec Plank Hold</p>
                <p>• 15 Burpees</p>
              </div>
              
              <p><strong>Cool-down (3 min):</strong> Light stretching, deep breathing</p>
            </div>
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
              Start Your Home Training Journey
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              Access home-friendly exercises and programs tailored for minimal equipment
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/exercises" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                Home Exercises
              </Link>
              <Link to="/coaching" className="btn btn-secondary">
                Home Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
