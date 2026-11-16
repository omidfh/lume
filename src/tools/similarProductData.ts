import { mockData } from "../fakeData/data";
import type { Product } from "../types/product";

export function similarProductData(productDetails: Product) {
  const { id, category, gender } = productDetails;
  const productList = [];

  productList.push(
    ...mockData.filter(
      (item) => item.gender === gender && item.category === category,
    ),
  );
  productList.push(...mockData.filter((item) => item.gender === gender));
  productList.push(...mockData.filter((item) => item.category === category));

  return [...new Set(productList.filter((item) => item.id !== id))];
}
