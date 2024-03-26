import { useContext } from "react";
import { ProductOptionContext } from "@/contexts";

export function useProductOption() {
  const context = useContext(ProductOptionContext);

  if (!context) {
    throw new Error(
      "useProductOption must be used within a ProductOptionProvider"
    );
  }

  return context;
}
