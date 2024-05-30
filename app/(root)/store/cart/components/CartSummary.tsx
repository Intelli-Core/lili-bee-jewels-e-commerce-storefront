import { GenericCard } from "@/components/shared/GenericCard";
import { Button } from "@/components/ui/button";
import { inter } from "@/lib/fonts";

type CartSummaryProps = {
  subtotal: number;
};

export const CartSummary = ({ subtotal }: CartSummaryProps) => {
  return (
    <div className={`w-full md:w-6/12 md:pt-[60px] ${inter.className}`}>
      <GenericCard
        title="Order Summary"
        footer={<Button className="w-full rounded-full">Checkout now</Button>}
      >
        <p className="p-regular-16 flex flex-row justify-between text-gray-500">
          Subtotal: <span className="p-medium-18 text-black">${subtotal}</span>
        </p>
      </GenericCard>
    </div>
  );
};
