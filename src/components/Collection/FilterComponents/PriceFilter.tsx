export default function PriceFilter({ title }: { title: string }) {
  return (
    <div className="flex flex-col justify-evenly py-1 text-main">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            id={title}
            name={"price"}
            value={title}
            className=" appearance-none bg-bg2 h-5 w-5 checked:bg-main border border-main"
          />
          <label
            htmlFor={title}
            className="tracking-[.2rem] font-body uppercase text-sm"
          >
            {title}
          </label>
        </div>
      </div>
    </div>
  );
}
