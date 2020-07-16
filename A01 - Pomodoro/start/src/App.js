import React, { useState, useRef } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}
export default function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [title, setTitle] = useState('Let the countdown begins!!!');
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((time) => {
        if (time >= 1) {
          return time - 1;
        }

        return 0;
      });
    }, 1000);
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep it up!!');
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('are you ready for another round?');
    setTimeLeft(10);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
