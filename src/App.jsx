import React, { useEffect, useState } from 'react';
import './App.css';
import growthIcon from './growth.svg'; // Ensure this file exists in /src

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1500;
    const stepTime = 10;
    const increment = end / (duration / stepTime);

    const animate = () => {
      start += increment;
      if (start >= end) {
        setProgress(end);
        return;
      }
      setProgress(Math.round(start));
      setTimeout(animate, stepTime);
    };

    animate();
  }, []);

  const outerRadius = 54;
  const innerRadius = 44;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const innerOffset = innerCircumference * (1 - progress / 100);

  return (
    <main>
      <section className="card">
        <h1>Turn Loyalty into Impact</h1>
        <p>
          KonnectImpact empowers you to turn your loyalty points into meaningful support for community initiatives. By redeeming or donating your points, you help drive engagement and make a real difference where it matters most.
        </p>
        <p>
          Our platform bridges the gap between everyday rewards and positive social change, allowing you to contribute to causes you care about while helping organizations reduce unused point liabilities. Together, we can create lasting impact through simple, thoughtful actions.
        </p>
        <div className="button-group">
          <button className="button button--solid">Get Started</button>
          <button className="button button--ghost">Learn More</button>
        </div>
        <div className="icon-container" aria-label="Growth illustration">
          <img src={growthIcon} alt="Growth illustration" width={80} height={80} />
        </div>

        <div className="circular-progress-container">
          <div className="circular-progress">
            <svg className="progress-outer" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={outerRadius} stroke="#CDDC39" />
              <circle cx="60" cy="60" r={outerRadius} stroke="#b2f2d7" />
              <circle cx="60" cy="60" r={outerRadius} stroke="#00897B" />
            </svg>

            <svg className="progress-inner" viewBox="0 0 120 120">
              <circle className="progress-track" cx="60" cy="60" r={innerRadius} />
              <circle
                className="progress-fill"
                cx="60"
                cy="60"
                r={innerRadius}
                strokeDasharray={innerCircumference}
                strokeDashoffset={innerOffset}
              />
            </svg>

            <div className="ui-values">{progress}%</div>
            <div className="ui-labels">Impact</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
