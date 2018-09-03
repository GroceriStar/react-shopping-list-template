import React, { Component } from 'react';

import Header from './Header';
import Main   from './screens/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
