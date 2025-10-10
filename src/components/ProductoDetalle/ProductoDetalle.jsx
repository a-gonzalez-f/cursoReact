import "./ProductoDetalle.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch(`https://68e44eff8e116898997b8579.mockapi.io/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar el producto");
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="productoDetalle">
      <div>
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalle border">
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria}</p>
        <p>Descripción: {producto.descripcion || "No hay descripción"}</p>
        <p>Stock: {producto.stock || "Sin stock"}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  );
};

export default ProductoDetalle;
