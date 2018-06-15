import React from 'react';

export default function(props) {
  return (
    <div className="result-tags">
      <p>Showing {props.totalResults} results by</p>
      <div className="result-item-tags">tags</div>
    </div>
  );
}
