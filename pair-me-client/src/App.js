import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {testAPI} from './actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Pair-Me, the revolutionary way to get people ... paired up for coding.
          </p>
          <p>Whooooooo.</p>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Not sure what style we will use, but let's keep this styling for now. 
          </a>

        </header>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // state goes here
    isLoggedIn: state.isLoggedIn,
  }
}

export default withRouter(connect(mapStateToProps, {
  testAPI,
})(App));


