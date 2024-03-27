"use client";

import { Stack } from "@/components/ui/stack";
import { Product } from "@/types";
import { ProductDetails } from "./ProductDetails";
import ProductHeader from "./ProductHeader";
import ProductMedia from "./ProductMedia";

type ProductClientProps = {
  product: Product;
};

const ProductClient = ({ product }: ProductClientProps) => {
  return (
    <Stack gap={5} className="md:wrapper lg:mt-8 lg:flex-row justify-center">
      <div className="wrapper md:p-0 pt-5 lg:hidden">
        <ProductHeader product={product} />
      </div>

      {/* Images */}
      <ProductMedia thumbnail={product.thumbnail} mediaList={product.media} />

      {/* Product side bar */}
      <Stack className="p-5 md:p-0 lg:px-10 lg:w-2/6" gap={5}>
        <div className="hidden lg:block">
          <ProductHeader product={product} />
        </div>
        <ProductDetails product={product} />
      </Stack>
    </Stack>
  );
};

export default ProductClient;
