import { useState } from "react";
import BreadCrumb from "../BreadCrumb";
import { productSizes } from "../../tools/ProductSizes";
import { SlHeart } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import CollapsedInfo from "./CollapsedInfo";
import type { ImagesComponentsItems } from "./ImagesComponents";
import type { Size } from "../../types/product";

export default function InformationComponents({
  productDetails,
  pathName,
}: ImagesComponentsItems) {
  const [selectedColor, setSelectedColor] = useState(productDetails.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productDetails.sizes[0]);

  function handleColorSelect(color: string) {
    setSelectedColor(color);
  }

  function handleSizeSelect(size: Size) {
    setSelectedSize(size);
  }

  return (
    <div className="w-full md:w-[40%] flex flex-col items-start gap-6 font-body">
      <div className="hidden md:block">
        <BreadCrumb path={pathName} />
      </div>
      <p className="font-headline uppercase text-2xl md:text-[3rem] ">
        {productDetails?.name}
      </p>

      <div className="flex items-center gap-4 font-thin">
        <p className="md:font-medium text-2xl md:text-[1.5rem]">
          {" "}
          ${productDetails?.price}
        </p>
        <span className="uppercase text-xs">Tax Incl.</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="uppercase text-md">
          color - <span className="font-extralight">{selectedColor}</span>
        </p>
        {productDetails.colors.map((item) => (
          <div
            id={item}
            style={{ backgroundColor: productDetails.colorCode }}
            className={`border border-main w-8 h-8 cursor-pointer `}
            onClick={() => handleColorSelect(item)}
          ></div>
        ))}
      </div>

      <div className="flex flex-col w-full gap-3">
        <div className="flex justify-between">
          <p className="uppercase text-md">Select Size</p>
          <button className="underline uppercase text-sm text-muted cursor-pointer">
            Size Guide
          </button>
        </div>
        <div className="flex w-full justify-evenly gap-2">
          {productDetails.sizes.map((item, i) => (
            <button
              key={i}
              onClick={() => handleSizeSelect(item)}
              className={`bg-${item === selectedSize ? "surface2" : "surface"}  border text-${item === selectedSize ? "main2" : "main"} hover:brightness-150 transition-all duration-100 ease-in-out cursor-pointer border-border grow p-4 text-center uppercase bg-bg2 text-sm`}
            >
              <p>{item}</p>
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="uppercase text-xs font-thin">
            EQUIVALENT Sizes {productDetails.sizeRange}
          </p>

          <p className="uppercase hidden md:block text-sm font-extralight">
            Selected:{selectedSize} ( us:
            {
              productSizes.find(
                (item) => item.name === selectedSize.toLowerCase(),
              )?.value
            }{" "}
            / EU:
            {
              productSizes.find(
                (item) => item.name === selectedSize.toLowerCase(),
              )?.europeValue
            }{" "}
            )
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-between w-full">
        <button className="text-sm md:text-lg py-2 md:py-4 grow uppercase bg-surface2 text-main2 hover:bg-surface hover:text-main hover:border transition-all duration-150 ease-in-out cursor-pointer ">
          Add to bag
        </button>
        <button className=" flex justify-center items-center w-10 h-10 md:w-20 md:h-20 border shrink-0 hover:bg-surface2 hover:text-main2 transition-all duration-150 ease-in-out cursor-pointer">
          <SlHeart className="flex text-md md:text-xl" />
        </button>
      </div>
      <div className="flex items-center gap-2 border border-border p-2 md:border-0">
        <BsTruck className="text-[2rem] md:text-[2.5rem] font-thin" />
        <p className="hidden md:block text-sm font-thin">
          Complimentary shipping on orders over $250. Delivered via
          carbon-neutral white-glove courier. Free archival returns within 14
          days.
        </p>
        <p className="block md:hidden text-xs font-thin">
          Complimentary shipping on orders over $250 · Free returns within 14
          days
        </p>
      </div>
      <CollapsedInfo productDetails={productDetails} />
    </div>
  );
}
