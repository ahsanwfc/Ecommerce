import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 grid-cols-1 py-20">
      <div className="flex flex-col text-center">
        <div>
          <img
            className="w-12 m-auto mb-5 hover:scale-110 transition duration-300 ease-in-out "
            src={assets.exchange_icon}
            alt=""
          />
        </div>
        <p className="text-base font-medium text-gray-800">
          Easy Exchnage Policy
        </p>
        <p className="text-sm font-normal text-gray-500">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col text-center">
        <div>
          <img
            className="w-12 m-auto mb-5 hover:scale-110 transition duration-300 ease-in-out"
            src={assets.quality_icon}
            alt=""
          />
        </div>
        <p className="text-base font-medium text-gray-800">
          7 Days Return Policy
        </p>
        <p className="text-sm font-normal text-gray-500">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col text-center">
        <div>
          <img
            className="w-12 m-auto mb-5 hover:scale-110 transition duration-300 ease-in-out"
            src={assets.support_img}
            alt=""
          />
        </div>
        <p className="text-base font-medium text-gray-800">
          Best customer support
        </p>
        <p className="text-sm font-normal text-gray-500">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
