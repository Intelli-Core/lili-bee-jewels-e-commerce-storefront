import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { Suspense } from "react";

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
