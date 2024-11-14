import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";
import { assets } from "../assets/assets";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import RelatedProduct from "../components/RelatedProduct";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in-out opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex gap-3 flex-1 flex-col-reverse sm:flex-row">
          {/* Product Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={index}
                alt=""
              />
            ))}
          </div>
          <div className="sm:w-[80%] w-full">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <div className="flex item-center gap-2 mt-3 mb-3">
            {productData.comparePrice ? (
              <>
                <p className="text-2xl font-semibold text-red-600">
                  <del className="text-gray-700">
                    {currency}
                    {productData.price}
                  </del>
                  {currency}
                  {productData.comparePrice}
                </p>
              </>
            ) : (
              <p className="text-2xl font-medium text-gray-700">
                {currency}
                {productData.price}
              </p>
            )}
          </div>
          <p className="text-md text-gray-500">{productData.description}</p>

          <div className="flex flex-col gap-4 my-6">
            <p className="text-md text-black">Select Sizes</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item == size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="uppercase px-4 py-2 bg-black text-md font-medium text-white active:bg-gray-700"
          >
            Add to Cart
          </button>
          <hr className="bg-gray-400 h-[1px] sm:w-4/5 mt-8" />
          <div className="flex flex-col my-2 text-sm text-gray-500 mt-4">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>{" "}
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-10">
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanel>
            <div>{productData.description}</div>
          </TabPanel>
          <TabPanel>
            <h2>5 starts on all</h2>
          </TabPanel>
        </Tabs>
      </div>
      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
