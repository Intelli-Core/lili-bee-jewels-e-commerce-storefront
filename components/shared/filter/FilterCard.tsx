"use client";

import { Separator } from "@/components/ui/separator";
import { Stack } from "@/components/ui/stack";
import { sortOptions } from "@/constants";
import { capitalizeEachWord, deleteSearchParams } from "@/lib/utils";
import { FilterCardProps } from "@/types";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CustomFilter from "./CustomFilter";
import Link from "next/link";

const addToAppliedFilters = (filters: { type: string; value: string }[]) => {
  const appliedFilters: { type: string; value: string }[] = [];
  filters.forEach((filter) => {
    // Check if the filter type is not size
    if (filter.type !== "size") {
      // Use capitalizeEachWord function
      appliedFilters.push({
        type: filter.type,
        value: capitalizeEachWord(filter.value),
      });
    } else {
      // Do not use capitalizeEachWord function
      appliedFilters.push({
        type: filter.type,
        value: filter.value,
      });
    }
  });

  return appliedFilters;
};

const FilterCard = ({ filters, currentFilters }: FilterCardProps) => {
  const router = useRouter();

  const materialOptions = filters.materials
    .filter(({ count }) => count > 0)
    .map(({ id, material_name, count }) => ({
      id,
      value: material_name.toLowerCase(),
      displayValue: material_name,
      count,
    }));

  const categoryOptions = filters.categories.map(({ id, category_name }) => ({
    id,
    value: category_name.toLowerCase(),
    displayValue: category_name,
  }));

  const sizeOptions = Object.entries(filters.sizes).map(([id, value]) => ({
    id,
    value: id,
    displayValue: id,
    originalValue: value,
  }));

  const [appliedFilters, setAppliedFilters] = useState<
    { type: string; value: string }[]
  >([]);

  useEffect(() => {
    const filtersToApply = [
      {
        type: "material",
        value: currentFilters.material,
      },
      {
        type: "category",
        value: currentFilters.category,
      },
      {
        type: "size",
        value: currentFilters.size,
      },
    ];
    setAppliedFilters(addToAppliedFilters(filtersToApply));
  }, [currentFilters.material, currentFilters.category, currentFilters.size]);

  const handleFilterRemoval = (filterType: string) => {
    const newFilters = appliedFilters.filter(
      (filter) => filter.type !== filterType
    );
    setAppliedFilters(newFilters);
    const newPathName = deleteSearchParams(filterType);
    router.push(newPathName);
  };

  return (
    <div className="flex flex-col w-full gap-8 h-5/6 px-5 mt-1 mb-3 md:h-full md:p-0 overflow-y-auto hide-scrollbar">
      {/* START APPLIED FILTERS */}
      {appliedFilters.some((filter) => filter.value.trim() !== "") && (
        <div className="flex flex-col gap-2">
          <Stack direction="column" gap={4}>
            <div className="h-stack justify-between items-center">
              <p className="p-medium-16 md:p-medium-18 tracking-wide">
                Applied Filters
              </p>
              <Link href={"/store/products/"}>
                <p className="p-regular-14">Clear all</p>
              </Link>
            </div>
            <div className="h-stack flex-wrap gap-2">
              {appliedFilters.map(
                (filter) =>
                  // Add a condition to check if the filter value is not empty
                  filter.value.trim() !== "" && (
                    <div className="h-stack gap-1 items-center justify-center border px-5 w-auto h-8 p-medium-12 rounded-full">
                      <span>{filter.value}</span>
                      <button
                        title="Remove Filter"
                        onClick={() => handleFilterRemoval(filter.type)}
                      >
                        <Cross2Icon className="h-4 w-4 cursor-pointer" />
                      </button>
                    </div>
                  )
              )}
            </div>
          </Stack>
        </div>
      )}
      {/* END OF APPLIED FILTERS */}

      <CustomFilter
        title="Sort By"
        options={sortOptions}
        defaultValue={currentFilters.sort}
        queryKey="sort"
        filterType={"radio"}
      />
      <Separator />
      <div className="hidden md:block">
        <CustomFilter
          title="Category"
          options={categoryOptions}
          queryKey="category"
          defaultValue={currentFilters.category || "all"}
          filterType="radio"
        />
        <Separator className="mt-8" />
      </div>
      <CustomFilter
        title="Material"
        options={materialOptions}
        queryKey="material"
        defaultValue={currentFilters.material || "none"}
        filterType={"radio"}
      />
      <Separator />
      <CustomFilter
        title="Size"
        options={sizeOptions}
        queryKey="size"
        filterType="button"
        defaultValue={currentFilters.size || "none"}
      />
    </div>
  );
};

export default FilterCard;
