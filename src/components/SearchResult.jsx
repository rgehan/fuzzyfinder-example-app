import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.result}}></div>
    );
  }
}

export default SearchResult;
