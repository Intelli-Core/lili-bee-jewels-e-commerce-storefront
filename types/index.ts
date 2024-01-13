export type Product = {
  id: number;
  name: string;
  price: number;
  priceRange: PriceRange;
  category: Category;
  material: Material;
  color: Color;
  sizes?: Size[];
  image?: string;
  description?: string;
};

export type Category = {
  id: number;
  value: string;
};

export type Material = {
  id: number;
  value: string;
};

export type Color = {
  id: number;
  value: string;
  hex?: string;
};

export type Size = {
  id: number;
  value: string;
};

export type PriceRange = {
  id: number;
  value: string;
};

export type Filters = {
  categories: Category[];
  materials: Material[];
  colors: Color[];
  sizes: Size[];
  priceRanges: PriceRange[];
};

export type SelectOptions = {
  value: string;
  label: string;
};

export type ProductFilters = {
  products: Product[];
  filters: Filters;
};

export type FilterItem = { id: number; name?: string; value?: string };

export type FilterProps = {
  filters: Filters[];
  filterKey: string;
  value: string;
  getFilterArray: (filter: Filters, key: keyof Filters) => FilterItem[];
  getDisplayValue: (item: FilterItem) => string;
  filterCounts: Record<string, number>;
};
