import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContex";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 rounded-full px-5 py-2 mx-3 my-5 sm:w-1/2 w-3/4">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-3" src={assets.search_icon} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="w-4 inline cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
