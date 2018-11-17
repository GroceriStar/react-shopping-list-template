import React, { Component } from 'react';

import Header from './components/Header/Header';
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
