import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

import { Provider } from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <div className="">
            <Content />
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
