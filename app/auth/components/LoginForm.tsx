"use client";
import React, { useState } from "react";
import SnackbarSuccess from "../../components/SnackbarSuccess";
import SnackbarWarning from "../../components/SnackbarWarning";
import SnackbarError from "../../components/SnackbarError";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import ForgotPasswordForm from "./ForgotPasswordForm";

// TODO :
// - Apply Backend Logic
// - Apply Snackbars for Negative Scenario
type Props = {
  setForm: (form: string) => void;
};

const LoginForm = ({ setForm }: Props) => {
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showWarningSnackbar, setShowWarningSnackbar] = useState(false);
  const [ShowErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleForgotPasswordClick = () => {
    setForm("forgotPassword");
  };


  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSuccessClick = () => {
    setShowSuccessSnackbar(true);
    setTimeout(() => {
      setShowSuccessSnackbar(false);
    }, 15000);
  };

  const handleWarningClick = () => {
    setShowWarningSnackbar(true);
    setTimeout(() => {
      setShowWarningSnackbar(false);
    }, 15000);
  };

  const handleErrorClick = () => {
    setShowErrorSnackbar(true);
    setTimeout(() => {
      setShowErrorSnackbar(false);
    }, 15000);
  };

  return (
    <>
        <div className="flex flex-col w-full items-center ">
          <div className="min-w-[400px] max-w-[600px] h-[450px] w-full p-10 flex flex-col justify-center rounded-lg bg-slate-50 shadow-xl">
            <div className="text-center text-2xl font-bold text-slate-600 pb-4">
              <p>Selamat Datang di </p>
              <p className="text-sky-700">Manajemen Standar Bulk</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="text-sm w-full block border placeholder-gray-500 px-3 py-3 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="text-sm w-full block border placeholder-gray-500 px-3 py-3 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                  {showPassword ? (
                    <AiFillEye
                      onClick={handlePasswordVisibility}
                      className="text-xl absolute right-5 bottom-3 text-gray-600"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={handlePasswordVisibility}
                      className="text-xl absolute right-5 bottom-3 text-gray-600"
                    />
                  )}
                </div>
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
                  onClick={handleForgotPasswordClick}
                >
                  Lupa Password?
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
          {/* Footer */}
          <div className="text-sm text-slate-50 text-center mt-6">
            Paragon Technology and Innovation
          </div>

          {/* TODO Apply Snackbar Logic and Message */}
          <div className="text-sm text-white text-center mt-6">
            Click Me for Snack Bars of{" "}
            <a
              href="#"
              className="font-medium text-green-300 hover:text-green-500 "
              onClick={handleSuccessClick} // Add click handler here
            >
              Success{" "}
            </a>
            {showSuccessSnackbar && (
              <SnackbarSuccess
                message="Berhasil Masuk!"
                timer={15}
                setShowSnackbar={setShowSuccessSnackbar}
              />
            )}
            <a
              href="#"
              className="font-medium text-yellow-300 hover:text-yellow-500"
              onClick={handleWarningClick} // Add click handler here
            >
              Warning{" "}
            </a>
            {showWarningSnackbar && (
              <SnackbarWarning
                message="Masukkan Email/Password PTI yang benar!"
                timer={15}
                setShowSnackbar={setShowWarningSnackbar}
              />
            )}
            <a
              href="#"
              className="font-medium text-red-300 hover:text-red-500"
              onClick={handleErrorClick}
            >
              Error{" "}
            </a>
            {ShowErrorSnackbar && (
              <SnackbarError
                message="Tidak dapat masuk, #input error message"
                timer={15}
                setShowSnackbar={setShowErrorSnackbar}
              />
            )}
          </div>
        </div>
    </>
  );
};

export default LoginForm;
