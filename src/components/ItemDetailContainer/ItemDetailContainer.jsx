import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
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

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
