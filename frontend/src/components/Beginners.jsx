import React from 'react'
import { Link } from 'react-router-dom'

export default function Beginners() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Gym Novices</h1>
          <p>Your Complete Guide to Starting Your Fitness Journey</p>
        </div>
      </section>

      <section className="section">
        <h2>For Beginners</h2>
        
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
              🎯 What You'll Learn
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Proper Exercise Form:</strong> Master the fundamentals with step-by-step video tutorials</li>
              <li><strong>Safety First:</strong> Learn injury prevention techniques and when to seek form correction</li>
              <li><strong>Equipment Basics:</strong> Understand how to use dumbbells, barbells, and gym machines safely</li>
              <li><strong>Progressive Overload:</strong> Start light and increase weight gradually as you get stronger</li>
              <li><strong>Rest & Recovery:</strong> Learn why rest days are crucial for muscle growth</li>
              <li><strong>Nutrition Foundations:</strong> Understand basic calorie and protein needs</li>
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
              📋 Your First Week Plan
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Day 1-2: Lower Body Basics</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Squats, Leg Press, Calf Raises - Build leg strength foundation</p>
              
              <p><strong>Day 3-4: Upper Body Basics</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Bench Press, Rows, Shoulder Press - Develop upper body strength</p>
              
              <p><strong>Day 5: Full Body & Core</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Deadlifts, Planks, Ab Work - Strengthen your core</p>
              
              <p><strong>Day 6-7: Rest or Light Activity</strong></p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Walking, stretching, recovery - Allow muscles to repair</p>
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
              ⚠️ Common Mistakes to Avoid
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Using Too Much Weight Too Soon:</strong> Start light, focus on form first</li>
              <li><strong>Skipping Warm-ups:</strong> Always warm up before lifting</li>
              <li><strong>Poor Nutrition:</strong> You can't out-train a bad diet</li>
              <li><strong>Not Sleeping Enough:</strong> Muscles grow during rest, not during workouts</li>
              <li><strong>Doing Too Much Too Soon:</strong> Stick to 3-4 workouts per week initially</li>
              <li><strong>Comparing Yourself to Others:</strong> Everyone's on their own journey</li>
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
              Ready to Get Started?
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              Explore our exercise library with detailed form guides perfect for beginners
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/exercises" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                Browse Exercises
              </Link>
              <Link to="/coaching" className="btn btn-secondary">
                View Training Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
