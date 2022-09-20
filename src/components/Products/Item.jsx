import React from "react";
import "./Item.css";
import ItemCount from "./ItemCount";

function Item(props) {

let {price, tittle, img, detail, stock} = props;


  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
      <h3>{tittle}</h3>
        <p>{detail} </p>
        <h4>$ {price}</h4>
        <p>Stock disponible: {stock} </p>
        <ItemCount onAdd={onAdd} initial={1} stock={props.stock} />
      </div>     
    </div>
  );
}

export default Item;