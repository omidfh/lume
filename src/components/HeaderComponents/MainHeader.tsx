import { SlBag, SlHeart } from "react-icons/sl";
import routes from "../../routes/routes";
import { useBag } from "../../store/cartStore";
import { useSaved } from "../../store/savedStore";

export default function MainHeader() {
  const path = window.location.pathname;
  const bagItems = useBag((state) => state.items);
  const savedCount = useSaved((state) => state.items);

  return (
    <div className="flex justify-between bg-bg-main py-2 text-main w-full h-full items-center ">
      {/* //* Left Part */}
      <div className="flex justify-between gap-6  w-fit items-center font-thin tracking-[.3rem]">
        {routes.map((item, i) => (
          <div key={i}>
            <a
              href={item.url}
              className={`${
                "/" + path.split("/")[1] === item.url ? "font-bold " : ""
              } uppercase`}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>

      {/* //* Middle Part */}
      <div className="flex flex-col items-center justify-center flex-1 ">
        <div className="flex flex-col justify-center items-center content-center gap-3 tracking-[.3rem]">
          <h2 className="uppercase font-headline text-main text-3xl xl:text-7xl">
            LUME
          </h2>
          <p className="text-muted text-xs text-center">
            HAUTE COUTURE ÉDITIONS
          </p>
        </div>
      </div>

      {/* //* Right Part */}

      <div className="flex w-1/3 justify-between  tracking-[.2rem]">
        <div className="flex w-full justify-evenly gap-2 items-center">
          <a
            href={"/" + path.split("/")[1] === "/saved" ? undefined : "/saved"}
            className={`${
              "/" + path.split("/")[1] === "/saved" ? "font-bold " : ""
            } flex  md:gap-2 cursor-pointer items-center text-muted w-1/3`}
          >
            <SlHeart className="" />
            <p>SAVED [ {savedCount.length} ]</p>
          </a>
          <a
            href={"/" + path.split("/")[1] === "/bad" ? undefined : "/bag"}
            className={`${
              "/" + path.split("/")[1] === "/bag" ? "font-bold " : ""
            } flex  md:gap-2 cursor-pointer items-center text-muted w-1/3`}
          >
            <SlBag />
            <p>BAG [ {bagItems.length} ]</p>
          </a>
        </div>
      </div>
    </div>
  );
}
