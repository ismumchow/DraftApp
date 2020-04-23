import React from "react";
export default function Player ({name, college, position}) {
    return (
    <div className ="playerCard">
        <h1> {name } </h1>
        <h2> {college} </h2>
        <h2> {position} </h2>
    </div>
    );
}