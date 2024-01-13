import { Product } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
            category={{
              id: product.category.id,
              value: product.category.value,
            }}
            material={{
              id: product.material.id,
              value: product.material.value,
            }}
            color={{
              id: product.color.id,
              value: product.color.value,
              hex: product.color.hex,
            }}
            priceRange={{
              id: product.priceRange.id,
              value: product.priceRange.value,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
