import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Result from './Result';
import axios from 'axios';

const API_KEY = 'bdbf694617cf4656ba54e8f095033e16';
const URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  makeRequest = term => {
    axios.get(URL + term).then(response => {
      this.setState({ data: response });
      console.log(response);
    });
  };
  render() {
    const result = this.state.data;
    return (
      <div className="App">
        <Header sendRequest={this.makeRequest} />
        <Filter />
        <Result results={result} />
      </div>
    );
  }
}

export default App;
