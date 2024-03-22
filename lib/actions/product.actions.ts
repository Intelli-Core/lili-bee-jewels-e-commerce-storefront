import { FilterProps, Filters, Product } from "@/types";

async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const url = `${process.env.DOMAIN}/product/`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductById(id: string): Promise<Product> {
  const url = `${process.env.DOMAIN}/product/${id}/`;

  const response = await fetch(url, { next: { revalidate: 5 } });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductsByFilter(filters: FilterProps): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { category, material, size, sort } = filters;
  const url = `${process.env.DOMAIN}/product/?category=${category}&material=${material}&size=${size}&sort=${sort}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductFilters(): Promise<Filters> {
  const url = `${process.env.DOMAIN}/product/filters/`;
  const res = await fetch(url, { cache: "no-store" });

  return res.json();
}

export { getProducts, getProductById, getProductsByFilter, getProductFilters };
