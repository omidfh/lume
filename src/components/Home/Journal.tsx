import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import JournalCard from "../JournalCard";
import { journalData } from "../../fakeData/journalData";
import Divider from "../Divider";

export default function Journal() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full text-main">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4 w-2/3">
            <p className="font-body font-extralight tracking-[0.3rem] md:tracking-[0.75rem] text-[.5rem] md:text-sm ">
              ARCHIVAL DISPATCH
            </p>
            <p className="font-headline tracking-[.7rem] text-md md:text-3xl">
              THE JOURNAL
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href="#"
              className="flex flex-row gap-2 md:gap-3 font-body items-center"
            >
              <p className="text-xs md:text-[1rem] font-body font-extralight tracking-widest md:tracking-[.5rem] ">
                [ ISSUE {journalData.length} ]
              </p>
            </a>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous article"
                className="p-2 border border-border hover:bg-surface text-main rounded-full transition-colors cursor-pointer"
              >
                <SlArrowLeft className="text-xs md:text-sm" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next article"
                className="p-2 border border-border hover:bg-surface text-main rounded-full transition-colors cursor-pointer"
              >
                <SlArrowRight className="text-xs md:text-sm" />
              </button>
            </div>
          </div>
        </div>
        <Divider />
        <div
          ref={sliderRef}
          className="flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 my-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {journalData.map((item) => (
            <JournalCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
