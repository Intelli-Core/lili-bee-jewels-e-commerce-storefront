"use client";

import CartItemCard from "./CartItemCard";
import { useCartStore } from "@/lib/store/cart.store";
import { useCartData } from "@/hooks";
import { Stack } from "@/components/ui/stack";
import { CartSummary } from "./CartSummary";
import React from "react";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/lib/actions/cart.actions";
import Link from "next/link";

const CartClient = () => {
  const cartId = useCartStore((state) => state.cartId);
  const setCartId = useCartStore((state) => state.setCartId);
  const cart = useCartData(cartId as string);

  const handleCartClear = async () => {
    await clearCart(cartId as string);
    setCartId(null);
    window.location.reload();
  };

  return (
    <div className="wrapper flex flex-col gap-4 md:flex-row w-full items-start">
      {cart && cart.items && cart.items.length > 0 ? (
        <React.Fragment>
          <Stack gap={5}>
            <Stack
              direction="row"
              gap={2}
              className="items-center justify-between"
            >
              <h2 className="h4-medium pt-0">My Cart</h2>
              <Button
                className="rounded-full"
                onClick={() => handleCartClear()}
              >
                Clear cart
              </Button>
            </Stack>
            <Stack
              gap={4}
              className="overflow-y-scroll hide-scrollbar h-full md:h-[530px]"
            >
              {cart.items.map((item, key) => (
                <CartItemCard cartItem={item} key={key} />
              ))}
            </Stack>
          </Stack>
          <CartSummary subtotal={cart.subtotal} />
        </React.Fragment>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Stack gap={8}>
            <h3 className="h3-bold">Bag</h3>
            <div className="pt-10 flex flex-col gap-5">
              <p className="p-regular-18">Your current bag is empty.</p>
              <Button className="w-full" asChild>
                <Link href="/store/products">Continue shopping</Link>
              </Button>
            </div>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default CartClient;
