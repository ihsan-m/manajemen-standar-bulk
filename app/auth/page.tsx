import { Metadata } from "next";
import SBLogo from "../components/(Logos)/SBLogo";
import React from "react";
import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Login | MSB",
  description: "",
};

const LoginPage = () => {
  return (
    <div
      id="page-container"
      className="flex flex-row mx-auto w-full min-h-screen min-w-[320px] bg-slate-50"
    >
      <div id="page-content" className="w-full hidden md:block">
        <div className="p-10 flex justify-center items-center h-full">
          <SBLogo />
        </div>
      </div>
      <div
        id="page-content"
        className="flex flex-col flex-auto w-full items-center justify-center p-5 [background:linear-gradient(180deg,rgb(0,31.07,49.94)_0%,rgb(36.3,158.41,217.81)_100%)]"
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
