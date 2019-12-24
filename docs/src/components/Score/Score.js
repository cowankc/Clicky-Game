import React from "react";
import "./Score.css"

const Score = props => (
    <div className="head">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Topscore: {props.topscore}
        </div>
    </div>
);

export default Score