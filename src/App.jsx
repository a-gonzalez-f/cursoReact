import { useState, useEffect } from 'react'
import './App.css'
import ListarProductos from './components/ListarProductos';
import Carrito from './components/Carrito';
import Header from './components/Header';

function App() {

  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  useEffect(() => {
    setCargando(true);
    fetch('https://68e44eff8e116898997b8579.mockapi.io/productos')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar los productos');
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(err => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <ListarProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito productosAgregados={carrito} />
    </>
  );
}

export default App;
