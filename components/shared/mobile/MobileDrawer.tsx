import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../../ui/button";
import Image from "next/image";
import FilterCard from "@/components/shared/filter/FilterCard";
import { ProductFilters } from "@/types";
import { MobileButtonGroup } from "./MobileButtonGroup";
import { X } from "lucide-react";

type MobileDrawerProps = {
  productFilters: ProductFilters;
  className?: string;
};

const MobileDrawer = ({ productFilters, className }: MobileDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger className="w-full border rounded-md">
        <div className="flex justify-center items-center gap-1">
          <Image
            src={"/assets/icons/filter.svg"}
            width={24}
            height={24}
            alt={"filter"}
          />
          <p className="tracking-widest p-medium-12">FILTERS</p>
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col pb-10 h-full rounded-none border-none">
        <DrawerHeader className="flex h-2 w-full px-5 items-center justify-between mt-5">
          <p className="p-regular-20 md:p-medium-18 pb-2 tracking-wide">
            Filters
          </p>
          <div className="items-center justify-center pr-1.5">
            <DrawerClose>
              <X />
            </DrawerClose>
          </div>
        </DrawerHeader>
        <FilterCard
          filters={[productFilters.filters]}
          products={productFilters.products}
        />
        <DrawerFooter className="border-t mb-5">
          <MobileButtonGroup>
            <Button variant="outline" className="w-full">
              Clear
            </Button>
            <DrawerClose className="w-full">
              <Button className="w-full">Apply</Button>
            </DrawerClose>
          </MobileButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
