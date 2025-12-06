import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:8000/home?action=all';
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No content</div>;

    const { hero = {}, features = [], benefits = [], cta = {} } = data;

  return (
    <main>
      /* Hero Section */
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
          <div className="feature-icon">🎯</div>
          <h3>Better Form</h3>
          <p>Learn proper exercise technique with step-by-step instructions and safety tips to prevent injuries and maximize results.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">👨‍🏫</div>
          <h3>Better Support</h3>
          <p>Get personalized coaching and structured training plans designed for your level, whether you're a beginner or advanced.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🥗</div>
          <h3>Better Nutrition</h3>
          <p>Receive tailored meal suggestions and nutrition guidance aligned with your fitness goals and lifestyle.</p>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section">
        <h2>Perfect For Everyone</h2>
        <div className="grid">
          <div className="card">
            <div className="card-header">
              <div className="card-label">👶 Beginners</div>
              <div className="card-title">Gym Novices</div>
            </div>
            <div className="card-body">
              <p>New to the gym? Get detailed guidance on proper form, exercise basics, and injury prevention to build confidence from day one.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-label">💪 Intermediate</div>
              <div className="card-title">Experienced Lifters</div>
            </div>
            <div className="card-body">
              <p>Break through plateaus with advanced programming, form refinement, and structured plans from expert coaches.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-label">🥗 Nutrition</div>
              <div className="card-title">Diet Support</div>
            </div>
            <div className="card-body">
              <p>Struggling to align your diet with fitness goals? Get practical, easy-to-follow meal suggestions for muscle gain or fat loss.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-label">💰 Budget</div>
              <div className="card-title">Affordable Coaching</div>
            </div>
            <div className="card-body">
              <p>Get professional coaching without personal trainer costs. FitHub brings expert guidance to your budget.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-label">🏠 Remote</div>
              <div className="card-title">Home Training</div>
            </div>
            <div className="card-body">
              <p>Train at home with clear video tutorials, form guidance, and motivation—no gym membership required.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-label">🎯 Goals</div>
              <div className="card-title">Goal Achievement</div>
            </div>
            <div className="card-body">
              <p>Whether you want to build muscle, lose weight, or get fit, FitHub keeps you motivated and on track.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center', background: '#f0f4ff', padding: '80px 20px', borderRadius: '10px', marginTop: '40px' }}>
        <h2>Ready to Transform Your Fitness?</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
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

