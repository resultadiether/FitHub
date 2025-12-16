import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function MuscleGroupGallery() {
  const { muscleGroupId } = useParams()

  // Sample image data - in a real app, you'd fetch this from an API
  const imageGalleries = {
    'upper-body': {
      title: 'Upper Body Exercises',
      description: 'Gallery of upper body exercises for beginners',
      images: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/300/200?random=${i + 100}&exercise=upper`,
        alt: `Upper Body Exercise ${i + 1}`,
        title: `Upper Exercise ${i + 1}`
      }))
    },
    'lower-body': {
      title: 'Lower Body Exercises',
      description: 'Gallery of lower body exercises for beginners',
      images: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/300/200?random=${i + 200}&exercise=lower`,
        alt: `Lower Body Exercise ${i + 1}`,
        title: `Lower Exercise ${i + 1}`
      }))
    },
    'core': {
      title: 'Core Exercises',
      description: 'Gallery of core exercises for beginners',
      images: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/300/200?random=${i + 300}&exercise=core`,
        alt: `Core Exercise ${i + 1}`,
        title: `Core Exercise ${i + 1}`
      }))
    }
  }

  const gallery = imageGalleries[muscleGroupId] || imageGalleries['upper-body']

  return (
    <main style={{ padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Back Button */}
        <Link 
          to="/beginners" 
          style={{
            display: 'inline-block',
            marginBottom: '30px',
            padding: '10px 20px',
            background: '#1f1f2e',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            border: '2px solid #a89968'
          }}
        >
          ← Back to Beginners Guide
        </Link>

        {/* Gallery Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '36px', color: '#a89968', marginBottom: '15px' }}>
            {gallery.title}
          </h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
            {gallery.description}
          </p>
        </div>

        {/* Image Gallery - 2 rows of 5 images each */}
        <div style={{ marginBottom: '40px' }}>
          {/* First Row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {gallery.images.slice(0, 5).map((image) => (
              <div 
                key={image.id}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                  {image.title}
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px'
          }}>
            {gallery.images.slice(5, 10).map((image) => (
              <div 
                key={image.id}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '14px'
                }}>
                  {image.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Information */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0d7a84 0%, #1f1f2e 100%)',
          padding: '40px',
          borderRadius: '12px',
          color: '#e8e8e8',
          marginTop: '40px'
        }}>
          <h2 style={{ color: '#a89968', marginBottom: '20px' }}>
            Exercise Tips for {gallery.title}
          </h2>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '20px' }}>
            <li>Start with light weights to master form</li>
            <li>Focus on controlled movements</li>
            <li>Breathe properly during each exercise</li>
            <li>Rest 60-90 seconds between sets</li>
            <li>Stay hydrated throughout your workout</li>
            <li>Listen to your body and don't push through pain</li>
          </ul>
        </div>
      </div>
    </main>
  )
}