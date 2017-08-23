import React from 'react';
import PropTypes from 'prop-types';
import fuzzyfinder from 'fuzzyfinder';

import SearchInput from './SearchInput.jsx';
import SearchResultsList from './SearchResultsList.jsx';

class FuzzyFinder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    // Builds a fuzzyfinder wrapping matched characters with <b> tags
    this.ff = new fuzzyfinder('<b>', '</b>');

    // Bind callbacks
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  /**
   * Handle SearchInput change events and perform a fuzzyfinder
   * search
   */
  handleSearchInputChange(value) {
    let results = this.ff.search(value, this.props.getData(), {
      highlight: true,
      outputFull: false,
    }).map(obj => obj.text);

    this.setState({
      results,
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

FuzzyFinder.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default FuzzyFinder;
