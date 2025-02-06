import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Weddings from "./pages/Weddings";
import Parade from "./pages/Parade";
import Coming2America from "./pages/Coming2America";
import "./scrollstyle.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/weddings' element={<Weddings />} />
        <Route path='/Parade' element={<Parade />} />
        <Route path='/Coming2America' element={<Coming2America />} />
      </Routes>
    </Router>
  );
}

export default App;
