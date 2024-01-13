import { Filters, FilterItem } from "@/types";


export default function mapFiltersToItems(
  filters: Filters[],
  key: string,
  getFilterArray: (filter: Filters, key: keyof Filters) => FilterItem[],
  getDisplayValue: (item: FilterItem) => string,
  filterCounts: Record<string, number>
) {
  return filters
    .flatMap((filter) => getFilterArray(filter, key as keyof Filters))
    .filter(Boolean)
    .map((item) => {
      const uniqueId = `${key}-${item.id}`;
      const displayValue = getDisplayValue(item);
      const filterType = key.slice(0, -1);
      const countKey = `${filterType}:${displayValue}`;
      const itemCount = filterCounts[countKey] || 0; // count for each filter

      return {
        uniqueId,
        displayValue,
        itemCount,
      };
    });
}
