"use client";
import { BiSolidUserCircle } from "react-icons/bi";
import React, { useState } from "react";
import TopBarLogo from "../(Logos)/TopBarLogo";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { AiFillEye } from "react-icons/ai"; // untuk viewer
import { HiOutlineComputerDesktop } from "react-icons/hi2"; // untuk Super Admin
import { HiOutlineBeaker } from "react-icons/hi2"; // untuk Formulator
import { HiOutlineCube } from "react-icons/hi2"; // untuk Lab Utama
import { HiOutlineCubeTransparent } from "react-icons/hi2"; // untuk RND Standar
import { HiOutlineShieldCheck } from "react-icons/hi2"; // untuk Quality Retain
import { HiOutlineGiftTop } from "react-icons/hi2"; // untuk Produksi
import { HiOutlinePresentationChartLine } from "react-icons/hi2"; // untuk RND Proses
import { useRouter } from "next/navigation";
import Link from "next/link";

// TODO Implement Mekanisme if role / departemen -> pakai logo yg sesuai

const TopbarSTU = () => {
  const router = useRouter();

  return (
    <nav className="flex h-[80px] shrink-0 items-center justify-between space-x-2 px-5 py-2 bg-sky-700 drop-shadow-md border-b-2 border-slate-300 ">
      <div className="md:flex h-full w-full hidden">
        <p className="w-[250px] flex items-center font-medium text-md text-slate-50">
          Manajemen Standar Utama
        </p>
      </div>
      <div className="justify-end inline-flex items-center h-full w-full space-x-3">
        <Link
          href="/account"
          className="group flex items-center space-x-2 hover:scale-95 transition-transform"
        >
          <HiOutlineComputerDesktop className="text-slate-50 text-2xl " />
          <p>
            <span className="text-slate-50 text-sm font-bold ">
              Ayu Dwi Lestari Widianingrum
              <br />
            </span>
            <span className="text-slate-50 text-sm ">
              Super Admin
            </span>
          </p>
          <BiSolidUserCircle className="text-slate-50 text-2xl " />
        </Link>
      </div>
    </nav>
  );
};

export default TopbarSTU;
