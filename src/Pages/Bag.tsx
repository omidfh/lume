import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { fakeBagData, mockData } from "../fakeData/data";
import Divider from "../components/Divider";
import BagItem from "../components/BagComponents/BagItem";
import TotalInfo from "../components/BagComponents/TotalInfo";

export default function Bag() {
  const { pathname } = window.location;

  const totalPrice = fakeBagData
    .flatMap((item) => mockData.filter((mockItem) => mockItem.id === item.id))
    .reduce((acc, item) => acc + item.price, 0);

  console.log(fakeBagData);

  return (
    <div className="flex flex-col gap-4 text-main font-body tracking-[.2rem]">
      <div className="flex justify-center">
        <BreadCrumb path={pathname} />
      </div>
      <div className="flex justify-between items-center">
        <p className=" uppercase text-2xl md:text-[5rem] font-headline">
          YOUR Bag
        </p>
        <p className="font-body text-xs md:text-lg font-extralight uppercase tracking-[0.1rem] md:tracking-[0.2rem]">
          {fakeBagData.length} items
        </p>
      </div>
      <Divider />
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="flex flex-col gap-4 w-full">
          {fakeBagData.map((item) => (
            <BagItem itemData={item} key={item.id} />
          ))}
        </div>

        <TotalInfo totalPrice={totalPrice} />
      </div>
    </div>
  );
}
