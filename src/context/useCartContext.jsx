import { useContext } from "react";
import CartContext from "./CartContext";

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe ser usado dentro de un CartProvider");
  }
  return context;
};

export default useCartContext;
