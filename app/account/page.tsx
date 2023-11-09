"use client";
import React from "react";
import { AiFillEye } from "react-icons/ai"; // untuk viewer
import { HiOutlineComputerDesktop } from "react-icons/hi2"; // untuk Super Admin
import { HiOutlineBeaker } from "react-icons/hi2"; // untuk Formulator
import { HiOutlineCube } from "react-icons/hi2"; // untuk Lab Utama
import { HiOutlineCubeTransparent } from "react-icons/hi2"; // untuk RND Standar
import { HiOutlineShieldCheck } from "react-icons/hi2"; // untuk Quality Retain
import { HiOutlineGiftTop } from "react-icons/hi2"; // untuk Produksi
import { HiOutlinePresentationChartLine } from "react-icons/hi2"; // untuk RND Proses
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();

  return (
    <main className="flex justify-center">
      <section className="w-full h-[270px] rounded-b-3xl bg-gradient-to-b from-sky-950 to-sky-500" />
      {/* Account Card */}
      <div className="absolute max-w-[900px] w-full space-x-5 md:flex items-start justify-center px-10 py-16 top-20 bg-white rounded-2xl border border-gray-600">
        <HiOutlineComputerDesktop className="w-full h-[100px] md:w-[300px] md:h-[300px] text-sky-800" />
        <div className="space-y-5 max-w-[600px] w-full">
          <button
            type="button"
            onClick={() => router.back()}
            className="group flex items-center space-x-2 hover:scale-95 transition-transform text-blue-600 hover:text-blue-400 "
          >
            <AiOutlineArrowLeft />
            <span className="text-md"> Kembali </span>
          </button>
          <p className="text-4xl font-bold text-sky-700">Akun Anda</p>
          {/* TODO GET User Data */}
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Nama Lengkap <br />
            </label>
            <input
              id="name"
              name="name"
              value="Ayu Dwi Lestari Widianingrum"
              disabled
              className="input-form"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Email <br />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="ayu.dlwidianingrum@pticosmetics.com"
              disabled
              className="input-form"
            />
          </div>
          <p className="text-xs text-sky-700">
            * Nama dan Email langsung diambil dari informasi Email PTI Anda.
            Harap hubungi Super Admin / superior Anda apabila terdapat kendala
          </p>
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Role <br />
            </label>
            <input
              id="role"
              name="role"
              value="Super Admin"
              disabled
              className="input-form"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Lokasi <br />
            </label>
            <input
              id="location"
              name="location"
              value="-"
              disabled
              className="input-form"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Departemen <br />
            </label>
            <input
              id="department"
              name="department"
              value="-"
              disabled
              className="input-form"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">
              Sediaan <br />
            </label>
            <input
              id="sediaan"
              name="sediaan"
              value="-"
              disabled
              className="input-form"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
