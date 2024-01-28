"use client";

import FilterCard from "@/components/shared/filter/FilterCard";
import MobileFilters from "@/components/shared/filter/MobileFilters";
import { CurrentFilters, Filters } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useState } from "react";

type ClientProps = {
  filters: Filters;
  productLength: number;
};

export default function FilterClient({ filters, productLength }: ClientProps) {
  const searchParams = useSearchParams();

  const currentFilters: CurrentFilters = {
    category: searchParams.get("category") || "",
    material: searchParams.get("material") || "",
    sort: searchParams.get("sort") || "featured",
    size: searchParams.get("size") || "",
  };
  const [selectedLink, setSelectedLink] = useState<string | null>(
    currentFilters.category
  );
  const [selectedCategory, setSelectedCategory] = useState(
    currentFilters.category
  );

  const handleCategorySelect = (category_name: string) => {
    setSelectedLink(category_name);
    setSelectedCategory(category_name);
  };

  return (
    <React.Fragment>
      {/* CATEGORY BAR */}
      <div className="md:hidden flex flex-row items-center gap-5 overflow-x-auto hide-scrollbar mb-4">
        <div
          className={`${
            selectedLink === "All"
              ? "border-b-2 border-gray-700 text-gray-400 p-2"
              : "p-2 border-transparent"
          }`}
        >
          <Link
            className="flex-shrink-0 whitespace-nowrap p-medium-16"
            href={"/store/products/"}
            onClick={() => handleCategorySelect("All")}
          >
            All
          </Link>
        </div>
        {filters.categories.map(({ category_name }) => (
          <div
            className={`${
              selectedLink === category_name
                ? "border-b-2 border-gray-700 text-gray-400 p-2"
                : "p-2 border-transparent"
            }`}
          >
            <Link
              className="flex-shrink-0 whitespace-nowrap p-medium-16"
              href={`?${new URLSearchParams({
                category: category_name.toLowerCase(),
              })}`} // Use category_name directly
              onClick={() => handleCategorySelect(category_name)}
            >
              {category_name}
            </Link>
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-between items-center">
        <p className="w-full p-regular-16">
          {productLength > 0 ? productLength + " results" : ""}
        </p>
        <MobileFilters filters={filters} currentFilters={currentFilters} />
      </div>
      <div className="hidden md:flex w-[450px] h-[100vh] overflow-y-auto hide-scrollbar sticky top-0">
        <FilterCard filters={filters} currentFilters={currentFilters} />
      </div>
    </React.Fragment>
  );
}
