import React from "react";

export default function Communication() {
  return (
    <div className="bg-bg2 flex -mx-10 w-[calc(100%+5rem)] md:-mx-12 md:w-[calc(100%+6rem)] overflow-hidden justify-center items-center py-16 px-5 md:px-12">
      <div className="flex flex-col  gap-8 justify-evenly  items-center border border-border bg-surface p-8 md:p-14 w-full">
        <div className="flex flex-col gap-4 justify-evenly items-center text-main md:w-2/3">
          <p className="text-center  font-body font-thin text-muted tracking-[.4rem] md:tracking-[.6rem] text-xs md:text-lg">
            COMMUNIQUÉ
          </p>
          <p className="text-center  font-headline text-main tracking-[.4rem] md:tracking-[.6rem] text-sm md:text-3xl">
            RECEIVE THE DISPATCH
          </p>
          <p className="font-thin text-center  text-xs md:text-xl text-muted tracking-[.2rem] md:tracking-[.4rem]">
            Curated seasonal drops, private showroom invitations, and archival
            releases delivered biannually. Unsolicited correspondence is never
            dispatched.
          </p>
        </div>
        <div className="flex gap-0">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="bg-bg2 placeholder:text-muted placeholder:tracking-wider placeholder:text-[.7em] md:placeholder:text-[.9em] py-3 border border-border placeholder:text-center  px-2 w-[16rem] "
          />
          <button className=" cursor-pointer tracking-[.3rem]  text-sm text-main2 px-4 bg-surface2 ">
            JOIN
          </button>
        </div>
        <p className="font-thin text-center  text-[.7rem] md:text-sm text-muted tracking-[.2rem] md:tracking-[.4rem]">
          BY SUBSCRIBING, YOU AGREE TO OUR TERMS & PRIVACY POLICIES
        </p>
      </div>
    </div>
  );
}
