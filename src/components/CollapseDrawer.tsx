import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface CollapseDrawerItems {
  children: React.ReactNode;
  name: string;
  mode: string;
}

export default function CollapseDrawer({
  children,
  name,
  mode,
}: CollapseDrawerItems) {
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
    <div className="flex flex-col py-1 md:py-3 font-body">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex cursor-pointer justify-between items-center tracking-[.2rem] uppercase"
      >
        <p className="font-normal text-sm">{name}</p>
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer p-1"
        >
          <div className="relative w-3.5 h-3.5 flex items-center justify-center">
            {mode === "filter" && (
              <>
                <FaMinus className={iconClasses.opened} />
                <FaPlus className={iconClasses.closed} />
              </>
            )}
            {mode === "info" && (
              <>
                <SlArrowUp className={iconClasses.opened} />
                <SlArrowDown className={iconClasses.closed} />
              </>
            )}
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
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
