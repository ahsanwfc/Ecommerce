import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";

function Product() {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(true);
        console.log(item);
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);
  return <div>Product</div>;
}

export default Product;
