import React from 'react';
import './App.css';
import Board from './Board.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Открывай карточки, запоминай и найди каждой свою пару! 
      </header>
      <Board />
    </div>
  );
}

export default App;
