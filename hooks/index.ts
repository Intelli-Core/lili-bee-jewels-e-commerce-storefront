"use client";

import { useContext, useEffect, useState } from "react";
import { ProductOptionContext } from "@/contexts";
import { getCart } from "@/lib/actions/cart.actions";
import { Cart } from "@/types";
import { useCartStore } from "@/lib/store/cart.store";

export function useProductOption() {
  const context = useContext(ProductOptionContext);

  if (!context) {
    throw new Error(
      "useProductOption must be used within a ProductOptionProvider",
    );
  }

  return context;
}

export function useCartData(cartId: string) {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    if (cartId) {
      const fetchCartData = async () => {
        try {
          const cartData = await getCart(cartId);
          setCart(cartData);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };
      fetchCartData();
    } else {
      setCart(null);
    }
    useCartStore.persist.rehydrate();
  }, [cartId]);

  return cart;
}
