import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "../src/projects/tic-tac-toe/TicTacToe";
import WordsGame from "../src/projects/words-game/Words-Game";
import Quiz from "../src/projects/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/words-game" element={<WordsGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
