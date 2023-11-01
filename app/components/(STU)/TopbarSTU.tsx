"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import UserLogo from "../(Logos)/UserLogo";
import TopBarLogo from "../(Logos)/TopBarLogo";
import SuperAdminLogo from "../(Logos)/SuperAdminLogo";

const TopbarSTU = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Logo User", href: "/" },
    { label: "Nama dan Role", href: "/" },
    { label: "Account", href: "/account" },
  ];

  return (
    <nav className="flex items-center justify-between space-x-4 border-b-2 mb-5 px-5 py-5 bg-sky-700 shadow-[0px_4px_4px_#00000040]">
      <>Manajemen Standar Utama</>
      <ul className="flex items-center space-x-2">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-slate-200" : "text-slate-50"
            } hover:text-slate-200 transition-colors`}
            href={link.href}
          >
            { link.label === "Account" ? (
              <UserLogo />
            ) : link.label === "Logo User" ? (
              <SuperAdminLogo />
            ) : (
              link.label
            )}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default TopbarSTU;
