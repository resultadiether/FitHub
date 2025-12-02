import React, { useState } from 'react'

export default function Coaching() {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [userLevel, setUserLevel] = useState('beginner')

  const plans = [
    {
      id: 1,
      level: 'beginner',
      title: 'Beginner Full Body',
      duration: '4 weeks',
      frequency: '3x per week',
      description: 'Perfect for gym newcomers. Learn proper form and build foundational strength.',
      highlights: [
        'Form-focused exercises',
        'Low injury risk',
        'Confidence building',
        'Bodyweight + basic weights'
      ],
      price: 'Free'
    },
    {
      id: 2,
      level: 'beginner',
      title: 'Home Bodyweight',
      duration: '4 weeks',
      frequency: '4x per week',
      description: 'No equipment needed. Perfect for home or remote training.',
      highlights: [
        'No equipment required',
        'Flexible scheduling',
        'Video tutorials',
        'Progressive difficulty'
      ],
      price: 'Free'
    },
    {
      id: 3,
      level: 'intermediate',
      title: 'Muscle Building',
      duration: '8 weeks',
      frequency: '4-5x per week',
      description: 'Hypertrophy-focused program to build lean muscle mass.',
      highlights: [
        'Advanced progressions',
        'Volume-based training',
        'Nutrition guidance',
        'Form refinement'
      ],
      price: '$19.99'
    },
    {
      id: 4,
      level: 'intermediate',
      title: 'Fat Loss & Tone',
      duration: '8 weeks',
      frequency: '4-5x per week',
      description: 'Cardio + strength combo for sustainable fat loss.',
      highlights: [
        'HIIT workouts',
        'Strength training',
        'Metabolism boost',
        'Meal timing tips'
      ],
      price: '$19.99'
    }
  ]

  const filteredPlans = plans.filter(p => p.level === userLevel)

  return (
    <main>
      <section className="hero" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="hero-content">
          <h1>Personalized Coaching</h1>
          <p>Structured training plans designed by experts for your level and goals.</p>
        </div>
      </section>

      <section className="section">
        {/* Experience Level Selector */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Select Your Experience Level</h3>
          <div className="tabs" style={{ justifyContent: 'center' }}>
            <button
              className={`tab-btn ${userLevel === 'beginner' ? 'active' : ''}`}
              onClick={() => setUserLevel('beginner')}
            >
              👶 Beginner
            </button>
            <button
              className={`tab-btn ${userLevel === 'intermediate' ? 'active' : ''}`}
              onClick={() => setUserLevel('intermediate')}
            >
              💪 Intermediate
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid">
          {filteredPlans.map(plan => (
            <div 
              key={plan.id} 
              className="card" 
              onClick={() => setSelectedPlan(plan.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-header">
                <div className="card-label">{plan.duration}</div>
                <div className="card-title">{plan.title}</div>
              </div>
              <div className="card-body">
                <p style={{ marginBottom: '15px', color: '#666' }}>{plan.description}</p>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#667eea' }}>📅 {plan.frequency}</strong>
                </div>
                <ul style={{ listStyle: 'none', marginBottom: '15px' }}>
                  {plan.highlights.map((h, i) => (
                    <li key={i} style={{ marginBottom: '8px', color: '#555', fontSize: '13px' }}>
                      ✓ {h}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <span style={{ fontWeight: 'bold', color: '#667eea', fontSize: '18px' }}>{plan.price}</span>
                  <button className="btn btn-primary" style={{ background: '#667eea', color: 'white', border: 'none', padding: '8px 16px' }}>
                    Start Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '800px', margin: '80px auto 0', paddingTop: '60px', borderTop: '2px solid #eee' }}>
          <h2 style={{ marginBottom: '30px' }}>Coaching FAQs</h2>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>How often should I follow the plan?</h4>
            <p>Follow the recommended frequency for best results. Rest days are included for recovery.</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Can I modify exercises?</h4>
            <p>Yes! Each exercise has alternatives for different equipment or skill levels.</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Will I get personalized form feedback?</h4>
            <p>Premium plans include AI form analysis and coach feedback. Freemium plans have video guides.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
