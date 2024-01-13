"use client";

import { jost } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import { headerButtons } from "@/constants";
import Image from "next/image";
import Icon from "./Icon";
import MobileNav from "./mobile/MobileNav";

export const LogoLink = () => {
  return (
    <Link href="/">
      <p className={`p-regular-24 ${jost.className}`}>LILI BEE JEWELS</p>
    </Link>
  );
};

const Header = () => {
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
          {headerButtons.map((button) => {
            return (
              <div
                key={button.route}
                className={`${
                  button.mobile ? "block md:block" : "hidden md:block"
                }`}
              >
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
