"use client";

import React from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SidebarSTU = () => {
  const [isButtonToggled, setIsButtonToggled] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative shrink-0 transition-[width] duration-500 ${
        isButtonToggled ? "w-[6.5rem]" : "w-80"
      }`}
    >
      <nav
        className={`fixed flex h-screen flex-col px-5 py-5 transition-[width] duration-500 ${
          isButtonToggled ? "w-[6.5rem]" : "w-80"
        }`}
      >
        <div>
            Announcements
        </div>
        <div>
            Announcements
        </div>
        <div>
            Announcements
        </div>
        <div>
            Announcements
        </div>
        <div>
            Announcements
        </div>
        <div>
            Announcements
        </div>
      </nav>
    </aside>
  );
};

export default SidebarSTU;
