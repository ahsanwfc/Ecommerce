import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fees = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
      if (!size) {
        toast.error("Select Product Size");
        return;
      }
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

  // Update Quantity
  const updateQuantity = (itemId, size, quantity) => {
    let updateData = structuredClone(cartItem);
    updateData[itemId][size] = quantity;
    setCartItem(updateData);
  };

  // Cart Count
  const cartCount = () => {
    let totalCount = 0;
    // first loop is based on productId
    for (const items in cartItem) {
      // 2nd loop is for the available sizes of specific product
      for (const item in cartItem[items]) {
        try {
          // cartItem[items][item] represent quantity
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }

    return totalCount;
  };

  //Count Total Amount
  const countTotalAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItem) {
      let productInfo = products.find((product) => product._id === productId);
      for (const itemSize in cartItem[productId]) {
        try {
          if (cartItem[productId][itemSize] > 0) {
            productId.comparePrice
              ? (totalAmount +=
                  productInfo.comparePrice * cartItem[productId][itemSize])
              : (totalAmount +=
                  productInfo.price * cartItem[productId][itemSize]);
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  // useEffect(() => {
  //   console.log(cartItem);
  // }, [cartItem]);

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
    cartCount,
    updateQuantity,
    countTotalAmount,
    navigate,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
