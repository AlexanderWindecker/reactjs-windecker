import { React, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Funcion en la que indica si el producto agregado al carrito ya existe o no en el cart con el metodo "some"
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };
  //Funcion en la que indica si el producto agregado al carrito ya existe o no en el cart con el metodo "some"

  //Funcion agregar producto al carrito, sin pisar los productos ya existentes en el cart
  const addItem = (data, qty) => {
    const newItem = { ...data, qty };
    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //Funcion agregar producto al carrito, sin pisar los productos ya existentes en el cart

  //Funcion que borra todos los productos de nuestro carrito.
  const emptyCart = () => {
    return setCart([]);
  };
  //Funcion que borra todos los productos de nuestro carrito.

  //Funcion para borrar un producto especifico del carrito.
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };
  //Funcion para borrar un producto especifico del carrito.

  //funcion que retorna cantidad de unidades que tiene nuestro carrito
  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.qty), 0);
  };
  //funcion que retorna cantidad de unidades que tiene nuestro carrito

  //funcion que retorna el precio total del carrito
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.price * x.qty), 0);
  };
  //funcion que retorna el precio total del carrito

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;
