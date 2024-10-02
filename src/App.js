// src/App.js
import React, { useState } from 'react';
import './App.css';
import SurpriseScreen from './components/SurpriseScreen';
import Letter from './components/Letter';

function App() {
  const [showSurprise, setShowSurprise] = useState(true);

  const handleContinue = () => {
    setShowSurprise(false);
  };

  return (
    <div className="App">
      {/* Show Surprise Screen initially */}
      {showSurprise ? (
        <SurpriseScreen onContinue={handleContinue} />
      ) : (
        // Show the Letter component when the SurpriseScreen is dismissed
        <Letter />
      )}
    </div>
  );
}

export default App;
