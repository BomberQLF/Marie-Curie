import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Billeterie from "./Pages/Billeterie";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/billeterie/*" element={<Billeterie />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;