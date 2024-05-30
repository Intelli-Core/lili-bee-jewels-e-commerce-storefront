"use server";

import { Cart, CartItem, Product } from "@/types";

interface ICartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedMaterial: string;
}

async function createCart(): Promise<Cart> {
  const cartUrl = `${process.env.DOMAIN}/cart/`;
  // If no cart exists, create a new one
  const cartResponse = await fetch(cartUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
    cache: "no-cache",
  });

  if (!cartResponse.ok) {
    throw new Error("Failed to create cart");
  }

  const cartData = await cartResponse.json();
  return cartData;
}

async function addCartItemToCart(
  cartId: string,
  selectedProduct: ICartItem,
): Promise<CartItem> {
  const cartItemUrl = `${process.env.DOMAIN}/cart/item/`;
  // Create a cart item with the provided cart's ID
  const cartItemResponse = await fetch(cartItemUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cartId,
      product: selectedProduct.product.id,
      selectedSize: selectedProduct.selectedSize,
      selectedMaterial: selectedProduct.selectedMaterial,
    }),
    cache: "no-cache",
  });

  if (!cartItemResponse.ok) {
    throw new Error("Failed to create cart item");
  }

  const cartItemData = await cartItemResponse.json();
  return cartItemData;
}

async function getCart(cartId: string): Promise<Cart> {
  const url = `${process.env.DOMAIN}/cart/${cartId}/`;

  const response = await fetch(url, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = response.json();

  return data;
}

async function updateCartItemQuantity(cartItemId: string, quantity: number) {
  const url = `${process.env.DOMAIN}/cart/item/${cartItemId}/`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      quantity: quantity,
    }),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
}

async function deleteCartItem(cartItemId: string) {
  const url = `${process.env.DOMAIN}/cart/item/${cartItemId}/`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to delete cart item");
  }
}

async function clearCart(cartId: string) {
  const url = `${process.env.DOMAIN}/cart/${cartId}/`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to delete cart item");
  }
}

export {
  createCart,
  addCartItemToCart,
  getCart,
  updateCartItemQuantity,
  deleteCartItem,
  clearCart,
};
