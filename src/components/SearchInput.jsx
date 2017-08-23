import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input type="text" placeholder="Search..." onChange={event => this.props.onChange(event.target.value)} />
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
