import React from 'react';
import logo from './mintbean.png';
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>It Worked</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
