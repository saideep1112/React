import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  const addToCart = (item, restaurantId) => {
    if (currentRestaurant && currentRestaurant !== restaurantId) {
      setCartItems({});
      setCurrentRestaurant(restaurantId);
    } else if (!currentRestaurant) {
      setCurrentRestaurant(restaurantId);
    }

    setCartItems((prevItems) => {
      const exisitingItem = prevItems[item.id];
      const newQuantity = exisitingItem ? exisitingItem.quantity + 1 : 1;

      return { ...prevItems, [item.id]: { ...item, quantity: newQuantity } };
    });
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const item = prevItems[itemId];
      return {
        ...prevItems,
        [itemId]: { ...item, quantity: item.quantity + 1 },
      };
    });
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const item = prevItems[itemId];
      if (item && item.quantity > 1) {
        return {
          ...prevItems,
          [itemId]: { ...item, quantity: item.quantity - 1 },
        };
      } else {
        const { [itemId]: _, ...rest } = prevItems;
        return rest;
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
