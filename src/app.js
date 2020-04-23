import React from "react";
import {render} from "react-dom";
import Jumbotron from "./Jumbotron"
import Player from "./Player"


const App = () => {
  return (
   <div className="text-center container pt-3"> 
        <Jumbotron />
        <Player name="Justin Jefferson" college="LSU" position="WR" />
   </div> 
  )
};
render(<App />, document.getElementById("root"));