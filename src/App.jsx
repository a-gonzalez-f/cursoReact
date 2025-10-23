import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import CartProvider from "./context/CartProvider";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <CartProvider>
      <Router>
        <Nav
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/producto/:id"
            element={<ItemDetailContainer isAuthenticated={isAuthenticated} />}
          />
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
      </Router>
    </CartProvider>
  );
}

export default App;
