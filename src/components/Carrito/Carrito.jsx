import React from "react";
import "./Carrito.css";
import useCartContext from "../../context/useCartContext";
import { Link, useLocation } from "react-router-dom";

const Carrito = () => {
  const {
    productosAgregados,
    incrementarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
  } = useCartContext();

  const total = productosAgregados.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="carrito">
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

                <button
                  className="deleteBtn"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Quitar
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>No hay productos en el carrito.</p>
            <Link to="/"></Link>
          </>
        )}
      </div>

      {total > 0 && (
        <>
          <div className="total">
            <p>
              TOTAL: <span>${total.toFixed(2)}</span>
            </p>
          </div>
          <button className="vaciarBtn" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;
