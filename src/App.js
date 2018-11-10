import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          File Storage
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
