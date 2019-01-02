import React, { Component } from 'react';
import './App.css';
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

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

export default App;
