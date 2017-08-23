import React from 'react';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.result}}></div>
    );
  }
}

SearchResult.propTypes = {
  result: PropTypes.string.isRequired,
};

export default SearchResult;
