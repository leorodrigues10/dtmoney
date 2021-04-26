import React from 'react';
import './card.css'

function Card(props) {
  return (
    <div className="card" style={props.style}>
      <div className="card-header">
        <p style={props.p}>{props.title}</p>
        <img src={props.icon} alt="icon"/>
      </div>
      <div className="card-body">
        <h2>$ {props.value}</h2>
      </div>
    </div>
  );
}

export default Card;