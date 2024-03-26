import ProductGrid from "@/app/(root)/store/products/components/ProductGrid";
import { Stack } from "@/components/ui/stack";
import {
  getProductFilters,
  getProductsByFilter,
} from "@/lib/actions/product.actions";
import { StoreProps } from "@/types";
import FilterClient from "./components/FilterClient";
import { Suspense } from "react";
import SpinnerLoader from "@/components/ui/loading-spinner";

export default async function ProductsPage({ searchParams }: StoreProps) {
  const productFilters = await getProductFilters();
  const products = await getProductsByFilter({
    category: searchParams.category || "",
    material: searchParams.material || "",
    sort: searchParams.sort || "",
    size: searchParams.size || "",
  });

  return (
    <div className="wrapper flex flex-col md:flex-row w-full h-full gap-4 md:gap-10">
      <FilterClient filters={productFilters} productLength={products.length} />
      {products.length > 0 ? (
        <Stack direction="column" gap={2.5}>
          <p className="p-regular-14 hidden md:flex">
            {products.length} results
          </p>
          <Suspense fallback={<SpinnerLoader />}>
            <ProductGrid products={products} />
          </Suspense>
        </Stack>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <p className="p-regular-16">No results found</p>
        </div>
      )}
    </div>
  );
}
