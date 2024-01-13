import { Product, Filters } from "@/types";

export function getFilters(
  products: Product[],
  filters: Filters[]
): {
  filterCounts: Record<string, number>;
  dynamicFilterKeys: { key: string; value: string }[];
} {
  const filterCounts: Record<string, number> = {};
  const filterKeys: { key: keyof Filters; value: string }[] = [];

  // Generate filter keys dynamically
  const dynamicFilterKeys = Object.keys(filters[0]).map((key) => ({
    key,
    value: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  // Helper function to increment count
  const incrementCount = (filterType: string, filterValue: string) => {
    const key = `${filterType}:${filterValue}`;
    filterCounts[key] = (filterCounts[key] || 0) + 1;
  };

  // Dynamically count products for each filter
  products.forEach((product) => {
    Object.entries(product).forEach(([key, value]) => {
      if (value && typeof value === "object") {
        if ("value" in value) {
          incrementCount(key, value.value);
        }
        if (Array.isArray(value)) {
          value.forEach((item) => {
            if (item && "value" in item) {
              incrementCount(key, item.id.toString());
            }
          });
        }
      }
    });
  });

  return { filterCounts, dynamicFilterKeys };
}
