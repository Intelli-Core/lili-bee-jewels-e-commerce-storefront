"use client";

import { GenericCard } from "@/components/shared/GenericCard";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";
import { useCartData, useProductOption } from "@/hooks";
import { createCart, addCartItemToCart } from "@/lib/actions/cart.actions";
import { useCartStore } from "@/lib/store/cart.store";
import { Attributes, Product } from "@/types";
import React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type ProductDetailsProps = {
  product: Product;
};

const getProductDetails = (
  attributes: Attributes,
  size: string | undefined,
) => [
  {
    title: "Overview",
    content:
      "- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Attributes",
    content: (
      <Stack gap={2}>
        <Stack
          direction="row"
          header="Material:"
          headerStyle="p-medium-14"
          gap={2}
        >
          <p className="p-regular-14">{attributes.material.name}</p>
        </Stack>
        <Stack
          direction="row"
          header="Weight:"
          headerStyle="p-medium-14"
          gap={2}
        >
          <p className="p-regular-14">{attributes.weight}g</p>
        </Stack>
        {size && (
          <Stack
            direction="row"
            header="Size:"
            headerStyle="p-medium-14"
            gap={2}
          >
            <p className="p-regular-14">{size}</p>
          </Stack>
        )}
      </Stack>
    ),
  },
];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { selectedOption, setSelectedOption } = useProductOption();
  const cartId = useCartStore((state) => state.cartId);
  const setCartId = useCartStore((state) => state.setCartId);
  const cart = useCartData(cartId as string);

  const attributes = selectedOption?.attributes
    ? selectedOption.attributes
    : product.attributes;
  const defaultMaterial =
    selectedOption?.attributes.material.name ||
    product.attributes.material.name;
  const defaultSize =
    selectedOption?.attributes.sizes[0] || product.attributes.sizes[0];

  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  useEffect(() => {
    setSelectedMaterial(
      selectedOption?.attributes.material.name ||
        product.attributes.material.name,
    );
    setSelectedSize(
      selectedOption?.attributes.sizes[0] || product.attributes.sizes[0],
    );
  }, [selectedOption]);

  const productDetailItems = getProductDetails(attributes, selectedSize);

  const handleAddToCart = async () => {
    toast("Added to bag", {
      description: (
        <Stack gap={1}>
          <p>Product name: {product.name}</p>
          <p>Material: {selectedMaterial}</p>
          <p>Size: {selectedSize}</p>
        </Stack>
      ),
    });

    const cartItems = cart?.items || [];
    const selectedProduct = {
      product: product,
      selectedSize: selectedSize,
      selectedMaterial: selectedMaterial,
    };
    const updatedCartItems = [...cartItems, selectedProduct];

    if (cartId) {
      await addCartItemToCart(cartId, selectedProduct);
    } else {
      const createCartId = (await createCart()).id;
      await addCartItemToCart(createCartId, selectedProduct);
      setCartId(createCartId);
    }
  };

  return (
    <Stack gap={8}>
      {/* Material selection*/}
      {selectedOption && (
        <React.Fragment>
          <Stack gap={2} header="Select Material:" headerStyle="stack-header">
            <Stack gap={2} className="flex-wrap justify-start">
              <Stack direction="row" gap={2}>
                {product.options.map((option) => (
                  <Button
                    variant={"outline"}
                    className={
                      selectedMaterial === option.attributes.material.name
                        ? "w-36 rounded-lg border-2 border-black"
                        : selectedMaterial === defaultMaterial
                          ? "w-36 rounded-lg"
                          : "border-gray w-36 rounded-lg border-2"
                    }
                    onClick={() => {
                      setSelectedMaterial(option.attributes.material.name);
                      setSelectedOption(option);
                    }}
                  >
                    <p className="p-regular-16">
                      {option.attributes.material.name}
                    </p>
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Stack>
          {/* Size selection */}
          <Stack
            className="flex-wrap justify-start"
            gap={2}
            header="Select Size:"
            headerStyle="stack-header"
          >
            <Stack direction="row" gap={2}>
              {selectedOption.attributes.sizes.map((size) => (
                <Button
                  variant={"outline"}
                  className={
                    selectedSize === size
                      ? "w-36 rounded-lg border-2 border-black"
                      : selectedSize === defaultSize
                        ? "w-36 rounded-lg"
                        : "border-gray w-36 rounded-lg border-2"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  <p className="p-regular-16">{size}</p>
                </Button>
              ))}
            </Stack>
          </Stack>
        </React.Fragment>
      )}

      {/* Add to bag and wishlist buttons */}
      <Stack gap={2}>
        <Button
          variant="default"
          className="h-[62px] rounded-full"
          onClick={() => handleAddToCart()}
        >
          <p className="p-regular-16">Add to bag</p>
        </Button>
        <Button variant="outline" className="h-[62px] rounded-full">
          <p className="p-regular-16">Add to wishlist</p>
        </Button>
      </Stack>

      {/* Product details */}
      <Stack gap={4}>
        {productDetailItems.map((item) => (
          <GenericCard title={item.title}>{item.content}</GenericCard>
        ))}
      </Stack>
    </Stack>
  );
};
