import React from "react";
import Board from "./Board";
import ParticlesBg from "particles-bg";
import "./TicTacToe.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningSquares: lines[i],
      };
    }
  }
  return null;
}

function areAllBoxesClicked(squares) {
  // Declare variable to store number of clicked boxes.
  let count = 0;

  // Iterate over all boxes
  squares.forEach(function (item) {
    if (item !== null) {
      count++;
    }
  });

  // Check if all boxes are clicked (filled)
  if (count === 9) {
    return true;
  } else {
    return false;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleReset = () => {
    window.location.reload();
  };

  render() {
    let config = {
      num: [4, 30],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 9],
      v: [2, 3],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      random: 7,
    };

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner.winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winner={winner && winner.winningSquares}
          />
          <div className="game-info">{status}</div>
          {areAllBoxesClicked(current.squares) || winner ? (
            <button className="reset-button" onClick={() => this.handleReset()}>
              New Game
            </button>
          ) : null}
          {winner ? (
            <div>
              <ParticlesBg type="custom" config={config} bg={true} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Game;
