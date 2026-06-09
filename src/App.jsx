import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import BrandStory from './components/BrandStory';
import Features from './components/Features';
import TechSpecs from './components/TechSpecs';
import CTA from './components/CTA';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="app">
      <header style={{ padding: '2rem 0', position: 'absolute', width: '100%', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://caveman-store.com/lasportiva/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="La Sportiva Logo" style={{ height: '50px', width: 'auto' }} />
          </a>
        </div>
      </header>
      
      <main>
        <Hero />
        <Problem />
        <BrandStory />
        <Features />
        <TechSpecs />
        <CTA />
      </main>

      <footer style={{ padding: '5rem 0', backgroundColor: '#000', textAlign: 'center', borderTop: '1px solid #222' }}>
        <div className="container">
          <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
            © 2026 La Sportiva. All rights reserved. <br />
            Designed for the mountains.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
