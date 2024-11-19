import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    debugger;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ahsan Shafi",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sending email", error);
      });
  };

  return (
    <div className="mt-10">
      <div className="text-2xl text-center">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-16 mt-10">
        <img className="sm:w-[50%] w-full" src={assets.contact_img} alt="" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:w-[50%] w-full text-base text-gray-700"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Your Name <span className="text-red-800">*</span>
            </label>
            <input
              className="border border-gray-400 py-2 px-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Your Email <span className="text-red-800">*</span>
            </label>
            <input
              className="border border-gray-400 py-2 px-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Your Message <span className="text-red-800">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-400 py-2 px-2"
              type="textarea"
            />
          </div>
          <button
            value="Send"
            className="border border-black font-medium text-sm text-gray-800 my-6  py-3 px-6 hover:bg-black hover:text-white transition duration-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
