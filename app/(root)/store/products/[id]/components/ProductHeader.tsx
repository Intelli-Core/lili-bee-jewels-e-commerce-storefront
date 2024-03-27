"use client";

import { Stack } from "@/components/ui/stack";
import { useProductOption } from "@/hooks";
import { Product } from "@/types";
import React from "react";
import { useMediaQuery } from "react-responsive";

type ProductHeaderProps = {
  product: Product;
};

const ProductHeader = ({ product }: ProductHeaderProps) => {
  const { selectedOption } = useProductOption();

  return (
    <React.Fragment>
      {/* Header */}
      <Stack gap={5}>
        <Stack gap={1}>
          <p className="p-bold-24">{product.name}</p>
          <p className="p-medium-16">{product.category.name}</p>
        </Stack>
        <Stack>
          <p className="p-medium-16">
            ${selectedOption ? selectedOption.price : product.price}
          </p>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default ProductHeader;
