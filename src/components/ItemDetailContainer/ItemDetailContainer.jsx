import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";
import useCartContext from "../../context/useCartContext";

const ItemDetailContainer = ({ isAuthenticated }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useCartContext();
  const navigate = useNavigate();

  const handleAgregarAlCarrito = (producto) => {
    if (isAuthenticated) {
      agregarAlCarrito(producto);
    } else {
      navigate("/login");
    }
  };

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
    <ItemDetail producto={producto} agregarAlCarrito={handleAgregarAlCarrito} />
  );
};

export default ItemDetailContainer;
