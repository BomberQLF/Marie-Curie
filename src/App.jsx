import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Billeterie from "./Pages/Billeterie";
import Home from "./Pages/Home";
import Histoire from "./Components/HomeComponents/Histoire";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/billeterie/*" element={<Billeterie />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;