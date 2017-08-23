import React from 'react';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  render() {
    return (
      // Dirty, but necessary because (for now) fuzzyfinder returns raw HTML
      <div className="searchResult" dangerouslySetInnerHTML={{__html: this.props.result}}></div>
    );
  }
}

SearchResult.propTypes = {
  result: PropTypes.string.isRequired,
};

export default SearchResult;
