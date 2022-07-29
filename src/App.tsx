import React from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <div className="App">
      <div>
        <div className='text'>Hug milkoto in</div>
        <div className='timer'><CountdownTimer countdownTimestampMS={1661365830524} /></div>
      </div>
    </div>
  );
}

export default App;
