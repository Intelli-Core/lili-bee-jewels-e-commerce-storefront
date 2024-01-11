"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  fontStyle?: string;
}

const NavItems: React.FC<NavItemProps> = ({ fontStyle = "p-regular-16"}) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        if (link.mobile && !isMobile) {
          return null;
        }

        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center ${fontStyle} whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label.toUpperCase()}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
