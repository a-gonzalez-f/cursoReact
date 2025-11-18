import "./Nav.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useCartContext from "../../context/useCartContext";
import { useAuth } from "../../context/AuthContext";

const Nav = () => {
  const location = useLocation();
  const { productosAgregados } = useCartContext();
  const { isAuthenticated, logout } = useAuth();

  const cantidadTotal = productosAgregados.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="mainNav">
      <Link className={isActive("/") ? "active" : ""} to="/">
        Home
      </Link>

      <Link className={isActive("/about") ? "active" : ""} to="/about">
        Sobre nosotros
      </Link>

      <Link className={isActive("/contacto") ? "active" : ""} to="/contacto">
        Contacto
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

      {isAuthenticated && (
        <>
          <Link className={isActive("/admin") ? "active" : ""} to="/admin">
            Admin
          </Link>
          <button className="log" onClick={logout}>
            Cerrar sesión
          </button>
        </>
      )}
    </nav>
  );
};

export default Nav;
