"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { MdTab } from "react-icons/md";
import { HiMiniTableCells } from 'react-icons/hi2'
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import WarningModal from "../WarningModal";

const SidebarSTU = () => {
  const [isButtonToggled, setIsButtonToggled] = useState(false);
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

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
    <aside
      className={`relative shrink-0 transition-[width] duration-500 ${
        isButtonToggled ? "w-[4rem]" : "w-[250px]"
      }`}
    >
      <nav
        className={`fixed flex h-screen flex-col px-3 py-5 transition-[width] duration-500 border-r border-slate-300 bg-white text-sky-700 ${
          isButtonToggled ? "w-[4rem]" : "w-[250px]"
        }`}
      >
        <div className="inline-flex justify-between items-center h-20">
          <p
            className={`font-black text-2xl ${isButtonToggled ? "hidden" : ""}`}
          >
            Manajemen Standar Utama
          </p>
          <button
            onClick={() => setIsButtonToggled(!isButtonToggled)}
            className="active:scale-95 text-4xl transition-colors hover:bg-slate-100 hover:border hover:border-sky-700 hover:rounded-md"
          >
            <TbLayoutSidebarRightExpand
              className={` transition-transform duration-500 ${
                isButtonToggled ? "rotate-180 " : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div className="flex w-full grow flex-col mt-5 space-y-2">
          <Link
            className={`side-item-stu ${
              pathname === "/standar-utama/main-dashboard"
                ? "bg-sky-700 text-sky-50 hover:text-sky-700"
                : ""
            }`}
            href="/standar-utama/main-dashboard"
          >
            <MdTab className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              Main Dashboard
            </span>
          </Link>
          <Link
            className={`side-item-stu ${
              pathname.startsWith("/standar-utama/internal-management")
                ? "bg-sky-700 text-sky-50 hover:text-sky-700"
                : ""
            }`}
            href="/standar-utama/internal-management"
          >
            <HiMiniTableCells className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              Internal Management
            </span>
          </Link>
          <Link
            className={`side-item-stu ${
              pathname.startsWith("/standar-utama/on-request")
                ? "bg-sky-700 text-sky-50 hover:text-sky-700"
                : ""
            }`}
            href="/standar-utama/on-request"
          >
            <HiOutlineInboxArrowDown className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              On Request
            </span>
          </Link>
          <Link
            className={`side-item-stu ${
              pathname.startsWith("/standar-utama/return")
                ? "bg-sky-700 text-sky-50 hover:text-sky-700"
                : ""
            }`}
            href="/standar-utama/return"
          >
            <MdOutlineAssignmentReturn className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              Return
            </span>
          </Link>
          <Link
            className={`side-item-stu ${
              pathname.startsWith("/standar-utama/user-management")
                ? "bg-sky-700 text-sky-50 hover:text-sky-700"
                : ""
            }`}
            href="/standar-utama/user-management"
          >
            <HiUsers className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              User Management
            </span>
          </Link>
          <div className="w-full h-[3px] bg-slate-200" />
          <Link className={`side-item-gray`} href="/main-menu">
            <BiSolidDashboard className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              Main Menu
            </span>
          </Link>
          <button className={`side-item-red`} onClick={openModal}>
            <HiOutlineArrowRightOnRectangle className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : "text-sm font-bold"}`}>
              Logout
            </span>
          </button>
        </div>
        {/* TODO Apply Logout Logic here if needed */}
        <WarningModal
          isOpen={isModalOpen}
          onClose={confirmLogout}
          message1="Konfirmasi Logout?"
          message2="Anda perlu login kembali menggunakan Email dan Password PTI. Apabila Anda bukan pemilik akun, maka Anda perlu menghubungi segera Admin."
        />
      </nav>
    </aside>
  );
};

export default SidebarSTU;
