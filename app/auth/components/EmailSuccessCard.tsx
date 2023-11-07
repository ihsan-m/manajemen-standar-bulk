"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SnackbarSuccess from "../../components/SnackbarSuccess";
import SnackbarWarning from "../../components/SnackbarWarning";
import SnackbarError from "../../components/SnackbarError";

const EmailSuccessCard = () => {
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showWarningSnackbar, setShowWarningSnackbar] = useState(false);
  const [ShowErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [form, setForm] = useState("emailSuccess");

  const handleLoginFormClick = () => {
    setForm("login");
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
      {/* Login Form */}
      {form === "login" && <LoginForm />}
      {/* Success Card */}
      {form === "emailSuccess" && (
        <div className="flex flex-col w-full items-center ">
          <div className="min-w-[400px] max-w-[600px] h-[450px] w-full p-10 flex flex-col justify-center rounded-lg bg-slate-50 shadow-xl">
            <div className="text-center text-2xl font-bold text-slate-600 pb-4 ">
              <p>Email berhasil dikirim!</p>
            </div>
            <p className="text-center text-sm pb-4">
              Silakan periksa kembali email PTI Anda dan ikuti langkah yang ada
              untuk mengganti password.
            </p>
            <button
              onClick={handleLoginFormClick}
              className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 "
            >
              <span>Kembali</span>
            </button>
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
      )}
    </>
  );
};
export default EmailSuccessCard;
