import { FaMinus, FaPlus } from "react-icons/fa";
import { mockData } from "../../fakeData/data";
import Divider from "../Divider";
import type { Bag } from "../../types/bag";

interface ItemData {
  itemData: Bag;
}

export default function BagItem({ itemData }: ItemData) {
  const productDetails = mockData.find(
    (mockItem) => mockItem.id === itemData.id,
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-2 items-center md:items-start">
        <div className="flex gap-4 md:gap-6">
          <div className="w-[100px] md:w-[200px]">
            <img
              src={productDetails?.image}
              alt={productDetails?.alt}
              className="aspect-3/4"
            />
          </div>
          <div className="flex flex-col items-start gap-4 justify-between text-muted">
            <div className="flex flex-col justify-between gap-4 text-sm md:text-lg">
              <p className=" text-main text-base md:text-xl line-clamp-1">
                {productDetails?.name}
              </p>

              <div className="flex items-center gap-2">
                <div
                  style={{ backgroundColor: productDetails?.colorCode }}
                  className={`border border-main w-4 h-4 `}
                ></div>
                <p className="text-xs md:text-base">{itemData?.color}</p>
              </div>
              <p className="text-xs md:text-base">SIZE [{itemData?.size}]</p>
              <div className="flex justify-between w-[110px] border border-border gap-2 py-1 px-4">
                <button className="text-center cursor-pointer text-xs md:text-sm">
                  <FaMinus />
                </button>
                <p className="text-md md:text-lg text-main">
                  {itemData.quantity}
                </p>
                <button className="text-center cursor-pointer text-xs md:text-sm">
                  <FaPlus />
                </button>
              </div>
            </div>
            <button className="underline underline-offset-4 uppercase text-xs md:text-base">
              Remove
            </button>
          </div>
        </div>
        <div className="flex justify-end text-main text-sm md:text-xl">
          <p>${productDetails?.price}</p>
        </div>
      </div>
      <Divider />
    </div>
  );
}
