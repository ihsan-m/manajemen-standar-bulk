"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import UserLogo from "../(Logos)/UserLogo";
import TopBarLogo from "../(Logos)/TopBarLogo";
import SuperAdminLogo from "../(Logos)/SuperAdminLogo";
import { LogoutButton } from "./LogoutButton";

const TopbarMainMenu = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Logout Button", href: "/" },
    { label: "Logo User", href: "/" },
    { label: "Nama dan Role", href: "/" },
    { label: "Account", href: "/account" },
  ];

  return (
    <nav className="flex items-center justify-between space-x-4 border-b-2 mb-5 px-5 py-1 bg-slate-50 shadow-[0px_4px_4px_#00000040]">
      <Link href="/">
        <TopBarLogo />
      </Link>
      <ul className="flex items-center space-x-2">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-sky-800" : "text-sky-700"
            } hover:text-sky-500 transition-colors`}
            href={link.href}
          >
            {link.label === "Logout Button" ? (
              <LogoutButton property1={"variant-2"} />
            ) : link.label === "Account" ? (
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

export default TopbarMainMenu;
