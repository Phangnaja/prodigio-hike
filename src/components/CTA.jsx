import React from 'react';
import ctaBg from '../assets/cta-bg.jpg';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-background">
        <img src={ctaBg} alt="" className="cta-img" />
        <div className="cta-overlay"></div>
      </div>
      
      <div className="container cta-content">
        <h2 className="cta-title">Join the <br />Evolution.</h2>
        <p className="cta-desc">Experience the Prodigio Hike GTX.</p>
        <a href="https://caveman-store.com/lasportiva/" target="_blank" rel="noopener noreferrer" className="btn">
          Shop the Collection
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cta {
          position: relative;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 0;
        }
        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .cta-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }
        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, transparent 0%, #000 100%);
        }
        .cta-content {
          position: relative;
          z-index: 2;
        }
        .cta-title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          margin-bottom: 2rem;
        }
        .cta-desc {
          font-size: 1.25rem;
          color: var(--color-primary);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 3rem;
        }
        @media (max-width: 768px) {
          .cta {
            height: 70vh;
          }
        }
      `}} />
    </section>
  );
};

export default CTA;
