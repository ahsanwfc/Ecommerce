import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity, navigate } =
    useContext(ShopContext);
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
  return (
    <>
      <div className="pt-10 text-2xl">
        <Title text1={"Your"} text2={"Cart"} />
        {cartData.map((item, index) => {
          const copyData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="py-4 border-b border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={copyData.image[0]} alt="" />
                <div className="py-1">
                  <div
                    className="text-gray-800 font-semibold
                 text-sm sm:text-lg uppercase"
                  >
                    {copyData.name}
                  </div>
                  <div className="flex text-lg font-medium items-center gap-4 my-2">
                    {copyData.comparePrice ? (
                      <p className="text-sm text-red-600 font-medium">
                        <del className="text-sm text-gray-800  font-medium">
                          {currency}
                          {copyData.comparePrice}
                        </del>
                        {currency}
                        {copyData.price}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-800  font-medium">
                        {copyData.price}
                      </p>
                    )}
                    <p className="border py-1 px-2 bg-gray-200">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value == "0"
                    ? "null"
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border text-sm max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 sm:w-5 mr-4 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("place-order")}
              className="uppercase border font-medium text-sm text-white my-6 bg-black py-3 px-6 hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-400"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
