import { Card } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/store/products/${product.id}`}>
      <div className="flex flex-col gap-2.5 md:gap-2.5">
        <Card className="w-full max-w-sm min-w-[50%] md:min-w-[20%] rounded-[8px] bg-white">
          <Image
            src="/assets/images/placeholders/image-placeholder.svg"
            alt="product-card"
            width={350}
            height={350}
            className="object-contain object-center"
            priority
          />
        </Card>
        <div className="flex flex-col gap-1">
          <p className="p-medium-12 truncate">{product.name}</p>
          <p className="p-regular-14">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
