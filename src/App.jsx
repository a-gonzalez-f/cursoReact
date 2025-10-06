import { useState } from 'react'
import './App.css'
import ListarProductos from './components/ListarProductos';
import Carrito from './components/Carrito';
import Header from './components/Header';

function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
  setCarrito([...carrito, producto]);
}

  return (
    <>
      <Header/>
      <ListarProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito productosAgregados={carrito} />
    </>
  );
}

export default App

// mockapi
// https://68e44eff8e116898997b8579.mockapi.io/productos