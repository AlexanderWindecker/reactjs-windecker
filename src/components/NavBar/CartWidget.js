import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


//import * as iconList from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  
  const {getItemQty} = useContext(CartContext)

  return (
    <div className="p-3 d-flex">
      
      <FontAwesomeIcon icon={faCartShopping} />      
      <span className="ms-2">{getItemQty()}</span>
    </div>
  );
}
