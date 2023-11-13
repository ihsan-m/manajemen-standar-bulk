"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { MdTab } from "react-icons/md"
import { BsBoxes } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { BiSolidDashboard } from "react-icons/bi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";


const SidebarSTU = () => {
  const [isButtonToggled, setIsButtonToggled] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative shrink-0 transition-[width] duration-500 ${
        isButtonToggled ? "w-[4rem]" : "w-[260px]"
      }`}
    >
      <nav
        className={`bg-white text-sky-700 fixed flex h-screen flex-col px-3 py-5 transition-[width] duration-500 border-r border-slate-300 ${
          isButtonToggled ? "w-[4rem]" : "w-[260px]"
        }`}
      >
        <div className="inline-flex justify-between items-center">
        <p className={`font-black text-2xl ${isButtonToggled ? "hidden" : ""}`}>Manajemen Standar Utama</p>
          <button
            onClick={() => setIsButtonToggled(!isButtonToggled)}
            className="active:scale-95 text-4xl transition-colors hover:bg-slate-100 hover:border hover:border-sky-700 hover:rounded-md"
          >
            <TbLayoutSidebarRightExpand
              className={` transition-transform duration-500 ${
                isButtonToggled ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
        <div className="flex w-full grow flex-col mt-5 space-y-2">
          <Link
            className={`side-item-stu${
              pathname.startsWith("/main-dashboard") ? "-active" : ""
            }`}
            href="/standar-utama/main-dashboard"
          >
            <MdTab className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>Main Dashboard</span>
          </Link>
          <Link
            className={`side-item-stu${
              pathname.startsWith("/internal-management") ? "-active" : ""
            }`}
            href="/standar-utama/internal-management"
          >
            <BsBoxes className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>Internal Management</span>
          </Link>
          <Link
            className={`side-item-stu${
              pathname.startsWith("/on-request") ? "-active" : ""
            }`}
            href="/standar-utama/on-request"
          >
            <HiOutlineInboxArrowDown className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>On Request</span>
          </Link>
          <Link
            className={`side-item-stu${
              pathname.startsWith("/return") ? "-active" : ""
            }`}
            href="/standar-utama/return"
          >
            <MdOutlineAssignmentReturn className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>Return</span>
          </Link>
          <Link
            className={`side-item-stu${
              pathname.startsWith("/user-management") ? "-active" : ""
            }`}
            href="/standar-utama/user-management"
          >
            <HiUsers className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>User Management</span>
          </Link>
          <div className="w-full h-[3px] bg-slate-200" />
          <Link
            className={`side-item-gray${
              pathname.startsWith("/main-menu") ? "-active" : ""
            }`}
            href="/main-menu"
          >
            <BiSolidDashboard className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>Main Menu</span>
          </Link>
          <Link
            className={`side-item-red${
              pathname.startsWith("/logout") ? "-active" : ""
            }`}
            href="/standar-utama/logout"
          >
            <HiOutlineArrowRightOnRectangle className="text-2xl" />
            <span className={`${isButtonToggled ? "hidden" : ""}`}>Logout</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarSTU;
