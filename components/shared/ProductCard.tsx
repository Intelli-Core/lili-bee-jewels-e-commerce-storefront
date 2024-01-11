import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/types";

const ProductCard = ({ name, description, price, image }: Product) => {
  return (
    <div className="flex flex-col gap-2.5 md:gap-2.5">
      <Card className="w-full max-w-sm min-w-[50%] md:min-w-[20%] rounded-[8px] bg-white">
        <Image
          src="/assets/images/image-placeholder.svg"
          alt="product-card"
          width={350}
          height={350}
          className="object-contain object-center"
        />
      </Card>
      <div className="flex flex-col gap-1">
        <p className="p-medium-12">{name}</p>
        <p className="p-regular-14">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
