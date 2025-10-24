import "./Nav.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCartContext from "../../context/useCartContext";

const Nav = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const { productosAgregados } = useCartContext();

  const cantidadTotal = productosAgregados.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <h1 className="mainTitle">Commerce</h1>
      <nav>
        <Link className={isActive("/") ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={isActive("/about") ? "active" : ""} to="/about">
          Sobre nosotros
        </Link>
        <Link className={isActive("/contacto") ? "active" : ""} to="/contacto">
          Contacto
        </Link>

        {isAuthenticated ? (
          <>
            <Link className={isActive("/admin") ? "active" : ""} to="/admin">
              Admin
            </Link>
            <Link
              className={isActive("/carrito") ? "active aCarrito" : "aCarrito"}
              to="/carrito"
            >
              Carrito{" "}
              {cantidadTotal ? (
                <p className="cantItemsCarrito">{cantidadTotal}</p>
              ) : (
                ""
              )}
            </Link>
            <button className="log" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link className={isActive("/login") ? "active" : ""} to="/login">
            Iniciar sesión
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
