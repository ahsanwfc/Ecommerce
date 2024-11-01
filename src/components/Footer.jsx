import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="mt-20 my-10 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] text-sm gap:10 text-gray-600">
        <div className="flex flex-col">
          <img className="w-36 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            corrupti dolores tempora debitis incidunt error distinctio obcaecati
            amet nam dolore cupiditate minus fugiat dolor mollitia ratione, iste
            labore pariatur esse!
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-gray-800 sm:text-xl text-lg uppercase mb-5">
            Company
          </p>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-gray-800 sm:text-xl text-lg uppercase mb-5">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-2">
            <li>+91 1234567890</li>
            <li>ahsanshafi008@gmail.com</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p class="py-5 text-sm text-center">
          Copyright 2024@ ahsan.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
