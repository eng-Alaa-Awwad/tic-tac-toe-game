import { useState } from "react";

function App() {
  return (
    <>
      <Game />
    </>
  );
}

function Game() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  function handleClick(i) {
    if (value[i] || calclateWiner(value)) return;
    const newValue = value.slice();
    if (xIsNext) {
      newValue[i] = "X";
    } else {
      newValue[i] = "O";
    }
    setValue(newValue);
    setXisNext((s) => !s);
  }
  function restGame() {
    setValue(Array(9).fill(null));
  }
  const winner = calclateWiner(value);

  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <div className="game-box">
        <Squire value={value[0]} onClick={() => handleClick(0)} />
        <Squire value={value[1]} onClick={() => handleClick(1)} />
        <Squire value={value[2]} onClick={() => handleClick(2)} />
        <Squire value={value[3]} onClick={() => handleClick(3)} />
        <Squire value={value[4]} onClick={() => handleClick(4)} />
        <Squire value={value[5]} onClick={() => handleClick(5)} />
        <Squire value={value[6]} onClick={() => handleClick(6)} />
        <Squire value={value[7]} onClick={() => handleClick(7)} />
        <Squire value={value[8]} onClick={() => handleClick(8)} />
      </div>
      <WinnerMessage winner={winner} handleClick={restGame} />
    </>
  );
}

function Squire({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>;
}

function calclateWiner(value) {
  const WinerAnswer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const element of WinerAnswer) {
    const [a, b, c] = element;
    if (value[a] && value[a] === value[b] && value[a] === value[c]) {
      return value[a];
    }
  }
  return null;
}

function WinnerMessage({ winner, handleClick }) {
  return (
    <div className={`winner-message ${winner ? "display-message" : ""}`}>
      <p>The winer is: {winner}</p>
      <button onClick={handleClick}>play Agin</button>
    </div>
  );
}

export default App;
