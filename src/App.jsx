import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Weddings from "./pages/weddings";
import Parade from "./pages/Parade";
import "./scrollstyle.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/weddings' element={<Weddings />} />
        <Route path='/Parade' element={<Parade />} />
      </Routes>
    </Router>
  );
}

export default App;
