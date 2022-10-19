import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { createBuyOrder } from "../../services/firestore";
import { CartContext } from "../context/CartContext";
import "./CartView.css";
import {useNavigate} from "react-router-dom"
//import ItemCount from "../Products/ItemCount";

function CartView() {
  const context = useContext(CartContext);
  const { cart, deleteItem, emptyCart, getItemPrice, getItemQty } = context;

  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="div-sincompra mt-3 ms-3">
        <div className="d-flex border border-primary">
          <h2>Tu carrito de compras</h2>
          <Link className="closed-compra" to="/">
            {" "}
              
            <button type="button" class="btn-close" aria-label="Close"></button>          
          </Link>
        </div>
        <div className="border border-primary">
          <p>
            No tiene artículos en su carrito de compras, ¡comience a agregar
            algunos!
          </p>
        </div>
      </div>
    );
  }

  function handleCheckout(){

    const orderData = {
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      item: cart,
      total: getItemPrice(),
    };
    createBuyOrder(orderData).then (orderid =>{      
      navigate(`/checkout/${orderid}`)
      alert ("gracias por su compra")
    })


  }

  return (
    <div className="cart-item mt-3 ms-3 border border-primary">
      <div className="border-bottom border-primary">
        <h5 className="modal-title ms-2 text-primary">Tu carrito de compras</h5>
      </div>
      {cart.map((data) => (
        <div className="border-bottom mt-3 d-flex">
          <div className="cart-item__details ms-2 ">
            <div className="d-flex p-2">
              <img className="img-cart" src={data.img} alt="" />
              <div>
                <h4 className="div-title p-2">{data.tittle}</h4>
              </div>
            </div>
            <div className="d-flex justify-content-evenly">
              <button
                className="boton-count bg-ligth border border-primary p-2 "
                type="button"
              >
                -
              </button>
              <p className="p-2">{getItemQty()}</p>
              <button
                className="boton-count bg-ligth border border-primary p-2 "
                type="button"
              >
                +
              </button>
            </div>
            <div className="cart-item__details-price"></div>
          </div>
          <div className="div-remove">
            <button
              onClick={() => deleteItem(data.id)}
              type="button"
              className=" p-2  me-2 bg-light border border-primary"
            >
              Borrar
            </button>
          </div>
        </div>
      ))}
      <div className=" border mt-4 border-top border-top border-primary">
        <div className="ms-2">Cantidad Total: {getItemQty()}</div>
        <div className="cart-item__details-price ms-2">
          Precio Total: ${getItemPrice()}
        </div>
        <div className="modal-footer">
          <button
            className="border border-primary bg-light p-2"
            onClick={emptyCart}
          >
            Vaciar Carrito
          </button>
          <button className="border border-primary bg-primary text-white p-2" onClick={handleCheckout} >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartView;
