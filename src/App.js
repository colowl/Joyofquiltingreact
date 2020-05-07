import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Joy of Quilting Art!</h1>
          <p> Here's where we'll add more!</p>
        </header>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
