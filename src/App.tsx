import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "../src/projects/tic-tac-toe/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
