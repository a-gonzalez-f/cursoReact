import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  // Redirección si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(user, pass);
    if (ok) {
      navigate("/admin");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Usuario"
      />

      <input
        value={pass}
        type="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="Contraseña"
      />

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
