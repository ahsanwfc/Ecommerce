import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  const showRelatedProducts = () => {
    let copyProduct = products.slice();
    if (products.length > 0) {
      copyProduct = copyProduct.filter((item) => category == item.category);
      copyProduct = copyProduct.filter(
        (item) => subCategory == item.subCategory
      );
      //   console.log(copyProduct.slice(0, 3));
      setRelated(copyProduct.slice(0, 5));
    }
  };
  useEffect(() => {
    showRelatedProducts();
  }, [products]);
  return (
    <div className="my-20">
      <div className="text-3xl text-center py-8">
        <Title text1={"Related"} text2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
