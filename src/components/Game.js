import React from 'react';
import Board from "./Board";

function Game() {

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <center>
    <div className="game">
      <h1>TIC TAC TOE</h1>
    <Board/>
    <button className="button" onClick={refreshPage}>Click to restart</button>
    </div>
    </center>
  )
}


export default Game;
