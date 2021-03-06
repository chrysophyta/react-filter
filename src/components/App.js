import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Result from './Result';
import axios from 'axios';

const API_KEY = '068472163ddc4b498c114bab72b11a19';
const URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      filter: {}
    };
  }
  makeRequest = term => {
    let queryString = this.makeQuery();
    axios.get(URL + term + queryString).then(response => {
      this.setState({ data: response });
      console.log(response);
    });
  };
  makeQuery = () => {
    let queryString = '';
    Object.keys(this.state.filter).map(filterItem => {
      queryString += `&${filterItem}=${this.state.filter[filterItem]}`;
    });
    return queryString;
  };
  getFilter = (id, value) => {
    const newFilterObject = { ...this.state.filter };
    newFilterObject[id] = value;
    this.setState({ filter: newFilterObject });
  };

  render() {
    const result = this.state.data;
    console.log(this.state);
    return (
      <div className="App">
        <Header sendRequest={this.makeRequest} />
        <Filter handleFilter={this.getFilter} />
        <Result results={result} tags={this.state.filter} />
      </div>
    );
  }
}

export default App;
