import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";

const LearningPortal = (
  <Route path="/telugutechassist">
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contactus" element={<Contact />} />
    <Route path="side" element={<Sidebar />} />
  </Route>
);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {LearningPortal}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
