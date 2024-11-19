import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

function About() {
  return (
    <div className="pt-10">
      <div className="text-2xl text-center">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="mt-5">
        <div className="flex items-center sm:flex-row flex-col gap-16">
          <img className="w-full sm:w-[50%]" src={assets.about_img} alt="" />
          <div className="lg:text-base text-sm text-gray-600 ">
            <p className="mb-4">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h2 className="text-black font-semibold my-4">Our Mission</h2>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-2xl text-left">
          <Title text1={"Why"} text2={"Choose Us"} />
        </div>
        <div className="flex sm:flex-row flex-col mt-5">
          <div className="border lg:text-base text-sm border-gray-200 text-gray-700 sm:text-left text-center sm:w-[33.33%] sm:py-20 py-10 px-10">
            <h3 className="text-black font-semibold my-2">Quality Assurance</h3>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border text-sm border-gray-200 text-gray-700 sm:text-left text-center sm:w-[33.33%] sm:py-20 py-10 px-10">
            <h3 className="text-black font-semibold my-2">Convenience:</h3>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border text-sm border-gray-200 text-gray-700 sm:text-left text-center sm:w-[33.33%] sm:py-20 py-10 px-10">
            <h3 className="text-black font-semibold my-2">
              Exceptional Customer Service:
            </h3>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Newsletter />
      </div>
    </div>
  );
}

export default About;
