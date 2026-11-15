import { GrAppsRounded } from "react-icons/gr";

import { RiHomeLine } from "react-icons/ri";
import { SlBag, SlHeart } from "react-icons/sl";

export default function MobileItems() {
  return (
    <div className="fixed bottom-0 w-full left-0 ">
      <div className="flex flex-row border-t border-border justify-evenly  py-4 backdrop-brightness-15 uppercase text-muted">
        <div className="flex flex-col justify-center items-center gap-2">
          <RiHomeLine className="text-[1.4rem]" />
          <a href="/" className="text-[.7rem] tracking-widest font-thin">
            Atelier
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <GrAppsRounded className="text-[1.4rem]" />{" "}
          <a
            href="/collection"
            className="text-[.7rem] tracking-widest font-thin"
          >
            Catalog
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SlHeart className="text-[1.4rem]" />
          <a
            href="/favorites"
            className="text-[.7rem] tracking-widest font-thin"
          >
            Saved
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <SlBag className="text-[1.4rem]" />
          <a href="/cart" className="text-[.7rem] tracking-widest font-thin">
            Bag
          </a>
        </div>
      </div>
    </div>
  );
}
