import React from "react";

function Square(props) {
  const winningSquareStyle = {
    backgroundColor: "#87B38D",
    color: "#000",
    opacity: "0.6",
  };

  return (
    <button
      className="square"
      onClick={props.onClick}
      style={props.winningSquare ? winningSquareStyle : null}
    >
      {props.value}
    </button>
  );
}

export default Square;
