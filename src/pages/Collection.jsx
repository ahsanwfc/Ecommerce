import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
function collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
      {/*Filter Products */}
      <div className="min-w-60">
        <p className="my-2 flex items-center gap-2 text-xl uppercase cursor-pointer">
          Filters
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              {" "}
              <input className="w-3" type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              {" "}
              <input className="w-3" type="checkbox" value={"Men"} /> Women
            </p>
            <p className="flex gap-2">
              {" "}
              <input className="w-3" type="checkbox" value={"Kids"} /> Men
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              {" "}
              <input className="w-3" type="checkbox" value={"Topwear"} />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              {" "}
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default collection;
