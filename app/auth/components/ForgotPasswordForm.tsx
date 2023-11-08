"use client";
import { useState } from "react";
import SnackbarSuccess from "../../components/SnackbarSuccess";
import SnackbarWarning from "../../components/SnackbarWarning";
import SnackbarError from "../../components/SnackbarError";

type Props = {
  setForm: (form: string) => void;
};

const ForgotPasswordForm = ({ setForm }: Props) => {
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showWarningSnackbar, setShowWarningSnackbar] = useState(false);
  const [ShowErrorSnackbar, setShowErrorSnackbar] = useState(false);

  const handleEmailSuccessClick = () => {
    setForm("emailSuccess");
  };

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
      {/* Card  */}
      <div className="h-[450px] w-full p-10 flex flex-col justify-center rounded-lg bg-slate-50 shadow-xl">
        <div className="text-center text-2xl font-bold text-slate-600 pb-4 ">
          <p>Lupa Password</p>
        </div>
        <p className="text-center text-sm pb-4">
          Kirim email ke akun PTI anda untuk mengikuti langkah penggantian
          password Email PTI.
        </p>
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
          <button
            type="submit"
            className="transition-colors w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-sky-600 bg-sky-600 text-white hover:text-white hover:bg-sky-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
            onClick={handleEmailSuccessClick}
          >
            <span>Send Email</span>
          </button>
          <button
            onClick={handleLoginFormClick}
            className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 "
          >
            <span>Kembali</span>
          </button>
        </form>
      </div>
      {/* End Card  */}
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
    </>
  );
};
export default ForgotPasswordForm;
