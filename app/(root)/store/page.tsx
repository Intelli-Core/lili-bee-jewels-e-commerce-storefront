import FilterCard from "@/components/shared/filter/FilterCard";
import React from "react";
import * as filterData from "@/data/filters.json";
import * as productData from "@/data/mockProducts.json";
import { Filters, Product } from "@/types";
import ProductGrid from "@/components/shared/ProductGrid";
import MobileDrawer from "@/components/shared/mobile/MobileDrawer";
import MobileSelect from "@/components/shared/mobile/MobileSelect";
import { sortOptions } from "@/constants";
import { MobileButtonGroup } from "@/components/shared/mobile/MobileButtonGroup";

const products = productData.data as Product[];
const filters = filterData.data as unknown as Filters;
const productFilters = {
  products: productData.data as Product[],
  filters: filterData.data as unknown as Filters,
};

const Store = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row w-full h-full gap-5">
      {/* Filters */}
      <MobileButtonGroup>
        <MobileSelect options={sortOptions} />
        <MobileDrawer productFilters={productFilters} />
      </MobileButtonGroup>
      <div className="hidden md:flex w-[300px] h-[900px] sticky top-0">
        <FilterCard filters={[filters]} products={products} />
      </div>
      {/* Product Grid */}
      <ProductGrid products={products} />
    </div>
  );
};

export default Store;
