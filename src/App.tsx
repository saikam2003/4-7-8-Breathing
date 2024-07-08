import React from 'react';
import InfoCard from './components/InfoCard';
import './styles/animations.css';

function App() {
  return (
    <body className="bg-teal-600 min-h-screen flex items-center justify-center flex-col animated-gradient">
      <div className="text-9xl font-bold text-white mb-20 text-center">Welcome to 
        <br></br>
        4-7-8 Breathing!
      </div>
      <InfoCard>
      </InfoCard>
    </body>
  );
}

export default App;
