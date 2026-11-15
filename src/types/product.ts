export interface ProductImage {
  src: string;
  alt: string;
}

export interface MAterialCare {
  description: string;
  origin: string;
  finish: string;
  care: string;
  iron: string;
}

export type Gender = "men" | "women";

export type Currency = "USD" | "EUR" | "GBP";

export type Size = "XS" | "S" | "M" | "L" | "XL";

export type Prices = string[];

export interface Product {
  id: string;
  slug: string;
  isFavorite: boolean;
  name: string;
  category: string;
  gender: Gender;
  price: number;
  currency: Currency;
  colors: string[];
  colorway: string;
  colorCode: string;
  sizes: Size[];
  sizeRange: string;
  isNew: boolean;
  tag: string | null;
  description: string;
  details: string[];
  materialCare: MAterialCare;
  image: string;
  allImages: ProductImage[];
  alt: string;
}
