import Divider from "../Divider";
import { IoIosArrowRoundForward } from "react-icons/io";

export type TotalPrice = number | string;

export default function TotalInfo({ totalPrice }: { totalPrice: TotalPrice }) {
  return (
    <div className="flex flex-col gap-6 items-center md:items-start p-8 bg-bg2 text-main w-full md:w-1/3 h-fit font-extralight">
      <p className="text-lg font-medium">ORDER SUMMARY</p>
      <div className="flex justify-between w-full">
        <p className="text-muted">Subtotal</p>
        <p className="text-main font-light">${totalPrice}</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-muted">Shipping</p>
        <p className="text-main font-light">Complimentary</p>
      </div>
      <Divider width={100} />
      <div className="flex justify-between w-full">
        <p className="font-bold text-lg">Total</p>
        <p className="text-lg font-bold">${totalPrice}</p>
      </div>
      <button className="bg-surface2 w-full text-main2 text-xs md:text-sm md:w-full font-medium py-6 uppercase cursor-pointer hover:bg-surface hover:text-main transition-all duration-200 ease-in-out">
        PROCEED TO CHECKOUT
      </button>
      <p className="text-xs text-muted font-extralight text-center">
        Complimentary shipping on orders over $250 · Free returns within 14 days
      </p>

      <a
        href="/collection"
        className="flex justify-center cursor-pointer flex-row gap-1 md:gap-3 items-center tracking-[0.1rem] md:tracking-[0.2rem] text-main text-xs  md:text-sm underline underline-offset-3  font-light uppercase w-full"
      >
        <p className="p-0 m-0 line-clamp-1 font-body  font-extralight">
          Continue shopping
        </p>
        <IoIosArrowRoundForward className="hidden md:block text-2xl" />
      </a>
    </div>
  );
}
