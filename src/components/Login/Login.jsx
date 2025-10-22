import React from "react";
import { Navigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, isAuthenticated }) => {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
