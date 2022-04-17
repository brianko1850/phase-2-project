import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Gear from "./Gear";
import PowderRater from "./PowderRater";
import Home from "./Home";
import NavBar from "./NavBar";

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/gear" element={ <Gear/>}/>
          <Route path="/powder-rater" element={ <PowderRater/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
