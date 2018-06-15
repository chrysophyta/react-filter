import React, { Component } from 'react';
import axios from 'axios';

const API_KEY = 'bdbf694617cf4656ba54e8f095033e16';
const URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=`;

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
    const sendData = this.props.data;
    axios.get(URL + this.state.term).then(function(response) {
      sendData(response);
    });
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
