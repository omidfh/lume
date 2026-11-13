import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImage from "../../assets/heroImage1.jpeg";

export default function HomeHeroBanner() {
  return (
    <div className="relative -mx-10 w-[calc(100%+5rem)] md:-mx-12 md:w-[calc(100%+6rem)] overflow-hidden">
      <img
        src={heroImage}
        alt="fashion"
        className="w-full h-[900px] md:h-[1200px] object-cover object-top  "
      />
      {/* If you want text over the image: */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-16 md:bottom-20 md:left-10 ">
        <div className="flex flex-col gap-6 md:gap-10 text-white py-6 px-4 items-center md:items-start text-center md:text-left max-w-full backdrop-brightness-70 md:backdrop-filter-none">
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start">
            <p className="font-body tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-base md:text-[2rem] font-extralight md:backdrop-brightness-70">
              COLLECTION 01 / SS25{" "}
              <span className="hidden md:inline">• EDITIONS LIMITÉES</span>
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-[8rem] font-headline tracking-[0.3rem] md:tracking-[1rem] md:backdrop-brightness-70">
              THE NEW <br /> SILHOUETTE
            </h1>

            <span className="font-body tracking-[0.2rem] md:tracking-[0.5rem] text-sm md:text-2xl font-extralight md:backdrop-brightness-70 hidden md:block">
              Purity of proportion, sculpted shoulder lines, and Italian
              double-faced <br /> wool engineered with surgical restraint.
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-14 md:backdrop-brightness-70 p-2 md:p-4 justify-center md:justify-start items-center">
            <button className="cursor-pointer border border-3 px-6 py-3 md:px-8 md:py-5 tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-sm md:text-[1.5rem] font-light">
              EXPLORE LOOKBOOK
            </button>
            <button className="cursor-pointer flex flex-row gap-3 items-center tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-sm md:text-[1.5rem] font-light hidden md:flex">
              <p>RUNWAY ARCHIVE</p>
              <IoIosArrowRoundForward className="font-normal text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
