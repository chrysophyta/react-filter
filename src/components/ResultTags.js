import React from 'react';

export default function(props) {
  console.log(props);
  return (
    <div className="result-tags">
      <p>Showing {props.totalResults} results by</p>
      {Object.keys(props.tags).map(tag => {
        return (
          <div className="result-item-tags">{`${tag}: ${props.tags[tag]}`}</div>
        );
      })}
    </div>
  );
}
