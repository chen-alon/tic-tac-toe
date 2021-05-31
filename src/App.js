import React, { Component } from "react";
import logo from "./images/logo.png";
import Game from "./components/Game";
import "./TicTacToe.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" />
        <Game />
      </div>
    );
  }
}

export default App;
