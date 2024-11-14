import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContex";

const CartTotal = () => {
  const { delivery_fees, currency, countTotalAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl text-gray-800">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div className="flex justify-between py-2 border-b text-sm">
        <p>Subtotal</p>
        <p>
          {currency}
          {countTotalAmount()}.00
        </p>
      </div>
      <div className="flex justify-between py-2 border-b text-sm">
        <p>Shipping Fees</p>
        <p>
          {currency}
          {delivery_fees}.00
        </p>
      </div>
      <div className="flex justify-between py-2 border-b text-sm font-semibold">
        <p>Total</p>
        <p>
          {currency}
          {countTotalAmount() === 0 ? 0 : countTotalAmount() + delivery_fees}.00
        </p>
      </div>
    </div>
  );
};

export default CartTotal;
