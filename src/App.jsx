import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Billeterie from "./Pages/Billeterie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/billeterie/*" element={<Billeterie />} />
      </Routes>
    </Router>
  );
}

export default App;