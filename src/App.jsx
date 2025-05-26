import React from 'react';
import './App.css';
import growthIcon from './growth.svg';
import CardContent from './components/CardContent.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import ProgressCircle from './components/ProgressCircle.jsx';

function App() {
  return (
    <main>
      <div className="card">
        <h1>Turn Loyalty into Impact</h1>
        <CardContent />
        <ActionButtons />
        <div className="icon-container" aria-label="Growth illustration">
          <img src={growthIcon} alt="Growth illustration" width={80} height={80} />
        </div>
        <ProgressCircle />
      </div>
    </main>
  );
}

export default App;
