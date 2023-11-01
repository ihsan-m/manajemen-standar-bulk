"use client";
import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      LoginPage
      <LoginForm />
      <Link href='/components'>lihat Cobaan</Link>
    </div>
  );
};

export default LoginPage;
