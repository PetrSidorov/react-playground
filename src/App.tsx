import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "../src/projects/tic-tac-toe/TicTacToe";
import WordsGame from "../src/projects/words-game/Words-Game";
import Quiz from "../src/projects/quiz/Quiz";
import ConnectFour from "../src/projects/connect-four/ConnectFour";
import { Provider } from "react-redux";
import { store } from "./projects/quiz/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/words-game" element={<WordsGame />}></Route>
          <Route path="/connect-four" element={<ConnectFour />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
