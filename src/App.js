import React, { Component } from 'react';
import './App.css';

import Banner from './components/banner/Banner.component'
import Shows from './components/shows/Shows.component'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Banner title="TV Show" />
         <Shows/>
      </div>
    );
  }
}

export default App;
