import React from "react";

export default function RequestInvitation() {
  return (
    <div className="bg-bg2 flex -mx-10 w-[calc(100%+5rem)] md:-mx-12 md:w-[calc(100%+6rem)] overflow-hidden justify-center items-center py-16 px-5 md:px-12">
      <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center border border-border bg-surface p-8 md:p-14 w-full">
        <div className="flex flex-col gap-4 justify-evenly text-main md:w-2/3">
          <p className="text-center md:text-left font-body font-thin text-muted tracking-[.4rem] md:tracking-[.6rem] text-xs md:text-lg">
            PRIVATE APPOINTMENTS
          </p>
          <p className="text-center md:text-left font-headline text-main tracking-[.4rem] md:tracking-[.6rem] text-sm md:text-3xl">
            ATELIER FITTING SESSIONS
          </p>
          <p className="font-thin text-center md:text-left text-xs md:text-xl text-muted tracking-[.2rem] md:tracking-[.4rem]">
            Reserve an intimate one-on-one wardrobe consultation with our senior
            tailoring directors in London, New York, or Paris. Custom
            adjustments are completed in our maison archive within 72 hours.
          </p>
        </div>
        <div>
          <button className=" cursor-pointer tracking-[.4rem] md:tracking-[.6rem] text-xs md:text-lg text-main2 px-4 bg-surface2 ">
            REQUEST AN INVITATION
          </button>
        </div>
      </div>
    </div>
  );
}
