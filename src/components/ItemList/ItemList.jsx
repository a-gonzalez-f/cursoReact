import React from "react";
import Item from "../Item/Item";

const ItemList = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="container productos">
      {productos.map((producto) => (
        <Item
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </div>
  );
};

export default ItemList;
