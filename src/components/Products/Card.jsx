import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{props.tittle}</h3>
        <p>Descripcion</p>
        <h4>$ {props.price}</h4>
      </div>

    </div>
  );
}

export default Card;
