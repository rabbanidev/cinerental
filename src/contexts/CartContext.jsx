/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
