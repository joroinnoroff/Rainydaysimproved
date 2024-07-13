// context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getCart, addToCart as addProductToCart, removeFromCart as removeProductFromCart } from '../storage/cartCookie';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const addToCart = (product, size) => {
    addProductToCart(product, size);
    setCartItems(getCart());
  };

  const removeFromCart = (product) => {
    removeProductFromCart(product); // Changed the function name here
    setCartItems(getCart());
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
