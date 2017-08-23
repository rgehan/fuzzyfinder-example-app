import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult.jsx';

class SearchResultsList extends React.Component {
  render() {
    return (
      <div>
        { this.props.results.map(result => <SearchResult result={result} key={result} />) }
      </div>
    );
  }
}

SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResultsList;
