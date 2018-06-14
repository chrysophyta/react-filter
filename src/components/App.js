import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Result from './Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Result />
      </div>
    );
  }
}

export default App;
