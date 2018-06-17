import React, { Component } from 'react';
import ResultItem from './ResultItem';
import ResultTags from './ResultTags';

export default class Result extends Component {
  render() {
    if (this.props.results) {
      const { articles, totalResults } = this.props.results.data;
      const { tags } = this.props;
      return (
        <div className="result">
          <ResultTags totalResults={totalResults} tags={tags} />
          {articles.map((article, index) => {
            return <ResultItem article={article} key={index} />;
          })}
        </div>
      );
    } else {
      return <div className="result">Search to get results!</div>;
    }
  }
}
