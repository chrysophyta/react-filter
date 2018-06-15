import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.sendRequest(this.state.term);
  };
  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input
            placeholder="Search"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
