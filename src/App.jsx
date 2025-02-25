import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Billeterie from "./Pages/Billeterie";
import Step2 from "./Components/Billeterie/Step2";
import Step3 from "./Components/Billeterie/Step3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/billeterie" element={<Billeterie />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </Router>
  );
}

export default App;
