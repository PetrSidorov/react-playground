import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "../src/projects/tic-tac-toe/TicTacToe";
import WordsGame from "../src/projects/words-game/Words-Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        <Route path="/words-game" element={<WordsGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
