import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContex";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <form className="flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-2xl">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-2 text-sm text-gray-500">
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border text-sm text-gray-500 py-2 px-2 rounded-md w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border text-sm text-gray-500 py-2 px-2 rounded-md w-full"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-2 text-sm text-gray-500">
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-2 text-sm text-gray-500">
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="Zipcode"
          />
          <input
            className="border py-2 px-2 rounded-md w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border text-sm text-gray-500 py-2 px-2 rounded-md w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      <div className="mt-8">
        <div className="min-w-80">
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <CartTotal />
          </div>
        </div>
        <div className="mt-8">
          <div className="text-xl">
            <Title text1={"Payment"} text2={"Methd"} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p
                  onClick={() => setMethod("stripe")}
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method == "stripe" ? "bg-green-500" : ""
                  }`}
                ></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p
                  onClick={() => setMethod("razorpay")}
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method == "razorpay" ? "bg-green-500" : ""
                  }`}
                ></p>
                <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
              </div>
              <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p
                  onClick={() => setMethod("cod")}
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method == "cod" ? "bg-green-500" : ""
                  }`}
                ></p>
                <p className="uppercase text-sm text-gray-500">
                  cash on delivery
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-end">
          <button
            onClick={() => navigate("/orders")}
            className="uppercase border font-medium text-sm text-white my-6 bg-black py-3 px-6 hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-400"
          >
            Place order
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
