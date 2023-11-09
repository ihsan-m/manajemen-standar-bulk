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
import WarningModal from "../WarningModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

// TODO Implement Mekanisme if role / departemen -> pakai logo yg sesuai

const TopbarMainMenu = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = (confirmed: boolean) => {
    setIsModalOpen(false);
    if (confirmed) {
      // TODO Logout Logic Here
      router.push("/auth");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between space-x-2 mb-5 px-5 py-2 h-[80px] bg-slate-50 drop-shadow-md border-b-2">
      <div className="flex h-full w-full">
        <div>
          <TopBarLogo />
        </div>
      </div>
      <div className="inline-flex justify-end items-center h-full w-full space-x-3">
        <button className="large-button-red" onClick={openModal}>
          <HiOutlineArrowRightOnRectangle className="text-2xl" />
          Log Out
        </button>
        <Link
          href="/account"
          className="group flex items-center space-x-2 hover:scale-95 transition-transform"
        >
          <HiOutlineComputerDesktop className="text-sky-800 text-2xl group-hover:text-sky-600" />
          <p>
            <span className="text-sky-800 text-sm font-bold group-hover:text-sky-600">
              Ayu Dwi Lestari Widianingrum
              <br />
            </span>
            <span className="text-sky-800 text-sm group-hover:text-sky-600">
              Super Admin
            </span>
          </p>
          <BiSolidUserCircle className="text-sky-800 text-2xl group-hover:text-sky-600" />
        </Link>
      </div>
      {/* TODO Apply Logout Logic here if needed */}
      <WarningModal
        isOpen={isModalOpen}
        onClose={confirmLogout}
        message1="Konfirmasi Logout?"
        message2="Anda perlu login kembali menggunakan Email dan Password PTI. Apabila Anda bukan pemilik akun, maka Anda perlu menghubungi segera Admin."
      />
    </nav>
  );
};

export default TopbarMainMenu;
