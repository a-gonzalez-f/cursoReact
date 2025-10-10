import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="mainTitle">Título</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/about">Sobre nosotros</Link>
      </nav>
    </header>
  );
};

export default Header;
