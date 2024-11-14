import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";

const ProductItem = ({ id, image, name, price, comparePrice }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 duration-700 transition ease-in-out"
          src={image[0]}
          alt=""
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        {comparePrice ? (
          <>
            <p className="text-sm text-red-600 font-medium">
              <del className="text-sm text-gray-800  font-medium">
                {currency}
                {comparePrice}
              </del>
              {currency}
              {price}
            </p>
          </>
        ) : (
          <p className="text-sm font-medium">
            {currency}
            {price}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;
