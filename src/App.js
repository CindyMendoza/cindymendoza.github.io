import React, { useState, useEffect } from "react";

import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./style.scss";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Aboutme from "./components/Aboutme/index";
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Aboutme />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
