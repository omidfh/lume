import ProductCard from "../ProductCard";
import { similarProductData } from "../../tools/similarProductData";
import type { Product } from "../../types/product";

export interface SimilarProductsItems {
  productDetails: Product;
}

export default function SimilarProducts({
  productDetails,
}: SimilarProductsItems) {
  return (
    <div className="flex flex-col w-full  gap-6 text-main">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2 w-2/3">
          <p className="font-body font-extralight tracking-[0.2rem] md:tracking-[0.75rem] text-[.7rem] md:text-sm ">
            CURATED PAIRINGS
          </p>
          <p className="font-body md:font-headline tracking-[.3rem] text-md md:text-3xl">
            YOU MAY ALSO LIKE
          </p>
        </div>
        <a
          href="/collection"
          className="flex flex-row gap-2 md:gap-3 font-body items-center"
        >
          <p className="hidden underline md:block text-xs md:text-[1rem] font-body font-extralight tracking-widest md:tracking-[.3rem] ">
            VIEW COMPLETE COLLECTION
          </p>
          <p className="md:hidden underline text-xs md:text-[1rem] font-body font-extralight tracking-widest ">
            VIEW ALL
          </p>
        </a>
      </div>
      <div className=" w-full flex flex-row flex-wrap justify-between md:grid md:grid-cols-4 gap-4">
        {similarProductData(productDetails)
          .slice(0, 4)
          .map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
}
