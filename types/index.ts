// Database models related

export type Product = {
  id: string;
  attributes: Attributes;
  options: Option[];
  price: number;
  created_at: string;
  updated_at: string;
  name: string;
  description: null;
  caption: null;
  thumbnail: string;
  category: Category;
  media: Media[];
};

export type Option = {
  id: string;
  attributes: Attributes;
  price: number;
  created_at: string;
  updated_at: string;
  thumbnail: string;
  media: Media[];
};

export type Attributes = {
  id: string;
  weight: number;
  created_at: string;
  updated_at: string;
  material: Material;
  sizes: string[];
};

export type Media = {
  image: string;
};

export type Category = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: null;
};

export type Material = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: null;
};

export type CartItem = {
  id: string;
  created_at: string;
  updated_at: string;
  product: Product;
  quantity: number;
  subtotal: number;
  selectedSize: string;
  selectedMaterial: string;
}

export type Cart = {
  id: string;
  created_at: string;
  updated_at: string;
  items: CartItem[];
  quantity: number;
  subtotal: number;
}

// Util related

export type Filters = {
  [key: string]: any;
  categories: FilterCategories[];
  materials: FilterMaterials[];
  sizes: FilterSizes;
};

type FilterCategories = {
  id: string;
  category_name: string;
  count: number;
};

type FilterMaterials = {
  id: string;
  material_name: string;
  count: number;
};

type FilterSizes = {
  [key: string]: number;
};

export type FilterProps = {
  category?: string;
  material?: string;
  size?: string;
  sort?: string;
};

export type StoreProps = {
  searchParams: FilterProps;
};

export type FilterCardProps = {
  filters: Filters;
  currentFilters: CurrentFilters;
};

export type SelectOption = {
  value: string;
  displayValue: string;
};

export type FilterOption = {
  id?: string;
  value: string;
  displayValue?: string;
  count?: number;
};

export type CurrentFilters = {
  [key: string]: string;
  category: string;
  material: string;
  sort: string;
  size: string;
};

export type CustomFilterType = {
  title: string;
  defaultValue?: string;
  options: FilterOption[];
  queryKey: string;
  filterType: "radio" | "select" | "button";
};

export type ButtonVariant =
  | "ghost"
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary";
