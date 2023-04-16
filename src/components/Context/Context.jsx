import React, { useContext, createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const CartContext = createContext();
export const UsarContexto = () => useContext(CartContext);

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const toast = useToast();

  const addToCart = (prod) => {
    const idx = cart.findIndex((producto) => producto.id === prod.id);
    if (idx != -1) {
      alert("este producto solo se puede agregar una sola vez");
    } else {
      setCart(cart.concat(prod));
      toast({
        title: "Agregado al carrito.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const totalCart = () => {
    const total = cart.reduce((acc, prod) => (acc = acc + prod.price), 0);
    return total;
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        setCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
