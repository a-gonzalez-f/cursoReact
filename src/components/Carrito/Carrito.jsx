import React from "react";
import "./carrito.css";
import useCartContext from "../../context/useCartContext";

const Carrito = () => {
  const { productosAgregados, incrementarCantidad, disminuirCantidad } =
    useCartContext();

  const total = productosAgregados.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className={`carrito`}>
      <h2>Carrito</h2>
      <div className="container">
        {productosAgregados.length > 0 ? (
          productosAgregados.map((producto) => (
            <div className="enCarrito" key={producto.id}>
              <h3>{producto.nombre}</h3>
              <div className="contDetalle">
                <p>Precio unitario: ${producto.precio}</p>
                <div className="cantidad dfcc">
                  <div className="dfcc">
                    <button
                      className="amountBtn"
                      onClick={() => disminuirCantidad(producto.id)}
                    >
                      -
                    </button>
                    <span>{producto.cantidad}</span>
                    <button
                      className="amountBtn"
                      onClick={() => incrementarCantidad(producto.id)}
                    >
                      +
                    </button>
                  </div>
                  <p>
                    Subtotal: $
                    {(producto.precio * producto.cantidad).toFixed(2)}
                  </p>
                </div>
              </div>
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
