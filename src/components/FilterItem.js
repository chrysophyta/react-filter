import React, { Component } from 'react';

export default class FilterItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title } = this.props;
    return (
      <div className="filter-item">
        <p className="filter-item-title">{title}</p>
        <label htmlFor={id}>+</label>
        <input id={id} type="checkbox" className="filter-item-toggle" />
        <select>
          <option value="first">First Value</option>
          <option value="second" selected>
            Second Value
          </option>
          <option value="third">Third Value</option>
        </select>
      </div>
    );
  }
}
