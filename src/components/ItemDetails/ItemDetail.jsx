import React from 'react'
import ItemCount from '../Products/ItemCount';



const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };


function ItemDetail({data} ) {
  return (
    <div className="container div-card card mt-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={data.img}
          className="img-fluid rounded-start mt-3"
          alt="card img"
        ></img>
      </div>
      <div className="col-md-8">
        <div className="card-body ">
          <h3 className="card-tittle text-center">{data.tittle}</h3>
          <p className="card-text text-center">{data.detail} </p>
          <h4 className="text-center">$ {data.price}</h4>
          <p className="text-center">Stock disponible: {data.stock} </p>
          <ItemCount onAdd={onAdd} initial={1} stock={data.stock} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ItemDetail
