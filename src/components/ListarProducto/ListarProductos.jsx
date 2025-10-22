import React from "react";
import { Link } from "react-router-dom";

const ListarProductos = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="container productos">
      {productos.map((producto) => (
        <div className="producto card" key={producto.id}>
          <Link to={`/producto/${producto.id}`}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>Categoría: {producto.categoria}</p>
            <p className="precioEsquina">${producto.precio}</p>
          </Link>
          <button onClick={() => agregarAlCarrito(producto)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListarProductos;
