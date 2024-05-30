"use client";

import Image from "next/image";
import { Stack } from "@/components/ui/stack";
import { CartItem } from "@/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import {
  deleteCartItem,
  updateCartItemQuantity,
} from "@/lib/actions/cart.actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CartItemCardProps = {
  cartItem: CartItem;
};

const CartItemCard = ({ cartItem }: CartItemCardProps) => {
  const router = useRouter();

  const product = cartItem.product;
  const productThumbnail = product.thumbnail
    ? product.thumbnail
    : "/assets/images/placeholders/image-placeholder.svg";

  const handleDeleteItem = async (cartItemId: string) => {
    await deleteCartItem(cartItemId);
    window.location.reload();
  };

  const handleAddToWishlist = () => {
    // TODO: create add to wishlist logic (full implementation in the future)
  };

  // Quantity related
  const [isDisabledSub, setIsDisabledSub] = useState(false);

  useEffect(() => {
    setIsDisabledSub(cartItem.quantity === 1);
  }, [cartItem.quantity]);

  const handleUpdateQuantity = async (operation: string) => {
    let currentQuantity = cartItem.quantity;

    if (operation === "add") {
      currentQuantity += 1;
    }

    if (operation === "sub" && currentQuantity > 1) {
      currentQuantity -= 1;
    }
    await updateCartItemQuantity(cartItem.id, currentQuantity);
    window.location.reload();
  };

  return (
    <Stack
      direction="row"
      gap={3}
      className="items-center rounded-sm border p-3"
    >
      <div className="relative w-[250px] cursor-pointer rounded-sm md:w-[210px]">
        <AspectRatio ratio={1 / 1}>
          <Image
            alt={product.name}
            src={productThumbnail}
            className="h-auto max-w-full rounded-sm"
            fill
          />
        </AspectRatio>
      </div>
      <Stack gap={6}>
        <div className="flex flex-col gap-1">
          <p className="p-medium-14 md:p-medium-16 md:hidden">
            ${cartItem.subtotal}
          </p>
          <p className="p-medium-16">{product.name}</p>
          <p className="p-regular-16 text-gray-500">{product.category.name}</p>
          <div className="flex flex-row gap-3">
            <p className="p-regular-14 md:p-regular-16 flex text-gray-500">
              Material:{" "}
              <span className="ml-1 text-black">
                {cartItem.selectedMaterial}
              </span>
            </p>
            <p className="p-regular-14 md:p-regular-16 flex text-gray-500">
              Size:{" "}
              <span className="ml-1 text-black">{cartItem.selectedSize}</span>
            </p>
          </div>
        </div>
        <Stack direction="row" className="justify-between">
          <div className="flex flex-row gap-3">
            <Heart className="cursor-pointer" />
            <Trash2
              className="cursor-pointer"
              onClick={() => handleDeleteItem(cartItem.id)}
            />
          </div>
        </Stack>
      </Stack>
      <div className="hidden h-full items-end justify-between px-2 pb-2 md:flex md:flex-col">
        <p className="p-medium-16">${cartItem.subtotal}</p>
        <div className="flex flex-row items-center gap-5 rounded-lg border px-4 py-1">
          {isDisabledSub ? (
            <Minus
              className={`size-4 cursor-not-allowed text-gray-700 disabled`}
            />
          ) : (
            <Minus
              className={`size-4 cursor-pointer text-gray-700`}
              onClick={() => handleUpdateQuantity("sub")}
            />
          )}
          {cartItem.quantity}
          <Plus
            className="size-4 cursor-pointer text-gray-700"
            onClick={() => handleUpdateQuantity("add")}
          />
        </div>
      </div>
    </Stack>
  );
};

export default CartItemCard;
