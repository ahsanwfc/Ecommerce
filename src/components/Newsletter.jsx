import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-700 font-medium">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        class="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          class="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required=""
        />
        <button
          type="submit"
          class="bg-black text-white text-sm px-10 py-4 uppercase"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
