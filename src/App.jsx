import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Customers from "./pages/Customers";
import About from "./pages/About";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;