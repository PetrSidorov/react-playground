import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "../src/projects/tic-tac-toe/TicTacToe";
import WordsGame from "../src/projects/words-game/Words-Game";
import Quiz from "../src/projects/quiz/Quiz";
import ConnectFour from "../src/projects/connect-four/ConnectFour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/words-game" element={<WordsGame />}></Route>
        <Route path="/connect-four" element={<ConnectFour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
