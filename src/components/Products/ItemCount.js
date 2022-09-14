import React, { useState } from "react";

export default function ItemCount({ onAdd, initial, stock })  {
  const [count, setCount] = useState(initial);

  const addProduct = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-container">
      <div className="div-container-button">
        <button
          className="button-container"
          onClick={() => addProduct(-1)}
          disabled={count === initial}
        >
          -
        </button>

        <span className="span-count">{count}</span>

        <button
          className="button-container"
          onClick={() => addProduct(+1)}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button className="button-añadir"
        onClick=
        {() => {
          onAdd(count);
        }}
        disabled={stock === 0 ? true : null}
        >
        Añadir
      </button>
    </div>
  );
};