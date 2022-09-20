import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import getItems from "../../services/mockAPI";
import ItemList from "./ItemList";


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
        <ItemList />
      </div>
    </div>
  );
}
