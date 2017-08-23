import React, { Component } from 'react';

import FuzzyFinder from '../components/FuzzyFinder.jsx';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <FuzzyFinder />
      </div>
    );
  }
}

export default App;
