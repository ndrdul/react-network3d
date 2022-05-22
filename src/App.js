import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Home } from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
};

export default App;
