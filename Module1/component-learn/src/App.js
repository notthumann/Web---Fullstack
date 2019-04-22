import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './chip.css';

const Chip = () => {
  return(
    <div className = "chip-background">
        Passed
      </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Chip/>
        <Chip/>
        <Chip/>
      </div>
    );
  }
}

export default App;
