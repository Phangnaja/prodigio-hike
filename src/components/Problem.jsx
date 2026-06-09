import React from 'react';

const Problem = () => {
  const problems = [
    {
      title: "Weight Fatigue",
      desc: "One pound on your feet equals five on your back. Traditional boots drain your energy with every step."
    },
    {
      title: "Thermal Stress",
      desc: "Rigid leather traps heat and moisture, softening skin and inviting blisters on long expeditions."
    },
    {
      title: "Static Response",
      desc: "Bulky soles lack the agility and propulsion needed for fast-paced mountain movement."
    },
    {
      title: "Debris Entry",
      desc: "Low-cut designs and loose collars allow trail debris to penetrate, causing constant irritation."
    }
  ];

  return (
    <section className="problem">
      <div className="container">
        <div className="problem-content">
          <div className="problem-header">
            <span className="section-label">The Conflict</span>
            <h2 className="section-title">The Problem with <br />Traditional Footwear.</h2>
          </div>
          <div className="problem-list">
            {problems.map((p, i) => (
              <div key={i} className="problem-item">
                <div className="problem-bullet"></div>
                <div className="problem-text">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .problem {
          background-color: #050505;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .problem-content {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: start;
        }
        .problem-header {
          position: sticky;
          top: 10rem;
        }
        .problem-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .problem-item {
          display: flex;
          gap: 2rem;
          animation: fadeIn 1s ease forwards;
        }
        .problem-bullet {
          width: 12px;
          height: 12px;
          background-color: var(--color-primary);
          border-radius: 50%;
          margin-top: 0.6rem;
          flex-shrink: 0;
          box-shadow: 0 0 15px var(--color-primary);
        }
        .problem-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .problem-text p {
          color: var(--color-text-dim);
          font-size: 1.1rem;
          line-height: 1.6;
        }
        @media (max-width: 968px) {
          .problem-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .problem-header {
            position: static;
          }
        }
      `}} />
    </section>
  );
};

export default Problem;
