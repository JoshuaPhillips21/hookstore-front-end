import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/pages/home"
import NavBar from './components/pages/navigation/navBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Home />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.app-wrapper'));