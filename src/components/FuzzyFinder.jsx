import React from 'react';
import fuzzyfinder from 'fuzzyfinder';

import SearchInput from './SearchInput.jsx';
import SearchResultsList from './SearchResultsList.jsx';
import randomWords from '../data/random-words';
import reactPaths from '../data/react-paths';

class FuzzyFinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      data: reactPaths,
      changeEvents: [],
    };

    this.ff = new fuzzyfinder('<b>', '</b>');

    // Bind callbacks
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleSearchInputChange(value) {
    this.setState({
      results: this.ff.search(value, this.state.data),
    });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handleSearchInputChange} />
        <SearchResultsList results={this.state.results} />
      </div>
    );
  }
}

export default FuzzyFinder;
