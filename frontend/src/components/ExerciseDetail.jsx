import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function ExerciseDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [exercise, setExercise] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    api.get(`/exercises/${id}`).then(r=>{ setExercise(r.data); setLoading(false) }).catch(()=>{ setLoading(false) })
  }, [id])

  if (loading) return <div className="loading">Loading...</div>
  if (!exercise) return <div className="empty">Exercise not found</div>

  return (
    <main>
      <section className="section" style={{ maxWidth: 900, margin: '40px auto' }}>
        <div className="card">
          <div className="card-header">
            <div className="card-label">{exercise.difficulty}</div>
            <div className="card-title">{exercise.name}</div>
          </div>
          <div className="card-body">
            <span className="badge">{exercise.category}</span>
            <p style={{ marginTop: 12 }}><strong>Primary Muscles:</strong> {exercise.primary_muscles}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <h4 style={{ marginTop: 20 }}>Instructions</h4>
            <p style={{ color: '#444', lineHeight: 1.6 }}>{exercise.instructions}</p>
            {exercise.video_url && (
              <div style={{ marginTop: 20 }}>
                <h4>Video</h4>
                <a href={exercise.video_url} target="_blank" rel="noreferrer">Watch demo</a>
              </div>
            )}
            <div style={{ display:'flex', gap:12, marginTop:20 }}>
              <button className="btn btn-primary" onClick={()=>navigate('/exercises')}>Back</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
