import React, { useState } from 'react'

export default function Nutrition() {
  const [fitnessGoal, setFitnessGoal] = useState('muscle-gain')
  const [dietaryPreference, setDietaryPreference] = useState('balanced')

  const mealPlans = {
    'muscle-gain': {
      goal: 'Muscle Building',
      calories: '2,500-3,000',
      protein: '180-210g',
      meals: [
        {
          name: 'Breakfast',
          examples: [
            '3 whole eggs + 2 slices toast + Greek yogurt',
            'Oatmeal (100g) + protein powder + banana',
            'Pancakes with honey + chicken breast'
          ]
        },
        {
          name: 'Mid-Morning Snack',
          examples: [
            'Protein bar + apple',
            'Almonds (30g) + banana',
            'Cottage cheese + berries'
          ]
        },
        {
          name: 'Lunch',
          examples: [
            'Grilled chicken (200g) + rice + vegetables',
            'Salmon (180g) + sweet potato + broccoli',
            'Lean beef (200g) + pasta + tomato sauce'
          ]
        },
        {
          name: 'Pre-Workout',
          examples: [
            'White rice (50g) + banana',
            'Bagel + almond butter',
            'Energy drink + rice cakes'
          ]
        },
        {
          name: 'Dinner',
          examples: [
            'Chicken breast (250g) + quinoa + vegetables',
            'Tuna (200g) + brown rice + greens',
            'Turkey (250g) + sweet potato + carrots'
          ]
        },
        {
          name: 'Before Bed',
          examples: [
            'Casein protein shake',
            'Greek yogurt (200g)',
            'Cottage cheese + almonds'
          ]
        }
      ]
    },
    'fat-loss': {
      goal: 'Fat Loss',
      calories: '1,800-2,100',
      protein: '160-180g',
      meals: [
        {
          name: 'Breakfast',
          examples: [
            'Egg white omelette (6 whites) + 1 slice toast + vegetables',
            'Oatmeal (50g) + protein powder + berries',
            'Greek yogurt (150g) + granola (20g) + honey'
          ]
        },
        {
          name: 'Mid-Morning Snack',
          examples: [
            'Protein shake + apple',
            'Almonds (15g) + celery',
            'Low-fat yogurt'
          ]
        },
        {
          name: 'Lunch',
          examples: [
            'Grilled chicken (150g) + brown rice (80g) + broccoli',
            'Salmon (120g) + sweet potato (100g) + spinach',
            'Lean turkey (150g) + quinoa (80g) + vegetables'
          ]
        },
        {
          name: 'Pre-Workout',
          examples: [
            'Banana + almonds (10g)',
            'Rice cakes + almond butter (1 tbsp)',
            'Energy drink (sugar-free)'
          ]
        },
        {
          name: 'Dinner',
          examples: [
            'Chicken breast (180g) + salad + lemon juice',
            'Tilapia (150g) + steamed vegetables + olive oil spray',
            'Lean ground turkey (160g) + green beans + tomato sauce'
          ]
        },
        {
          name: 'Before Bed',
          examples: [
            'Whey protein shake (zero-calorie sweetener)',
            'Casein shake',
            'Low-fat cottage cheese (100g)'
          ]
        }
      ]
    }
  }

  const currentPlan = mealPlans[fitnessGoal]

  const tips = [
    ' Drink 3-4 liters of water daily for optimal performance and recovery.',
    ' Prioritize whole foods: chicken, fish, eggs, rice, oats, vegetables, fruits.',
    ' Eat every 3-4 hours to maintain energy and muscle protein synthesis.',
    ' Time carbs around your workout for better energy and recovery.',
    ' Don\'t go too low in calories; aim for gradual, sustainable changes.',
    ' Track your intake using apps like MyFitnessPal for 2 weeks to learn portions.'
  ]

  return (
    <main>
      <section className="hero" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="hero-content">
          <h1>Nutrition Guidance</h1>
          <p>Personalized meal suggestions aligned with your fitness goals.</p>
        </div>
      </section>

      <section className="section">
        {/* Upper, Lower, Core Cards Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {/* Upper Body Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1f1f2e 0%, #667eea 100%)',
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
              <span></span> Upper Body Nutrition
            </h3>
            <p style={{ color: '#e8e8e8', marginBottom: '20px', lineHeight: '1.6' }}>
              High-protein foods for chest, back, shoulder, and arm development
            </p>
            <ul style={{ 
              textAlign: 'left', 
              color: '#c0c0c0', 
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '25px'
            }}>
              <li>Chicken breast, turkey, lean beef</li>
              <li>Salmon, tuna, mackerel</li>
              <li>Eggs, Greek yogurt, cottage cheese</li>
              <li>Whey & casein protein</li>
            </ul>
            
          </div>

          {/* Lower Body Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1f1f2e 0%, #667eea 100%)',
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
              <span></span> Lower Body Nutrition
            </h3>
            <p style={{ color: '#e8e8e8', marginBottom: '20px', lineHeight: '1.6' }}>
              Energy-dense foods for powerful legs and glute development
            </p>
            <ul style={{ 
              textAlign: 'left', 
              color: '#c0c0c0', 
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '25px'
            }}>
              <li>Sweet potatoes, brown rice, quinoa</li>
              <li>Lean beef, salmon, eggs</li>
              <li>Oats, whole grain pasta</li>
              <li>Complex carbs for energy</li>
            </ul>
         
          </div>

          {/* Core Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1f1f2e 0%, #667eea 100%)',
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
              <span></span> Core Nutrition
            </h3>
            <p style={{ color: '#e8e8e8', marginBottom: '20px', lineHeight: '1.6' }}>
              Foods for core strength, stability, and definition
            </p>
            <ul style={{ 
              textAlign: 'left', 
              color: '#c0c0c0', 
              fontSize: '14px',
              lineHeight: '1.8',
              marginBottom: '25px'
            }}>
              <li>Leafy greens, broccoli, spinach</li>
              <li>Avocado, nuts, olive oil</li>
              <li>Lean proteins for definition</li>
              <li>Low-sodium, anti-inflammatory foods</li>
            </ul>
            
          </div>
        </div>

        {/* Goal Selector */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Select Your Fitness Goal</h3>
          <div className="tabs" style={{ justifyContent: 'center' }}>
            <button
              className={`tab-btn ${fitnessGoal === 'muscle-gain' ? 'active' : ''}`}
              onClick={() => setFitnessGoal('muscle-gain')}
            >
               Muscle Gain
            </button>
            <button
              className={`tab-btn ${fitnessGoal === 'fat-loss' ? 'active' : ''}`}
              onClick={() => setFitnessGoal('fat-loss')}
            >
               Fat Loss
            </button>
          </div>
        </div>

        {/* Plan Overview */}
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '40px', borderRadius: '12px', marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>{currentPlan.goal} Plan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Daily Calories</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>{currentPlan.calories}</div>
            </div>
            <div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Daily Protein</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '8px' }}>{currentPlan.protein}</div>
            </div>
          </div>
        </div>

        {/* Sample Meal Plan */}
        <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Sample Daily Meal Plan</h2>
        <div style={{ marginBottom: '50px' }}>
          {currentPlan.meals.map((mealTime, i) => (
            <div key={i} style={{ marginBottom: '30px', padding: '25px', background: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '18px' }}>🍽️ {mealTime.name}</h3>
              <ul style={{ listStyle: 'none' }}>
                {mealTime.examples.map((example, j) => (
                  <li key={j} style={{ marginBottom: '10px', paddingLeft: '20px', position: 'relative', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Nutrition Tips */}
        <div style={{ background: '#f0f4ff', padding: '40px', borderRadius: '10px', marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Nutrition Tips for Success</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #667eea' }}>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40px', borderTop: '2px solid #eee' }}>
          <h2 style={{ marginBottom: '30px' }}>Nutrition FAQs</h2>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>What if I'm vegetarian or have dietary restrictions?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>All plans can be customized. Replace meat with tofu, tempeh, legumes, or plant-based proteins. Our coaches can help tailor the meal plan to your needs.</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Should I count calories exactly?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>For the first 2-3 weeks, yes. This helps you learn portions. After that, use visual cues: palm-sized protein, fist-sized carbs, thumb-sized fats.</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Can I eat out and still follow the plan?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Absolutely! Choose grilled proteins, skip heavy sauces, ask for vegetables instead of fries. We have guides for popular restaurants.</p>
          </div>

          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>When should I eat carbs?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Prioritize carbs around your workout: 30-60min before for energy, immediately after for recovery. Keep evening carbs moderate.</p>
          </div>
        </div>
      </section>
    </main>
  )
}