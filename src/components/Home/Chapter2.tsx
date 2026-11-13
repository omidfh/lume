import React from "react";
import heroImage3 from "../../assets/heroImage3.jpg";
import mobileHero2 from "../../assets/mobileHero2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Chapter2() {
  return (
    <div className=" relative -mx-10 w-[calc(100%+5rem)] md:-mx-12 md:w-[calc(100%+6rem)] overflow-hidden">
      <img
        src={heroImage3}
        alt="fashion"
        className="w-full  md:h-[1200px] object-cover  object-top  hidden md:block"
      />
      <img
        src={mobileHero2}
        alt="fashion"
        className="w-full h-[900px]  object-cover  object-top   md:hidden"
      />

      <div className="absolute inset-0 flex items-end justify-center md:justify-start pb-16 md:bottom-20 md:left-10 ">
        <div className="flex flex-col gap-6 md:gap-10 text-white py-6 px-4 items-center md:items-start text-center md:text-left max-w-full backdrop-brightness-70 md:backdrop-filter-none">
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start w-full md:w-2/3">
            <p className="font-body tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-base md:text-[1.5rem] font-extralight md:backdrop-brightness-70">
              CHAPTER II{" "}
            </p>
            <h1 className="text-xl sm:text-6xl md:text-[7rem] font-headline tracking-[0.3rem] md:tracking-[1rem] md:backdrop-brightness-70">
              RAW REFINEMENT
            </h1>

            <span className="font-body tracking-[0.2rem] md:tracking-[0.5rem] text-sm md:text-2xl font-extralight md:backdrop-brightness-70 hidden md:block">
              Unfinished selvage, untreated raw fibers, and sharp structural
              tailoring converge for late spring. An uncompromising reduction to
              pure line and matter.
            </span>
          </div>
          <div className="flex flex-row gap-4 md:gap-14 md:backdrop-brightness-70 p-2 md:p-4 justify-center md:justify-start items-center">
            <button className="hover:bg-transparent hover:text-main cursor-pointer text-main2 border-none md:border border-3 px-6 py-3 md:px-8 md:py-5 tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-sm md:text-[1.5rem] font-light bg-surface2 ">
              READ THE ESSAY
            </button>
            <button className="cursor-pointer flex underline flex-row gap-3 items-center tracking-[0.2rem] md:tracking-[0.5rem] text-xs sm:text-sm md:text-[1.5rem] font-light  md:flex">
              <p>VIEW GALLERY</p>
              <IoIosArrowRoundForward className="font-normal text-4xl hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
