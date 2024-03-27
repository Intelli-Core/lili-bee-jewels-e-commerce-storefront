"use client";

import { Option, Product } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type OptionType = {
  selectedOption: Option | null;
  setSelectedOption: Dispatch<SetStateAction<Option | null>>;
};

export const ProductOptionContext = createContext<OptionType | undefined>(
  undefined
);

export default function ProductOptionProvider({
  children,
  product,
}: {
  children: React.ReactNode;
  product: Product;
}) {
  const [selectedOption, setSelectedOption] = useState(
    product.options.length > 0 ? product.options[0] : null
  );

  return (
    <ProductOptionContext.Provider
      value={{ selectedOption, setSelectedOption }}
    >
      {children}
    </ProductOptionContext.Provider>
  );
}
