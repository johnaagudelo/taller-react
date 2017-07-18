import React, { Component } from 'react';
import './App.css';

import Banner from './components/banner/Banner.component'
import Show from './components/show/Show.component'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Banner title="TV Show" />
         <Show />
      </div>
    );
  }
}

export default App;
