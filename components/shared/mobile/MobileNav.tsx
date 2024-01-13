import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import * as Dialog from "@radix-ui/react-dialog";

import Icon from "../Icon";
import NavItems from "../NavItems";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
          <NavItems
            fontStyle="p-medium-24"
            closeSheet={() => setIsOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
