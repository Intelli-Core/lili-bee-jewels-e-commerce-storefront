"use client";

import React from "react";
import { headerLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type NavItemProps = {
  fontStyle?: string;
  closeSheet?: () => void;
};

const NavItems = ({ fontStyle = "p-regular-16", closeSheet }: NavItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (closeSheet) {
      closeSheet();
    }
  };

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`flex-center ${fontStyle} whitespace-nowrap ${
              link.mobile ? "block md:hidden" : "hidden md:block"
            }`}
          >
            <button onClick={() => handleClick()}>
              <Link href={link.route}>{link.label}</Link>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
