import React from "react";

export default function JournalCard({ data }) {
  if (!data) return null;
  return (
    <div className="flex flex-col shrink-0 snap-start w-[280px] sm:w-[360px] md:w-[440px] cursor-pointer hover:opacity-80 gap-2">
      <div className="relative overflow-hidden">
        <img
          src={data.image}
          alt={data.alt}
          className="object-cover h-[180px] sm:h-[220px] md:h-[260px] w-full transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full text-sm md:text-lg">
          <p className="text-main w-[70%] line-clamp-1 font-thin">
            {data.category}
          </p>
          <p className="text-muted font-light">{data.readTime}</p>
        </div>
        <div className="flex flex-row justify-between text-xs md:text-md ">
          <p className="text-muted line-clamp-1 w-[70%]">{data.title}</p>
        </div>
      </div>
    </div>
  );
}
