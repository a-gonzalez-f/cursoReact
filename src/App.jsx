import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import Admin from "./components/AdminComponents/Admin";
import Login from "./components/Login/Login";
import CartProvider from "./context/CartProvider";
import { AuthProvider, ProtectedRoute } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />

            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />

            <Route path="/carrito" element={<Carrito />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
