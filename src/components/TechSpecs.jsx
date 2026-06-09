import React from 'react';

const TechSpecs = () => {
  const specs = [
    { label: "Weight", value: "375g / 300g" },
    { label: "Stack", value: "35mm / 27mm" },
    { label: "Drop", value: "8mm" },
    { label: "Outsole", value: "FriXion® Red" },
    { label: "Membrane", value: "Gore-Tex ePE" },
    { label: "Fit", value: "Performance" }
  ];

  return (
    <section className="specs">
      <div className="container">
        <div className="specs-layout">
          <div className="specs-info">
            <h2 className="specs-title">Technical <br />Precision.</h2>
            <p className="specs-intro">Every gram serves a purpose. Every millimetre optimized for the trail.</p>
          </div>
          <div className="specs-grid">
            {specs.map((spec, i) => (
              <div key={i} className="spec-row">
                <span className="spec-name">{spec.label}</span>
                <span className="spec-val">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .specs {
          background-color: #000;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .specs-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10rem;
        }
        .specs-title {
          font-size: clamp(3rem, 5vw, 4rem);
          line-height: 1;
          margin-bottom: 2rem;
        }
        .specs-intro {
          color: var(--color-text-dim);
          font-size: 1.1rem;
          max-width: 400px;
        }
        .specs-grid {
          display: flex;
          flex-direction: column;
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .spec-name {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          color: var(--color-text-dim);
          font-weight: 700;
        }
        .spec-val {
          font-weight: 800;
          font-size: 1.1rem;
        }
        @media (max-width: 968px) {
          .specs-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}} />
    </section>
  );
};

export default TechSpecs;
