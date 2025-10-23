import "./ItemDetail.css";
import React from "react";

const ItemDetail = ({ producto, agregarAlCarrito }) => {
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="productoDetalle">
      <div>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="imageDetail"
        />
      </div>
      <div className="containerDetalle">
        <div className="detalle border">
          <h2>{producto.nombre}</h2>
          <p>{producto.categoria}</p>
          <p>{producto.descripcion || "No hay descripción"}</p>
          <div className="row">
            <p className="precio">${producto.precio}</p>
            <p className="text-muted">Stock: {producto.stock || "Sin stock"}</p>
          </div>
        </div>
        <button onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
