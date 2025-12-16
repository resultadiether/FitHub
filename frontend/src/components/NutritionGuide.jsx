import React from 'react'
import { Link } from 'react-router-dom'

export default function NutritionGuide() {
  return (
    <main>
      <section className="hero" style={{ minHeight: '400px', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="hero-content">
          <h1>Nutrition & Diet Support</h1>
          <p>Align Your Nutrition with Your Fitness Goals</p>
        </div>
      </section>

      <section className="section">
        <h2>Nutrition Guidance</h2>
        
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
               Nutrition Fundamentals
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
              <li><strong>Calorie Balance:</strong> Understand surplus, deficit, and maintenance</li>
              <li><strong>Macronutrients:</strong> Protein, carbs, and fats for optimal performance</li>
              <li><strong>Micronutrients:</strong> Vitamins and minerals essential for health</li>
              <li><strong>Meal Timing:</strong> Pre-workout and post-workout nutrition strategies</li>
              <li><strong>Hydration:</strong> Proper water intake for recovery and performance</li>
              <li><strong>Supplementation:</strong> Which supplements actually work and which don't</li>
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
               Build Muscle (Hypertrophy) Nutrition
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Caloric Surplus:</strong> Eat 300-500 calories above maintenance</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Provides energy and building blocks for muscle growth</p>
              
              <p><strong>Protein Intake:</strong> 0.8-1g per lb of body weight</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Essential for muscle repair and growth</p>
              
              <p><strong>Carbs:</strong> 2-3g per lb of body weight</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Fuel for intense workouts and muscle glycogen</p>
              
              <p><strong>Healthy Fats:</strong> 0.3-0.5g per lb of body weight</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Support hormone production and nutrient absorption</p>
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
               Fat Loss Nutrition
            </h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>Caloric Deficit:</strong> Eat 300-500 calories below maintenance</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Burns fat while preserving muscle</p>
              
              <p><strong>High Protein:</strong> 1-1.2g per lb of body weight</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Preserves muscle mass during calorie deficit</p>
              
              <p><strong>Prioritize Whole Foods:</strong> Lean meats, vegetables, fruits, grains</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>More filling, better for satiety</p>
              
              <p><strong>Strength Training:</strong> Maintain or increase training intensity</p>
              <p style={{ marginLeft: '20px', color: '#c0c0c0' }}>Signal your body to keep muscle during deficit</p>
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
               Sample Daily Meal Plan (2500 Calories)
            </h3>
            <div style={{ fontSize: '15px', lineHeight: '1.8' }}>
              <p><strong>Breakfast (600 cal):</strong> 3 eggs, 2 slices whole wheat toast, 1 banana, peanut butter</p>
              <p><strong>Snack 1 (250 cal):</strong> Greek yogurt with berries and granola</p>
              <p><strong>Lunch (700 cal):</strong> 6oz grilled chicken, 1.5 cups brown rice, broccoli with olive oil</p>
              <p><strong>Snack 2 (200 cal):</strong> Protein shake with oats and banana</p>
              <p><strong>Dinner (700 cal):</strong> 6oz lean beef, sweet potato, salad with olive oil dressing</p>
              <p><strong>Evening Snack (50 cal):</strong> Casein protein shake</p>
            </div>
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
              Get Personalized Meal Plans
            </h3>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#f0f0f0' }}>
              View detailed nutrition plans tailored to your fitness goals
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/nutrition" className="btn btn-primary" style={{ background: 'white', color: '#a89968' }}>
                View Meal Plans
              </Link>
              <Link to="/coaching" className="btn btn-secondary">
                Get Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
