import React, { Component } from "react";
import Game from "./Game.js";
import logo from "./images/logo.png";

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
