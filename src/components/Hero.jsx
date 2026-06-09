import React from 'react';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-tagline">Prodigio Hike GTX</span>
          <h1 className="hero-title">
            Trail Speed <br />
            Hike Feel.
          </h1>
          <p className="hero-subtext">
            The next generation of fast-hiking. <br />
            Engineered for those who refuse to slow down.
          </p>
          <div className="hero-actions">
            <a href="#anatomy" className="btn">Discover the Tech</a>
            <button className="btn btn-ghost">View Collection</button>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          padding: 0;
          background: #000;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          filter: contrast(1.1) brightness(0.9);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #000 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero-tagline {
          color: var(--color-primary);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          display: block;
          animation: fadeInDown 1s ease forwards;
        }
        .hero-title {
          font-size: clamp(4rem, 10vw, 8rem);
          line-height: 0.9;
          margin-bottom: 2.5rem;
          animation: fadeInUp 1s ease 0.2s forwards;
          opacity: 0;
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
          color: transparent;
        }
        .hero-subtext {
          font-size: 1.2rem;
          color: #ccc;
          max-width: 500px;
          margin-bottom: 3.5rem;
          animation: fadeInUp 1s ease 0.4s forwards;
          opacity: 0;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 1s ease 0.6s forwards;
          opacity: 0;
        }
        .btn-ghost {
          background: transparent;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .btn-ghost:hover {
          border-color: white;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 4rem;
          z-index: 2;
        }
        .scroll-line {
          width: 1px;
          height: 60px;
          background: rgba(255,255,255,0.2);
          position: relative;
          overflow: hidden;
        }
        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-primary);
          animation: scrollLine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .hero-overlay {
            background: linear-gradient(to top, #000 20%, rgba(0,0,0,0.2) 100%);
          }
          .hero-content {
            text-align: center;
          }
          .hero-subtext {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-scroll-indicator {
            left: 50%;
            transform: translateX(-50%);
          }
          .hero-bg-img {
            object-position: right center;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
