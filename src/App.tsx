import React from 'react';
// import InfoCard from './components/InfoCard';
import './styles/animations.css';
import PulsingCircle from './components/PulsingCircle';

function App() {
  return (
    <div className="bg-teal-600 min-h-screen flex items-center justify-center flex-col animated-gradient overflow-auto">
      <div className="text-9xl font-bold text-white m-24 text-center select-none">
        Welcome to 
        <br></br>
        4-7-8 Breathing!
      </div>
      <div className="text-7xl font-bold text-white text-center select-none pb-24 name-gradient select-none">
        A project by Sai
      </div>
      {/* <InfoCard /> */}

      <br className="m-24"></br>
      
      {/* Adding some extra content to enable scrolling */}
      <PulsingCircle></PulsingCircle>

      <div className="min-h-96"></div>
      <div className="min-h-96"></div>
    </div>
  );
}

export default App;
