import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashoboard from "./Components/Dashoboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashoboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
