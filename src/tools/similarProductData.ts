import { mockData } from "../fakeData/data";

export function similarProductData(productDetails) {
  const { id, category, gender, colorway } = productDetails;
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
