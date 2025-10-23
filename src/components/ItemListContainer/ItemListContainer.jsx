import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch("https://68e44eff8e116898997b8579.mockapi.io/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los productos");
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error cargando productos: {error}</p>;

  return <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemListContainer;
