import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Icon from "./Icon";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Icon
            path="/assets/icons/menu.svg"
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="flex flex-col gap-6 bg-white md:hidden max-h-[100vh] p-10 rounded-b-xl"
        >
          <NavItems fontStyle="p-medium-24" />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
