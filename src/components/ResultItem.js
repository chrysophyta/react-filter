import React, { Component } from 'react';

export default class ResultItem extends Component {
  render() {
    return (
      <div className="result-item">
        <img
          className="result-item-thumbnail"
          src="http://placekitten.com/g/300/200"
        />
        <div className="result-item-info">
          <p className="result-item-title">Result Item Title</p>
          <p className="result-item-desc">
            idunt orci. Etiam tristique, elit ut consectetur iaculis, metus
            lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis
            ultrices lacus
          </p>
          <div className="result-item-tags">Entertainment</div>
          <p className="result-item-location">►location</p>
          <p className="result-item-time">►time</p>
        </div>
      </div>
    );
  }
}
