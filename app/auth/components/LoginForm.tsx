"use client"
import React, { useState } from "react";
import SnackbarSuccess from "../../components/SnackbarSuccess";


// TODO :
// - Apply Backend Logic
// - Apply Snackbars for Negative Scenario

const LoginForm = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClick = () => {
    // Show the snackbar
    setShowSnackbar(true);

    // After 10 seconds, hide the snackbar
    setTimeout(() => {
      setShowSnackbar(false);
    }, 10000); // 10000 milliseconds = 30 seconds
  };
  return (
    <>
      {/* Login Form */}
      <div className="p-10 flex flex-col rounded-lg bg-slate-50 overflow-hidden shadow-xl">
        <form className="space-y-6">
          <div className="text-center text-2xl font-bold text-slate-600">
            <p>Selamat Datang di</p>
            <p className="text-sky-700">Manajemen Standar Bulk</p>
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="text-sm w-[500px] block border placeholder-gray-500 px-3 py-3 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="text-sm w-[500px] block border placeholder-gray-500 px-3 py-3 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-between space-x-2 mb-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                name="remember_me"
                className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50    "
              />
              <span className="text-sm ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 "
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="transition-colors w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-sky-600 bg-sky-600 text-white hover:text-white hover:bg-sky-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
          >
            <span>Sign In</span>
          </button>
        </form>
      </div>
      <div className="text-sm text-slate-50 text-center mt-6">
        Paragon Technology and Innovation
      </div>

      {/* TODO Apply Snackbar Logic and Message */}
      <div className="text-sm text-white text-center mt-6">
        Click Me for Snack Bars of{" "}
        <a
          href="#"
          className="font-medium text-green-300 hover:text-green-500 "
          onClick={handleClick} // Add click handler here
        >
          Success{" "}
        </a>
        {showSnackbar && <SnackbarSuccess/>}
        <a
          href="#"
          className="font-medium text-yellow-300 hover:text-yellow-500"
        >
          Warning{" "}
        </a>
        <a href="#" className="font-medium text-red-300 hover:text-red-500">
          Error{" "}
        </a>
      </div>
    </>
  );
};

export default LoginForm;
