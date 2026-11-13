import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { journalData } from "../fakeData/journalData";
import ExpandAria from "../components/jornalComponents/ExpandAria";
import Divider from "../components/Divider";

export default function Journal() {
  const { pathname } = window.location;
  return (
    <div className="flex flex-col gap-4 text-main tracking-[.2rem] md:px-20">
      <div className="flex justify-center">
        <BreadCrumb path={pathname} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start w-full items-center">
        <p className=" uppercase text-2xl text-center md:text-[4rem] font-headline">
          JOURNAL
        </p>
        <p className=" uppercase text-[.6rem] md:text-xs text-center font-body font-thin">
          Notes on craft, space and quiet luxury
        </p>
      </div>

      <Divider />

      {journalData.map((item) => (
        <ExpandAria content={item} />
      ))}
    </div>
  );
}
