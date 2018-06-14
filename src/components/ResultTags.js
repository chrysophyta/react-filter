import React from 'react';
let resultNumber = 15;
export default function() {
  return (
    <div className="result-tags">
      <p>Showing {resultNumber} results by</p>
      <div className="result-item-tags">tags</div>
    </div>
  );
}
