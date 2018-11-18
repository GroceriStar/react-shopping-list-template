import React, { Component } from 'react';

import Header from './components/Header/Header';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Router />
      </div>
    );
  }
}

export default App;
