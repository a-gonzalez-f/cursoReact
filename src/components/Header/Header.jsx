import "./Header.css";
import React from "react";
import { Link, Navigate } from "react-router-dom";

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <header>
      <h1 className="mainTitle">E-Commerce</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/about">Sobre nosotros</Link>
        <Link to="/contacto">Contacto</Link>

        {isAuthenticated ? (
          <>
            <Link to="/admin">Admin</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
