"use client";

import React from "react";

import { FilterItem, Filters, Product, ProductFilters } from "@/types";
import { getFilters } from "@/utils/getFilters";
import RadioFilter from "./RadioFilter";

type FiltersProps = {
  filters: Filters[];
  products: Product[];
};

const getDisplayValue = (item: FilterItem): string => {
  const displayValue =
    "name" in item ? item.name : "value" in item ? item.value : "N/A";
  return displayValue || ""; // return "N/A" if displayValue is undefined
};

const getFilterArray = (filters: Filters, key: keyof Filters): FilterItem[] => {
  const filterArray = filters[key]
    ? (filters[key] as unknown as FilterItem[])
    : [];

  return filterArray;
};

const Filters = ({ filters, products }: FiltersProps) => {
  const {
    filterCounts,
    dynamicFilterKeys: filterKeys,
  }: {
    filterCounts: Record<string, number>;
    dynamicFilterKeys: { key: string; value: string }[];
  } = getFilters(products, filters);

  return (
    <div className="flex flex-col w-full h-5/6 px-5 mt-1 mb-3 md:h-full md:p-0">
      <div className="overflow-y-auto flex-grow hide-scrollbar">
        {/* <p className="p-regular-20 md:p-medium-18 pb-2 tracking-wide">Filters</p> */}
        {filterKeys.map(({ key, value }, index) => (
          <div className={index === 0 ? "" : "mt-10"} key={key}>
            <p className="p-medium-20 md:p-medium-18 mb-4">{value}</p>
            <RadioFilter
              filterKey={key}
              value={value}
              getFilterArray={getFilterArray}
              getDisplayValue={getDisplayValue}
              filterCounts={filterCounts}
              filters={filters}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
