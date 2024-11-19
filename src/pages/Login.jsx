import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const onSubmitForm = async (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div class="inline-flex items-center gap-2 mb-2 mt-10">
        <p class="prata-regular text-3xl">{currentState}</p>
        <hr class="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState == "Login" ? (
        ""
      ) : (
        <input
          type="text"
          class="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        ></input>
      )}
      <input
        type="email"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      ></input>
      <input
        type="password"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      ></input>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState == "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      <button className="border border-black font-medium text-sm text-white bg-black my-2 py-3 px-8 hover:bg-transparent hover:text-black hover:border hover:border-black transition duration-400">
        {currentState == "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
