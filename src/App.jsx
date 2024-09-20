import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavbarMenu from "./components/Navbar/Navbar";
import ContactUs from "./Pages/Contact/Contact";
import Salaries from "./Pages/Salaries/EngineerSalaries";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarMenu />
        <div className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salaries" element={<Salaries />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
