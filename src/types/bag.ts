import type { Product } from "./product";

export interface Bag extends Pick<Product, "id"> {
  quantity: number;
  size: Product["sizes"][number];
  color: Product["colors"][number];
}
