import { ImHeart } from "react-icons/im";
import { SlHeart } from "react-icons/sl";
import type { Product } from "../types/product";

interface ProductCardItems {
  data: Product;
  fullWidth?: boolean;
}

export default function ProductCard({
  data,
  fullWidth = false,
}: ProductCardItems) {
  return (
    <a
      href={`/collection/${data.id}`}
      className={`flex flex-col ${fullWidth ? "w-full" : "w-[47%] md:w-full"} max-w-[800px] cursor-pointer hover:opacity-80 gap-2`}
    >
      <div className="relative w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.alt}
          className="w-full h-auto aspect-[3/4] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {data.tag && (
          <p className="absolute md:top-2 left-2 bottom-2 text-[.5rem] md:text-[.8rem] px-2 py-1 bg-surface text-main h-fit tracking-wider uppercase">
            {data.tag}
          </p>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="cursor-pointer absolute flex justify-center items-center md:top-2 right-2 bottom-2 w-8 h-8  md:w-12 md:h-12  bg-surface text-main tracking-wider uppercase"
        >
          {data.isFavorite ? (
            <ImHeart className="text-md md:text-xl" />
          ) : (
            <SlHeart className="text-md md:text-xl" />
          )}
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full text-sm md:text-lg">
          <p className="text-main w-[70%] line-clamp-1 font-thin">
            {data.name}
          </p>
          <p className="text-muted font-light">${data.price}</p>
        </div>
        <div className="flex flex-row justify-between text-xs md:text-md ">
          <p className="text-muted line-clamp-1 w-[70%]">
            {data.colorway.replaceAll(" ", " / ")}
          </p>
          <p className="text-muted line-clamp-1">{data.sizeRange}</p>
        </div>
      </div>
    </a>
  );
}
