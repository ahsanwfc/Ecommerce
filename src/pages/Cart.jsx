import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";

function Cart() {
  const { products, currency, cartItem } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return <div></div>;
}

export default Cart;
