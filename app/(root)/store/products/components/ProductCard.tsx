import { Card } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "../../../../../components/ui/aspect-ratio";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const productThumbnail = product.thumbnail
    ? product.thumbnail
    : "/assets/images/placeholders/image-placeholder.svg";
  const productImage =
    product.media && product.media.length > 0
      ? product.media[0].image
      : productThumbnail;

  return (
    <Link href={`/store/products/${product.id}`}>
      <div className="flex flex-col gap-2.5 md:gap-2.5">
        <Card className="w-full min-w-[50%] max-w-sm bg-white md:min-w-[20%]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={productImage}
              alt={product.name}
              className="rounded-md"
              fill
              priority
            />
          </AspectRatio>
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
