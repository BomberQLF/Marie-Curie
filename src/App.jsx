import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Billeterie from "./Pages/Billeterie";
import Home from "./Pages/Home";
import Histoire from "./Components/HomeComponents/Histoire";
import Mentions from "./Components/HomeComponents/Mentions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/billeterie/*" element={<Billeterie />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path='/' element={<Home />} />
        <Route path='/mentions' element={<Mentions />} />
      </Routes>
    </Router>
  );
}

export default App;