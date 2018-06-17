import React, { Component } from 'react';
import FilterItem from './FilterItem';
// import FilterItemTime from './FilterItemTime';

export default class Filter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sortBy: null,
  //     from: null,
  //     to: null
  //   };
  // }
  getFilterOptions = (id, e) => {
    this.props.handleFilter(id, e.target.value);
    console.log(e.target.value, id);
    // console.log(this.props.handleFilter);
  };
  render() {
    return (
      <div className="filter">
        <FilterItem
          handleChange={this.getFilterOptions}
          id="sortBy"
          title="Sort By"
          type="select"
          options={['revelancy', 'popularity', 'publishAt']}
        />
        <FilterItem
          handleChange={this.getFilterOptions}
          id="from"
          title="From"
          type="datetime-local"
        />
        <FilterItem
          handleChange={this.getFilterOptions}
          id="to"
          title="To"
          type="datetime-local"
        />
        <FilterItem id="categories" title="Categories" />
      </div>
    );
  }
}
