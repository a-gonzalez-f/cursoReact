import React from "react";
import "./Item.css";
import { Link, useNavigate } from "react-router-dom";

const Item = ({ producto, agregarAlCarrito, isAuthenticated }) => {
  const navigate = useNavigate();

  const handleAgregarAlCarrito = () => {
    console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      agregarAlCarrito(producto);
    } else {
      navigate("/login");
    }
  };

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
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
