import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import useCartContext from "../../context/useCartContext";
import { getProducts } from "../../services/products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useCartContext();
  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true);
    getProducts(categoria)
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [categoria]);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!productos) return <p>Productos no encontrados</p>;

  return <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemListContainer;
