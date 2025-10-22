import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ListarProductos from "./components/ListarProducto/ListarProductos";
import Carrito from "./components/Carrito/Carrito";
import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";
import Categorias from "./components/Categorias/Categorias";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const incrementarCantidad = (id) => {
    const nuevoCarrito = carrito.concat(carrito.find((p) => p.id === id));
    setCarrito(nuevoCarrito);
  };

  const disminuirCantidad = (id) => {
    const index = carrito.findIndex((p) => p.id === id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  useEffect(() => {
    setCargando(true);
    fetch("https://68e44eff8e116898997b8579.mockapi.io/productos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar los productos");
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ListarProductos
              productos={productos}
              agregarAlCarrito={agregarAlCarrito}
            />
          }
        />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Rutas protegidas */}
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <Carrito />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        {/* Ruta de login */}
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
      <Carrito
        productosAgregados={carrito}
        incrementarCantidad={incrementarCantidad}
        disminuirCantidad={disminuirCantidad}
      />
    </Router>
  );
}

export default App;
