import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Carrito from "./components/Carrito/Carrito";
import Categorias from "./components/Categorias/Categorias";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [carrito, setCarrito] = useState([]);
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

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <Nav
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/producto/:id"
          element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />}
        />
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
