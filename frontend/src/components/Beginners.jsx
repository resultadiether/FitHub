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
        
        {/* Muscle Group Cards */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '30px', 
          justifyContent: 'center',
          marginBottom: '60px',
          maxWidth: '1200px',
          margin: '0 auto 60px'
        }}>
          
          {/* Upper Body Card */}
          <div style={{
              background: 'linear-gradient(135deg, #1f1f2e 0%, #0d7a84 100%)',
              borderRadius: '12px',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              borderTop: '5px solid #a89968',
              transition: 'transform 0.3s ease'
            }}>
            <h3 style={{ 
                color: '#a89968', 
                marginBottom: '15px', 
                fontSize: '24px', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
              Upper Body
            </h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.6',
              marginBottom: '20px',
              color: '#e8e8e8'
            }}>
              Focus on chest, back, shoulders, and arms. Build upper body strength with compound movements.
            </p>
            <div style={{  
              padding: '15px', 
              borderRadius: '8px',
              marginTop: '15px'
            }}>
               <ul style={{ 
                textAlign: 'left', 
                color: '#c0c0c0', 
                fontSize: '14px',
                lineHeight: '1.8',
                marginBottom: '25px'
              }}>
                <li>Bench Press</li>
                <li>Rows</li>
                <li>Shoulder Press</li>
                <li>Lat Pulldowns</li>
              </ul>
            </div>
          </div>

          {/* Lower Body Card */}
          <div style={{
              background: 'linear-gradient(135deg, #1f1f2e 0%, #0d7a84 100%)',
              borderRadius: '12px',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              borderTop: '5px solid #a89968',
              transition: 'transform 0.3s ease'
            }}>
            <h3 style={{ 
                color: '#a89968', 
                marginBottom: '15px', 
                fontSize: '24px', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
               Lower Body
            </h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.6',
              marginBottom: '20px',
              color: '#e8e8e8'
            }}>
              Strengthen legs, glutes, and calves. Build a solid foundation for all movements.
            </p>
            <div style={{ 
              
              padding: '15px', 
              borderRadius: '8px',
              marginTop: '15px'
            }}>
               <ul style={{ 
                textAlign: 'left', 
                color: '#c0c0c0', 
                fontSize: '14px',
                lineHeight: '1.8',
                marginBottom: '25px'
              }}>
                <li>Squats</li>
                <li>Leg Press</li>
                <li>Oblique development</li>
                <li>Stability training</li>
              </ul>
            </div>
          </div>

          {/* Core Card */}
          <div style={{
              background: 'linear-gradient(135deg, #1f1f2e 0%, #0d7a84 100%)',
              borderRadius: '12px',
              padding: '30px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              borderTop: '5px solid #a89968',
              transition: 'transform 0.3s ease'
            }}>
            <h3 style={{ 
                color: '#a89968', 
                marginBottom: '15px', 
                fontSize: '24px', 
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}>
               Core
            </h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.6',
              marginBottom: '20px',
              color: '#e8e8e8'
            }}>
              Strengthen your abs and lower back. Essential for stability and preventing injuries.
            </p>
             <ul style={{ 
                textAlign: 'left', 
                color: '#c0c0c0', 
                fontSize: '14px',
                lineHeight: '1.8',
                marginBottom: '25px'
              }}>
                <li>Planks</li>
                <li>Deadlift</li>
                <li>Ab Work</li>
                <li>Rotational exercises</li> 
              </ul>
          </div>
        </div>

        {/* Original content continues */}
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
               What You'll Learn
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
               Your First Week Plan
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
               Common Mistakes to Avoid
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