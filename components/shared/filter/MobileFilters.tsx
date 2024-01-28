"use client";

import FilterCard from "@/components/shared/filter/FilterCard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FilterCardProps } from "@/types";
import { CrossCircledIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { MobileButtonGroup } from "../mobile/MobileButtonGroup";

const MobileFilters = ({ filters, currentFilters }: FilterCardProps) => {
  const router = useRouter();

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger className="w-[110px] flex flex-row items-center justify-center gap-1 h-8 border rounded-full">
        <span className="tracking-widest p-medium-12">Filter</span>
        <MixerHorizontalIcon className="w-4 h-4" />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col h-full rounded-none border-none">
        <DrawerHeader className="flex h-2 w-full px-5 items-center justify-between mt-5">
          <p className="p-regular-18 md:p-medium-18 pb-2 tracking-wide">
            Filter
          </p>
          <div className="items-center justify-between">
            <DrawerClose>
              <button title="drawer-close">
                {/* <X /> */}
                <CrossCircledIcon className="size-[32px]"/>
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <FilterCard filters={filters} currentFilters={currentFilters} />
        <DrawerFooter className="border-t">
          <MobileButtonGroup>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => {
                router.push("/store/products/");
              }}
              name="clear-filters"
            >
              Clear
            </Button>
            <DrawerClose className="w-full">
              <Button className="w-full rounded-full" name="apply-filters">
                Apply
              </Button>
            </DrawerClose>
          </MobileButtonGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilters;
