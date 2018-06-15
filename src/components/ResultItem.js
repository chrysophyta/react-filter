import React, { Component } from 'react';

export default class ResultItem extends Component {
  render() {
    const { article } = this.props;
    const thumbnail = article.urlToImage || 'http://placekitten.com/200/300';
    return (
      <div className="result-item">
        <img className="result-item-thumbnail" src={thumbnail} />
        <div className="result-item-info">
          <p className="result-item-title">{article.title}</p>
          <p className="result-item-desc">{article.description}</p>
          <div className="result-item-tags">{article.source.name}</div>
          <p className="result-item-location">►location</p>
          <p className="result-item-time">{article.publishedAt}</p>
        </div>
      </div>
    );
  }
}
