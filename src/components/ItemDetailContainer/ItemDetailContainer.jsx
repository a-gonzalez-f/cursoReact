import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import useCartContext from "../../context/useCartContext";
import { getProductById } from "../../services/products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useCartContext();

  useEffect(() => {
    setCargando(true);
    getProductById(id)
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
