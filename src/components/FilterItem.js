import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FilterItem extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired
  };
  static defaultProps = {
    options: []
  };
  test = e => {
    const id = this.props.id;
    this.props.handleChange(id, e);
  };
  render() {
    const { id, title, type, options } = this.props;
    const selectInput = (
      <select onChange={this.test}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    );
    const dateInput = <input type="date" onChange={this.test} />;
    return (
      <form className="filter-item">
        <p className="filter-item-title">{title}</p>
        <label htmlFor={id}>+</label>
        <input id={id} type="checkbox" className="filter-item-toggle" />
        {type === 'select' ? selectInput : dateInput}
      </form>
    );
  }
}
