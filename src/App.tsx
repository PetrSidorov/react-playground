import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sanity from "./projects/boiler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boiler" element={<Sanity />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
