import React from 'react';
import brandImage from '../assets/brand-image.jpg';
import cavemanLogo from '../assets/caveman-logo.png';

const BrandStory = () => {
  return (
    <section className="brand-story">
      <div className="container">
        <div className="brand-story-grid">
          <div className="brand-story-content">
            <span className="section-label">Meet the Caveman Store</span>
            <h2 className="section-title">From the Trails We Run <br />to the Shop We Run.</h2>
            <div className="brand-story-text">
              <p className="highlight">
                We Get It: Heavy Boots Slow You Down
              </p>
              <p>
                There is nothing worse than hitting a beautiful trail only to feel held back by heavy, stiff boots, or constantly worrying about slipping on wet rocks. You want to move fast, feel light, and trust your grip.
              </p>
              <h3 className="sub-title">Why Trust Caveman Store?</h3>
              <p>
                We don’t just sell boxes from a warehouse. We live on the trails and study footwear science inside out—from rubber traction to the perfect fit.
              </p>
              <p>
                We brought the La Sportiva Prodigio Hike GTX to Thailand because it fixes the problem. It gives you trail-running speed with hiking-boot protection. No compromises.
              </p>
            </div>
          </div>
          <div className="brand-story-visual">
            <div className="image-frame">
              <img src={brandImage} alt="Hiker in rugged terrain" className="story-img" />
              <div className="brand-badge-small">
                <img src={cavemanLogo} alt="logo" className="caveman-badge-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-story {
          background-color: #000;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }
        .brand-story-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .brand-story-text {
          max-width: 700px;
        }
        .brand-story-text p {
          color: var(--color-text-dim);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .brand-story-text p.highlight {
          color: var(--color-text);
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.6;
        }
        .sub-title {
          font-size: 1.25rem;
          color: var(--color-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }
        .brand-story-visual {
          position: relative;
        }
        .image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: #111;
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
          transition: var(--transition);
        }
        .image-frame:hover .story-img {
          transform: scale(1.05);
          opacity: 1;
        }
        .brand-badge-small {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          width: 100px;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          animation: float 4s ease-in-out infinite;
        }
        .caveman-badge-logo {
          width: 100%;
          height: auto;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 968px) {
          .brand-story-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .brand-story-text {
            margin: 0 auto;
          }
          .brand-badge-small {
            bottom: -1rem;
            right: 50%;
            transform: translateX(50%);
            animation: none;
          }
        }
      `}} />
    </section>
  );
};

export default BrandStory;
