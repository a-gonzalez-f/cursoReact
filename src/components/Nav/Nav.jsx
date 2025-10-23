import "./Nav.css";
import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

const HeaderNav = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <h1 className="mainTitle">E-Commerce</h1>
      <nav>
        <Link className={isActive("/") ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={isActive("/categorias") ? "active" : ""}
          to="/categorias"
        >
          Categorias
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

export default HeaderNav;
