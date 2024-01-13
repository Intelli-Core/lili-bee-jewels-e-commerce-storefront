"use client";

import React from "react";
import { headerLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

type NavItemProps = {
  fontStyle?: string;
  closeSheet?: () => void;
};

const NavItems = ({ fontStyle = "p-regular-16", closeSheet }: NavItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (route: string) => {
    if (closeSheet) {
      closeSheet();
    }
    router.push(route);
  };

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center ${fontStyle} whitespace-nowrap ${
              link.mobile ? "block md:hidden" : "hidden md:block"
            }`}
          >
            <button onClick={() => handleClick(link.route)}>
              {link.label.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
