import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContex";

function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="mt-10">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="sm:py-4 py-2 border-t border-b border-gray-300 text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-5">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex gap-3 items-center text-base">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity:1</p>
                  <p>Size:{item.sizes[0]}</p>
                </div>
                <div className="mt-1">
                  Date <span className="text-gray-500">Thu Nov 14,2024</span>
                </div>
                <div className="mt-1">
                  Payment: <span className="text-gray-500">COD</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div class="flex items-center gap-2">
                <p class="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p class="text-sm md:text-base">Shipped</p>
              </div>
              <button className="border border-black font-medium text-sm text-gray-800 my-6  py-3 px-6 hover:bg-transparent hover:bg-black hover:text-white hover:border hover:border-black transition duration-400">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
