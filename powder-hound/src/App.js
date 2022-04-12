import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Gear from "./Gear";
import PowderRater from "./PowderRater";
import Home from "./Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Gear" element={ <Gear/>}/>
        <Route path="/PowderHound" element={ <PowderRater/>}/>
      </Routes>
    </Router>
  );
}

export default App;
