import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  getResult = response => {
    console.log(response);
  };
  render() {
    const result = this.state.data;
    return (
      <div className="App">
        <Header data={this.getResult} />
        <Filter />
        <Result results={result} />
      </div>
    );
  }
}

export default App;
