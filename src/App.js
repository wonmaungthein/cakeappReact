import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CakeList } from "./Componensts/CakeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Cake app</h1>
        </header>
        <CakeList />
      </div>
    );
  }
}

export default App;
