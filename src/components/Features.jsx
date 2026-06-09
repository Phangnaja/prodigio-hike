import React from 'react';
import knitImage from '../assets/knit.png';
import goretexImage from '../assets/goretex.png';
import frixionImage from '../assets/frixion.png';

const Features = () => {
  const features = [
    {
      label: "Stability",
      title: "Integrated Knit",
      description: "4-way stretch gaiter for absolute debris protection.",
      accent: "01",
      image: knitImage
    },
    {
      label: "Performance",
      title: "Gore-Tex ePE",
      description: "High-intensity waterproof breathable membrane.",
      accent: "02",
      image: goretexImage
    },
    {
      label: "Traction",
      title: "FriXion® Red",
      description: "Dual-compound rubber for precision descent.",
      accent: "03",
      image: frixionImage
    }
  ];

  return (
    <section className="features" id="anatomy">
      <div className="container">
        <div className="features-header">
          <span className="section-label">Performance Core</span>
          <h2 className="section-title">The anatomy of <br />breakthrough.</h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <span className="feature-number">{f.accent}</span>
              <div className="feature-content">
                {f.image && (
                  <div className="feature-visual">
                    <img src={f.image} alt={f.title} className="feature-img" />
                  </div>
                )}
                <span className="feature-label">{f.label}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .features {
          background-color: #000;
        }
        .features-header {
          margin-bottom: 8rem;
        }
        .section-label {
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-weight: 800;
          font-size: 0.75rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        .section-title {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }
        .feature-item {
          position: relative;
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .feature-visual {
          margin-bottom: 2rem;
          overflow: hidden;
          background: #111;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .feature-item:hover .feature-img {
          transform: scale(1.05);
        }
        .feature-number {
          position: absolute;
          top: 1rem;
          right: 0;
          font-size: 0.8rem;
          font-weight: 900;
          color: rgba(255,255,255,0.2);
        }
        .feature-label {
          color: var(--color-text-dim);
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          margin-bottom: 1rem;
          display: block;
        }
        .feature-title {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
        }
        .feature-desc {
          color: var(--color-text-dim);
          font-size: 1rem;
          line-height: 1.6;
        }
        @media (max-width: 968px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}} />
    </section>
  );
};

export default Features;
