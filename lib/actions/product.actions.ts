import { FilterProps, Filters, Product } from "@/types";

async function getProducts(limit: number = 100): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const url = `${process.env.DOMAIN}/product/?limit=${limit}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductById(id: string): Promise<Product> {
  const url = `${process.env.DOMAIN}/product/${id}/`;

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductsByFilter(
  filters: FilterProps,
  limit: number = 100,
): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let url = `${process.env.DOMAIN}/product/?`;

  // Add each filter to the URL if it is provided
  if (filters.category) {
    url += `category=${filters.category}&`;
  }
  if (filters.material) {
    url += `material=${filters.material}&`;
  }
  if (filters.size) {
    url += `size=${filters.size}&`;
  }
  if (filters.sort) {
    url += `sort=${filters.sort}&`;
  }

  url += `limit=${limit}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}

async function getProductFilters(): Promise<Filters> {
  const url = `${process.env.DOMAIN}/product/filters/`;
  const res = await fetch(url);

  return res.json();
}

export { getProducts, getProductById, getProductsByFilter, getProductFilters };
