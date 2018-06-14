import React, { Component } from 'react';
import ResultItem from './ResultItem';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="result">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </div>
    );
  }
}
