"use client";

import { jost } from "@/lib/fonts";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { headerButtons } from "@/constants";
import Image from "next/image";
import Icon from "./Icon";
import MobileNav from "./MobileNav";

export const LogoLink = () => {
  return (
    <Link href="/">
      <p className={`p-regular-24 ${jost.className}`}>LILI BEE JEWELS</p>
    </Link>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Provide a default value for isMobile

  useEffect(() => {
    setIsMobile(window.innerWidth < 620); // Fix the type error by providing a default value for the useState hook
    const handleResize = () => {
      setIsMobile(window.innerWidth < 620);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        {/* Logo */}
        <LogoLink />

        {/* Nav Items */}
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        {/* Button Group */}
        <div className="flex items-center gap-6">
          {headerButtons
            .filter((button) => !isMobile || button.mobile)
            .map((button) => {
              return (
                <div key={button.route}>
                  <Link href={button.route}>
                    <Image
                      src={button.icon}
                      alt={button.label}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              );
            })}
            
            {/* Mobile Nav Button */}
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
