import Divider from "../Divider";

export default function HomeTextContent() {
  return (
    <section className="w-full bg-surface flex flex-col gap-10 md:gap-[10rem] justify-between items-center ">
      <div className="w-[90%] md:w-[70%] flex flex-col gap-6 md:gap-8 items-center text-main text-center">
        <p className="font-body font-extralight tracking-[0.5rem] md:tracking-[0.75rem] text-xs md:text-sm ">
          ATELIER PHILOSOPHY
        </p>
        <p className="font-headline italic font-thin text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] leading-tight">
          “A rigorous study in architectural form, sculptural proportion, and
          deliberate permanence.”
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 font-body font-extralight tracking-[0.25rem] md:tracking-[0.5rem] text-xs md:text-sm ">
          <p>PARIS — 48.8566° N</p>
          <p className="hidden md:block">•</p>
          <p className="hidden md:block">TOKYO — 35.6762° N</p>
        </div>
      </div>
      <Divider width={80} />
    </section>
  );
}
