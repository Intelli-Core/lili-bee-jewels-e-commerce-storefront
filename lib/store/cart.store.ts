import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = {
  cartId: string | null;
  setCartId: (id: string | null) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartId: null,
      setCartId: (id: string | null) => set({ cartId: id }),
    }),
    { name: "cart-store", skipHydration: true },
  ),
);
