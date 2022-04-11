import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Gear from "./Gear";
import PowderRater from "./PowderRater";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/Gear" element={<Gear/>} />
        <Route path ="/PowderRater" element={<PowderRater/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
