import React, { Component } from 'react';
import FilterItem from './FilterItem';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <FilterItem id="location" title="Location" />
        <FilterItem id="date" title="Date" />
        <FilterItem id="categories" title="Categories" />
      </div>
    );
  }
}
