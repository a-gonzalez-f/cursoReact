import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existente = productosAgregados.find((p) => p.id === producto.id);
    if (existente) {
      incrementarCantidad(producto.id);
    } else {
      setProductosAgregados([
        ...productosAgregados,
        { ...producto, cantidad: 1 },
      ]);
    }
  };

  const incrementarCantidad = (id) => {
    setProductosAgregados(
      productosAgregados.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  };

  const disminuirCantidad = (id) => {
    setProductosAgregados((prevProductos) => {
      const producto = prevProductos.find((p) => p.id === id);

      if (producto && producto.cantidad > 1) {
        return prevProductos.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        );
      } else {
        return prevProductos.filter((p) => p.id !== id);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        productosAgregados,
        agregarAlCarrito,
        incrementarCantidad,
        disminuirCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
