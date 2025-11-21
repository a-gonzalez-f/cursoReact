import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosAgregados((prev) => {
      const existente = prev.find((p) => p.id === producto.id);

      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const incrementarCantidad = (id) => {
    setProductosAgregados((prev) =>
      prev.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      )
    );
  };

  const disminuirCantidad = (id) => {
    setProductosAgregados((prev) => {
      const prod = prev.find((p) => p.id === id);

      if (prod && prod.cantidad > 1) {
        return prev.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        );
      }

      return prev.filter((p) => p.id !== id);
    });
  };

  const eliminarProducto = (id) => {
    setProductosAgregados((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => {
    setProductosAgregados([]);
  };

  const procederCompra = () => {
    alert("Gracias por su compra!");
    setProductosAgregados([]);
  };

  return (
    <CartContext.Provider
      value={{
        productosAgregados,
        agregarAlCarrito,
        incrementarCantidad,
        disminuirCantidad,
        eliminarProducto,
        vaciarCarrito,
        procederCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
