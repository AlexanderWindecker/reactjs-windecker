import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./ItemCount.css";
import getItems from "../../services/mockAPI";


export default function ItemListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => {
      setData(respuestaDatos);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="main d-flex g-3 row">
        {data.map((item) => {
          console.log(item);
          return (
            <Item
              key={item.id}
              price={item.price}
              tittle={item.tittle}
              img={item.img}              
              stock={item.stock}
            />
          );
        })}       
      </div>
    </div>
    
    
  );
}