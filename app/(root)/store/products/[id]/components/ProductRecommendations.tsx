import { Stack } from "@/components/ui/stack";
import ProductCarousel from "../../components/ProductCarousel";
import { Product } from "@/types";

type ProductRecommendationsProps = {
  products: Product[];
};

const ProductRecommendations = ({ products }: ProductRecommendationsProps) => {
  return (
    <Stack className="wrapper">
      <h1 className="p-regular-24">You Might Also Like</h1>
      <ProductCarousel products={products} />
    </Stack>
  );
};

export default ProductRecommendations;
