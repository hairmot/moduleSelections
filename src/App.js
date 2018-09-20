import React, { Component } from 'react';
import Students from './Components/students';
import ModulePalette from './Components/modulePalette';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sv-col-md-8">
          <Students />
        </div>
        <div className="sv-col-md-4">
          <ModulePalette />
        </div>

      </div>
    );
  }
}

export default App;
