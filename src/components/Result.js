import React, { Component } from 'react';
import ResultItem from './ResultItem';
import ResultTags from './ResultTags';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data) {
      const { articles, totalResults } = this.props.data;
      return (
        <div className="result">
          <ResultTags />
          <ResultItem />
          <ResultItem />
          <ResultItem />
          <ResultItem />
        </div>
      );
    } else {
      return <div className="result">Search to get results!</div>;
    }
  }
}
