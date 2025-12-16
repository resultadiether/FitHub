import React from 'react'
import { Link } from 'react-router-dom'

export default function BudgetFriendly() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Affordable Coaching</h1>
          <p>Expert Guidance Without the Premium Price Tag</p>
        </div>
      </section>

      <section className="section">
        <h2>Budget-Friendly Fitness</h2>
        
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
               Why FitHub is Affordable
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>No Personal Trainer Costs:</strong> Access expert guidance for a fraction of 1-on-1 coaching</li>
              <li><strong>Digital First:</strong> No facility overhead means lower prices for you</li>
              <li><strong>Self-Paced:</strong> Learn at your own speed without rushing through sessions</li>
              <li><strong>Lifetime Access:</strong> Once you buy, content is yours forever</li>
              <li><strong>Community Support:</strong> Learn from other users' experiences and results</li>
              <li><strong>Regular Updates:</strong> New exercises and programs added constantly</li>
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
               Cost Comparison
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '2' }}>
              <p><strong>Personal Trainer (1-on-1):</strong> $50-200+ per session</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}> $200-800/month for consistent training</p>
              
              <p><strong>Gym Membership:</strong> $20-200+ per month</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}> Limited form guidance and programming</p>
              
              <p><strong>FitHub Premium:</strong> One-time investment</p>
              <p style={{ marginLeft: '20px', color: '#a89968' }}> Lifetime access to all content and updates</p>
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
               Money-Saving Tips
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Start at Home:</strong> Many exercises require no equipment</li>
              <li><strong>Minimal Equipment:</strong> Dumbbells and a bench are all you need to start</li>
              <li><strong>Free Resources:</strong> Use our YouTube tutorials for form guidance</li>
              <li><strong>Nutrition on Budget:</strong> Eggs, chicken, rice, and beans are cheap and effective</li>
              <li><strong>Meal Prep:</strong> Cook in bulk to save time and money</li>
              <li><strong>DIY Tracking:</strong> Use free apps to track workouts and nutrition</li>
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
               What's Included
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li> 100+ exercise tutorials with form breakdowns</li>
              <li> Beginner to Advanced training programs</li>
              <li> Nutrition guides for muscle gain and fat loss</li>
              <li> Progress tracking tools</li>
              <li> ommunity access for motivation</li>
              <li> Regular updates and new content</li>
              <li> No hidden fees or subscriptions</li>
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
              Get Professional Coaching at Budget Prices
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              Start your fitness journey without breaking the bank
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/coaching" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                View Plans
              </Link>
              <Link to="/exercises" className="btn btn-secondary">
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
