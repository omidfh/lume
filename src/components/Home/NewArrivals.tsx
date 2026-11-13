import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCard from "../ProductCard";
import { mockData } from "../../fakeData/data";
import Divider from "../Divider";

export default function NewArrivals() {
  return (
    <div className="flex flex-col w-full text-main">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4 w-2/3">
          <p className="font-body font-extralight tracking-[0.3rem] md:tracking-[0.75rem] text-[.5rem] md:text-sm ">
            CURATED SELECTION
          </p>
          <p className="font-headline tracking-[.7rem] text-md md:text-3xl">
            NEW ARRIVALS
          </p>
        </div>
        <a
          href="#"
          className="flex flex-row gap-2 md:gap-3 font-body items-center"
        >
          <p className="text-xs md:text-[1rem] font-body font-extralight tracking-widest md:tracking-[.5rem] ">
            VIEW ALL
          </p>
          <IoIosArrowRoundForward className="font-normal text-md md:text-2xl" />
        </a>
      </div>
      <Divider />
      <div className=" w-full flex flex-row flex-wrap justify-between md:grid md:grid-cols-4 gap-4">
        {mockData.slice(0, 4).map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
