import {
  getProductById,
  getProducts,
  getProductsByFilter,
} from "@/lib/actions/product.actions";
import ProductClient from "./components/ProductClient";
import React from "react";
import ProductOptionProvider from "@/contexts";
import ProductRecommendations from "./components/ProductRecommendations";

async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  let recommendedProducts = await getProductsByFilter({ sort: "newest" }, 8);

  // Filter out the current product from the recommended products
  recommendedProducts = recommendedProducts.filter(
    (recommendedProduct) => recommendedProduct.id !== product.id,
  );

  console.log("recommended products:", product.category.name);

  return (
    <div>
      <ProductOptionProvider product={product}>
        <ProductClient product={product} />
      </ProductOptionProvider>
      <ProductRecommendations products={recommendedProducts} />
    </div>
  );
}

export default ProductPage;
