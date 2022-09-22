import React, { useState, useEffect } from "react";
import { getItemsSingle } from "../../services/mockAPI";
import ItemCount from "../Products/ItemCount";
import "./ItemDetail.css";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };

  useEffect(() => {
    getItemsSingle().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, []);

  return (
    <div className="container card mt-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={data.img}
            className="img-fluid rounded-start"
            alt="card img"
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-tittle">{data.tittle}</h3>
            <p className="card-text">{data.detail} </p>
            <h4>$ {data.price}</h4>
            <p>Stock disponible: {data.stock} </p>
            <ItemCount onAdd={onAdd} initial={1} stock={data.stock} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ItemDetailContainer;
