import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="producto card">
      <Link to={`/producto/${producto.id}`}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="smallImage"
        />
        <h3>{producto.nombre}</h3>
        <p>{producto.categoria}</p>
        <p className="precioEsquina">${producto.precio}</p>
      </Link>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Item;
