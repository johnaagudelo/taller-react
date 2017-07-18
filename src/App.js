import React, { Component } from 'react';
import './App.css';

import Banner from './components/banner/Banner.component'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Banner title="TV Show" />
      </div>
    );
  }
}

export default App;
