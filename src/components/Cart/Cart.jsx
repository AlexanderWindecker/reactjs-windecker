/* import { useContext } from "react";
import React  from 'react'


const  {getItemQty} = useContext(CartContext) 


const handlerMinus = () => {
  if (qty > 1) {
    setQty(qty - 1);
  }
};

const handlerPlus = () => {
  if (qty < stock) {
    setQty(qty + 1);
  }
};

function Cart(data) {
  return (
    <div className="cart-item">
  <img
            src={data.img}
            className="img-fluid rounded-start mt-3"
            alt="card img"
          ></img>
  <div className="cart-item__details">
    <h4 className="cart-item__details-name">{data.tittle}</h4>
    <div className="cart-item__details-qty">
        <button type="button" onClick={handlerMinus}>-</button>
        <p>{getItemQty()}</p>
        <button type="button" onClick={handlerPlus}>+</button>
    </div>
    <div className="cart-item__details-price"></div>
  </div>
  <button
    type="button"
    className="cart-item__remove"
  >
    Remove
  </button>
</div>
  );
};


export default Cart
 */