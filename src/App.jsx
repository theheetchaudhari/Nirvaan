import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      background: 'radial-gradient(circle at center, rgba(57, 255, 20, 0.15) 0%, #050505 80%)',
      backgroundColor: '#050505',
      color: '#f9fafb',
      fontFamily: "'Inter', sans-serif"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: 'rgba(17, 24, 39, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(57, 255, 20, 0.1)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          maxWidth: '650px',
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          style={{ display: 'inline-block', marginBottom: '1rem' }}
        >
          <span style={{ fontSize: '3.5rem' }}>🚧</span>
        </motion.div>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 800, 
          marginBottom: '1rem',
          color: '#f9fafb',
          letterSpacing: '-1px'
        }}>
          Work in Progress
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#9ca3af',
          marginBottom: '0.75rem',
          lineHeight: 1.6
        }}>
          We’re improving Nirvaan for a better climate impact experience 🌱
        </p>
        
        <p style={{
          fontSize: '1.05rem',
          color: '#6b7280',
          marginBottom: '2.5rem',
          fontWeight: 500
        }}>
          Carbon Footprint Tracker will be back soon
        </p>

        <motion.button 
          disabled
          style={{
            background: 'rgba(57, 255, 20, 0.05)',
            color: '#39ff14',
            border: '1px solid rgba(57, 255, 20, 0.3)',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: 700,
            borderRadius: '999px',
            cursor: 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem'
          }}
          animate={{ 
            boxShadow: ['0 0 10px rgba(57,255,20,0.1)', '0 0 25px rgba(57,255,20,0.2)', '0 0 10px rgba(57,255,20,0.1)'],
            borderColor: ['rgba(57,255,20,0.2)', 'rgba(57,255,20,0.5)', 'rgba(57,255,20,0.2)']
          }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <motion.span 
            animate={{ opacity: [1, 0.3, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#39ff14',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px #39ff14'
            }}
          />
          Coming Soon
        </motion.button>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem'
        }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#9ca3af',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontWeight: 500
          }}>
            <span style={{ fontSize: '1.2rem' }}>💡</span> 
            Small daily actions can reduce CO₂ emissions significantly
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;