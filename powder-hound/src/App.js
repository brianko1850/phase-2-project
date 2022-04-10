import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import Gear from "./Gear"
import PowderRater from "./PowderRater"

function App(){
    return (
        <div>
            <NavBar/>
                <Route exact path="/">
                    <Home/>
            </Route>
            <Route exact path="/PowderRater">
                <PowderRater/>
            </Route>
            <Route exact path="/Gear">
                <Gear/>
            </Route>
                
        </div>
    )
}

export default App