"use client";
import SBLogo from "../components/(Logos)/SBLogo";
import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import EmailSuccessCard from "./components/EmailSuccessCard";

const LoginPage = () => {
  const [title, setTitle] = useState("Login | MSB");
  const [form, setForm] = useState("login");

  useEffect(() => {
    document.title = title;
  }, [title]); // This effect will re-run whenever the title state changes

  let currentForm;
  if (form === "login") {
    currentForm = <LoginForm setForm={setForm} />;
  } else if (form === "forgotPassword") {
    currentForm = <ForgotPasswordForm setForm={setForm} />;
  } else if (form === "emailSuccess") {
    currentForm = <EmailSuccessCard setForm={setForm} />;
  }

  return (
    <div
      id="page-container"
      className="flex flex-row mx-auto w-full min-h-screen min-w-[320px] bg-slate-50"
    >
      <div id="page-content" className="w-full hidden md:block">
        <div className="p-20 flex justify-center items-center h-full">
          <SBLogo />
        </div>
      </div>
      <div
        id="page-content"
        className="flex flex-col flex-auto w-full items-center justify-center p-12 [background:linear-gradient(180deg,rgb(0,31.07,49.94)_0%,rgb(36.3,158.41,217.81)_100%)]"
      >
        <div className="min-w-[400px] max-w-[600px] w-full overflow-hidden">
          {currentForm}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
