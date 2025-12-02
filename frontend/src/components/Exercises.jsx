import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function Exercises() {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetchExercises()
  }, [])

  const fetchExercises = async () => {
    try {
      const res = await api.get('/exercises')
      setExercises(res.data.data || res.data)
    } catch (err) {
      console.error('Error fetching exercises:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value)
    if (e.target.value.length > 2) {
      try {
        const res = await api.get('/exercises/search', { params: { q: e.target.value } })
        setExercises(res.data.data || res.data)
      } catch (err) {
        console.error('Search error:', err)
      }
    } else if (e.target.value.length === 0) {
      fetchExercises()
    }
  }

  const categories = ['All', ...new Set(exercises.map(e => e.category))]
  const filtered = selectedCategory === 'All' 
    ? exercises 
    : exercises.filter(e => e.category === selectedCategory)

  const navigate = useNavigate()

  const handleAdd = async () => {
    const name = prompt('Exercise name')
    if (!name) return
    const category = prompt('Category (e.g., Chest, Legs)', 'General')
    const difficulty = prompt('Difficulty (Beginner/Intermediate/Advanced)', 'Beginner')
    const primary_muscles = prompt('Primary muscles', '')
    const equipment = prompt('Equipment', 'Bodyweight')
    const instructions = prompt('Instructions', '')
    try {
      const res = await api.post('/exercises', { name, category, difficulty, primary_muscles, equipment, instructions })
      alert('Created')
      fetchExercises()
    } catch (err) {
      alert(err?.response?.data?.error || 'Error creating. Are you logged in?')
    }
  }

  const handleEdit = async (ex) => {
    const name = prompt('Exercise name', ex.name)
    if (!name) return
    const category = prompt('Category', ex.category)
    const difficulty = prompt('Difficulty', ex.difficulty)
    const primary_muscles = prompt('Primary muscles', ex.primary_muscles)
    const equipment = prompt('Equipment', ex.equipment)
    const instructions = prompt('Instructions', ex.instructions)
    try {
      await api.put(`/exercises/${ex.id}`, { name, category, difficulty, primary_muscles, equipment, instructions })
      alert('Updated')
      fetchExercises()
    } catch (err) {
      alert(err?.response?.data?.error || 'Error updating. Are you logged in?')
    }
  }

  const handleDelete = async (ex) => {
    if (!confirm('Delete this exercise?')) return
    try {
      await api.delete(`/exercises/${ex.id}`)
      alert('Deleted')
      fetchExercises()
    } catch (err) {
      alert(err?.response?.data?.error || 'Error deleting. Are you logged in?')
    }
  }

  return (
    <main>
      <section className="hero" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="hero-content">
          <h1>Exercise Library</h1>
          <p>Master 100+ exercises with detailed instructions, proper form, and safety tips.</p>
        </div>
      </section>

      <section className="section">
        {/* Search */}
        <div className="form-group" style={{ maxWidth: '500px', margin: '0 auto 30px' }}>
          <input 
            type="text" 
            placeholder="Search exercises by name or muscle group..."
            value={searchTerm}
            onChange={handleSearch}
            style={{ padding: '14px 20px', fontSize: '16px', borderRadius: '8px', border: '2px solid #667eea' }}
          />
        </div>

        {/* Category Filter */}
        <div className="tabs" style={{ justifyContent: 'center' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <button className="btn btn-primary" onClick={handleAdd} style={{ marginRight: 10 }}>Add Exercise</button>
          <button className="btn" onClick={()=>{ const t = prompt('Enter token to set (for testing)'); if (t) { localStorage.setItem('fithub_token', t); alert('token set') } }}>Set Token</button>
        </div>

        {loading ? (
          <div className="loading">Loading exercises...</div>
        ) : filtered.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">😔</div>
            <p>No exercises found. Try adjusting your search.</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map(exercise => (
              <div key={exercise.id} className="card">
                <div className="card-header">
                  <div className="card-label">{exercise.difficulty}</div>
                  <div className="card-title">{exercise.name}</div>
                </div>
                <div className="card-body">
                  <span className="badge">{exercise.category}</span>
                  <p><strong>Primary Muscles:</strong> {exercise.primary_muscles}</p>
                  <p><strong>Equipment:</strong> {exercise.equipment}</p>
                  <p style={{ fontSize: '13px', color: '#888' }}>{exercise.instructions?.substring(0, 100)}...</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <Link to={`/exercises/${exercise.id}`} className="btn btn-primary" style={{ flex: 1, textAlign: 'center' }}>View</Link>
                    <button className="btn" onClick={()=>handleEdit(exercise)}>Edit</button>
                    <button className="btn" onClick={()=>handleDelete(exercise)} style={{ background: '#ff6b6b', color: 'white' }}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
