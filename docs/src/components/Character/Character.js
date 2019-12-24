import React from "react";
import "./Character.css"

const Character = props => (
    <div className="character" onClick={() => props.clickCount(props.id)}>
    <div className="image">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
)

export default Character