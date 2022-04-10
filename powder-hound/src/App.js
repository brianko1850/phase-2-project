import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Gear from "./Gear"
import PowderRater from "./PowderRater"

function App(){
    return (
        <div>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/PowderRater" element={<PowderRater/>} />
                <Route path="/Gear" element={<Gear/>} />   
            </Routes>
        </BrowserRouter>          
        </div>
    )
}

export default App