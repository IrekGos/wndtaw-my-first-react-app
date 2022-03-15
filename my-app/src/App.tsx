import React from 'react';
import './App.css';
import Logo from './logo';
import Hello from './HelloWorld';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Hello />
      </header>
    </div>
  );
}

export default App;
