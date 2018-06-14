import React, { Component } from 'react';
import ResultItem from './ResultItem';
import ResultTags from './ResultTags';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="result">
        <ResultTags />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    );
  }
}
