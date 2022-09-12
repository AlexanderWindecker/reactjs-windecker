import React from 'react'


//2 - Importar componente FontAwsomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 3 - Importar icono deseado de alguna de la libreria de iconos gratuitos
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

import * as iconList from "@fortawesome/free-solid-svg-icons";



export default function CartWidget() {

  return (
    <div className='p-3'>
     
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  )
}
