import { VscSettings } from "react-icons/vsc";

export default function SortAndView({
  productAmount,
  tileView,
  tileHandler,
  modalHandler,
}) {
  return (
    <div className="flex w-full flex-row uppercase justify-between tracking-[.2rem] font-thin  py-4 md:py-8 md:px-4 px-0 border-0 md:border md:border-border backdrop:none md:backdrop-brightness-105 font-body">
      <div className="w-1/3">
        {/* //* Desktop view */}
        <p className="hidden md:block ">SHOWING {productAmount} PIECES</p>

        {/* //* Mobile view */}
        <button
          className="flex md:hidden items-center gap-2 text-sm"
          onClick={() => modalHandler(true)}
        >
          <VscSettings />
          <p className="">Filters</p>
        </button>
      </div>

      <div className="flex justify-between w-2/3 md:w-1/3">
        <div className="flex gap-2 justify-end items-center">
          <label id="sort" className="text-xs md:text-[1rem] line-clamp-1">
            sort by:
          </label>
          <select
            name="sort"
            id="sort"
            className="text-sm md:text-[1rem] w-1/3 md:w-auto"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price">Price</option>
            <option value="inStock">In Stock</option>
          </select>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <p className="text-xs md:text-[1rem] line-clamp-1">View</p>
          <div className="flex items-center gap-3">
            {tileView?.map((tile) => (
              <button
                key={tile.value}
                onClick={() => tileHandler && tileHandler(tile.value)}
                className={`py-2 px-3 cursor-pointer transition-colors ${
                  tile.active
                    ? "bg-main text-surface"
                    : "border border-border text-muted hover:text-main"
                }`}
              >
                {tile.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
