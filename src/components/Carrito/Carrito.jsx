import React from "react";
import useCartContext from "../../context/useCartContext";

const Carrito = () => {
  const { productosAgregados, incrementarCantidad, disminuirCantidad } =
    useCartContext();

  const total = productosAgregados.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div
      className={`carrito ${
        productosAgregados.length > 0 ? "visible" : "hidden"
      }`}
    >
      <h2>Carrito</h2>
      <div className="container">
        {productosAgregados.length > 0 ? (
          productosAgregados.map((producto) => (
            <div className="producto enCarrito" key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>Precio unitario: ${producto.precio}</p>
              <div className="cantidad dfcc">
                <button onClick={() => disminuirCantidad(producto.id)}>
                  -
                </button>
                <span>{producto.cantidad}</span>
                <button onClick={() => incrementarCantidad(producto.id)}>
                  +
                </button>
              </div>
              <p>
                Subtotal: ${(producto.precio * producto.cantidad).toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      {total > 0 && (
        <div className="total">
          <p>
            TOTAL: <span>${total.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
