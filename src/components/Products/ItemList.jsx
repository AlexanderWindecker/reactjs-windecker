import React from "react";
import Item from "./Item";
import "./ItemCount.css";
//import getItems from "../../services/mockAPI";


export default function ItemList({data}) {

  return (
    <div className="container mt-5">
      <div className=" d-flex g-3 row">
        {data.map((item) => {
          console.log(item);
          return (
            <Item
              key={item.id}
              id={item.id}
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