import React, { useState } from 'react';
import './App.css';
import Nav from "./Nav"
import Game from "./Game"

function App() {
    const [xScore, setXScore] = useState(0)
    const [oScore, setOScore] = useState(0)
  return (
    <div className="App">
      <Nav xScore={xScore} setXScore={setXScore} oScore={oScore} setOScore={setOScore}></Nav>
      <Game xScore={xScore} setXScore={setXScore} oScore={oScore} setOScore={setOScore}></Game>
    </div>
  );
}

export default App;
