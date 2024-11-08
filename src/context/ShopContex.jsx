import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fees = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItem, setCartItem] = useState({});
  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
  };
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const value = {
    products,
    currency,
    delivery_fees,
    showSearch,
    setShowSearch,
    search,
    setSearch,
    cartItem,
    setCartItem,
    addToCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
