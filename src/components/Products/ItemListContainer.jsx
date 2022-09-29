import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import getItems, { getItemsByCategory } from "../../services/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <div className="container mt-5">
      <div className=" d-flex g-3 row">
        <ItemList data={data} />
      </div>
    </div>
  );
}
