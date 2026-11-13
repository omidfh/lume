import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { mockData } from "../fakeData/data";
import ProductCard from "../components/ProductCard";

export default function Saved() {
  const { pathname } = window.location;
  const favoriteProducts = mockData.filter((item) => item.isFavorite);
  return (
    <div className="flex flex-col gap-4 text-main tracking-[.2rem]">
      <div className="flex justify-center">
        <BreadCrumb path={pathname} />
      </div>

      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-row md:flex-row  items-center gap-1 ">
          <p className=" uppercase text-2xl md:text-[5rem] font-headline">
            SAVED/
          </p>
          <p className="font-body text-xs md:text-lg font-extralight  tracking-[0.1rem] md:tracking-[0.2rem]">
            4 items
          </p>
        </div>

        <a
          href="/collection"
          className="flex justify-end cursor-pointer flex-row gap-1 md:gap-3 items-center tracking-[0.1rem] md:tracking-[0.2rem] text-main text-xs  md:text-lg underline underline-offset-3  font-light uppercase"
        >
          <p className="p-0 m-0 line-clamp-1 font-body  font-extralight">
            Continue shopping
          </p>
          <IoIosArrowRoundForward className="hidden md:block text-2xl" />
        </a>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {favoriteProducts.map((item) => (
          <div key={item.id} className="min-w-0 flex flex-col gap-4">
            <ProductCard data={item} fullWidth />
            <button className=" backdrop-brightness-130 text-xs md:text-sm md:w-full  py-4 uppercase cursor-pointer hover:bg-surface2 hover:text-main2 transition-all duration-200 ease-in-out">
              Add to bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
