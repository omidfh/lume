import React, { useRef } from "react";

export default function FilterSize({ data }) {
  return (
    <div className="flex w-full flex-row items-center gap-2  overflow-x-auto scroll-smooth  py-4 my-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-main">
      {data.map((item, i) => (
        <button
          key={i}
          className={`border border-border shrink-0 w-[55px] h-[55px] flex flex-col justify-center uppercase bg-bg2 text-sm`}
        >
          <p>{item.value}</p>
          <p>{item.name}</p>
        </button>
      ))}
    </div>
  );
}
