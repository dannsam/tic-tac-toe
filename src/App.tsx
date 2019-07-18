import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Board } from "./Board";
import { BoardViewModel } from "./BoardViewModel";

var vm = new BoardViewModel();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Board vm={vm} />
      </header>
    </div>
  );
};

export default App;
