import type { Product } from "../../../types/product";

interface FilterItemsTypes {
  title: string;
  quantity: Product[];
  color?: string;
}

export default function FilterItems({ title, quantity }: FilterItemsTypes) {
  return (
    <div className="flex flex-col justify-evenly py-1 text-main">
      <div className="flex justify-between items-center">
        <div className={`flex gap-3 items-center `}>
          <input
            type="checkbox"
            title={title}
            value={title}
            id={title}
            className=" appearance-none bg-bg2 h-5 w-5 checked:bg-main border border-main "
          />
          <label
            htmlFor={title}
            className="tracking-[.2rem] font-body uppercase text-sm"
          >
            {title}
          </label>
        </div>
        {quantity.length > 0 && <p className="text-sm">{quantity?.length}</p>}
      </div>
    </div>
  );
}
