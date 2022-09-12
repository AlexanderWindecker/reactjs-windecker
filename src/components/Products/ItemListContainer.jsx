import React from "react";
import Card from "./Card";

export default function ItemListContainer(props) {
  return (
    <div>
      <h1>{/* {Aca iran los productos} */}</h1>
      <div className="main container d-flex">
        <Card
          price={300}
          tittle="Producto 1"
          img="https://picsum.photos/200/300?random=1"
        />
        <Card
          price={500}
          tittle="Producto 2"
          img="https://picsum.photos/200/300?random=2"
        />
        <Card
          price={600}
          tittle="Producto 3"
          img="https://picsum.photos/200/300?random=3"
        />
      </div>
    </div>
  );
}
