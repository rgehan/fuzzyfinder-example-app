import React, { Component } from 'react';

import FuzzyFinder from '../components/FuzzyFinder.jsx';
import randomWords from '../data/random-words';
import reactPaths from '../data/react-paths';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <FuzzyFinder getData={() => reactPaths} />
      </div>
    );
  }
}

export default App;
