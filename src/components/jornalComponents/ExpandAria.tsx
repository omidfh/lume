import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Divider from "../Divider";
import type { JournalPost } from "../../types/journal";

export default function ExpandAria({ content }: { content: JournalPost }) {
  const [isOpen, setIsOpen] = useState(false);
  const iconClasses = {
    opened: `absolute text-xs transition-all duration-300 ease-in-out ${
      isOpen
        ? "opacity-100 rotate-0 scale-100"
        : "opacity-0 -rotate-90 scale-50 pointer-events-none"
    }`,
    closed: `absolute text-xs transition-all duration-300 ease-in-out ${
      isOpen
        ? "opacity-0 rotate-90 scale-50 pointer-events-none"
        : "opacity-100 rotate-0 scale-100"
    }`,
  };
  return (
    <div className="flex flex-col py-1 md:py-3 font-body gap-4 md:gap-8 ">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col md:flex-row cursor-pointer justify-between items-center tracking-[.2rem] gap-4 uppercase w-full"
      >
        <p className="text-[.6rem] md:text-xs font-thin ">{content.category}</p>
        <h2 className="font-normal text-center md:text-start text-sm md:text-xl font-headline ">
          {content.title}
        </h2>
        <button
          type="button"
          className="flex items-center justify-center gap-2 cursor-pointer p-1"
        >
          <p className="text-xs font-thin">{content.readTime}</p>
          <div className="relative w-3.5 h-3.5 flex items-center justify-center">
            <FaMinus className={iconClasses.opened} />
            <FaPlus className={iconClasses.closed} />
          </div>
        </button>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pt-3"
            : "grid-rows-[0fr] opacity-0 pt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-[350px] md:w-[850px]">
              <img
                className="aspect-3/2 w-full h-auto"
                src={content.image}
                alt={content.alt}
              />
            </div>

            <div className="flex flex-col justify-evenly gap-2">
              <h3 className="text-center md:text-start text-lg md:text-xl italic font-extralight tracking-[.1rem]">
                "{content.excerpt}"
              </h3>
              <h4 className="text-center md:text-start text-sm md:text-base italic font-thin tracking-[.1rem]">
                {content.body}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
