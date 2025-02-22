import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Gallery />} />
    //     <Route path="/gallery/:frameId" element={<Gallery />} />
    //   </Routes>
    // </Router>
    <Gallery />
  );
}

export default App;
