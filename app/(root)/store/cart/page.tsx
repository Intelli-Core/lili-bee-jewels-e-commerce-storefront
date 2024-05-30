import React from "react";
import CartClient from "./components/CartClient";
import { Stack } from "@/components/ui/stack";

export default async function CartPage() {
  return (
    <Stack>
      <CartClient />
    </Stack>
  );
}
