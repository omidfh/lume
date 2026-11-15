import CollapseDrawer from "../CollapseDrawer";
import { mockData } from "../../fakeData/data";
import Divider from "../Divider";
import FilterItems from "./FilterComponents/FilterItems";
import FilterSize from "./FilterComponents/FilterSize";
import PriceFilter from "./FilterComponents/PriceFilter";
import { productSizes } from "../../tools/ProductSizes";
import type { Prices } from "../../types/product";

export default function FilterProduct({
  closeModal,
}: {
  closeModal: (action: boolean) => void;
}) {
  const categories = [...new Set(mockData.map((item) => item.category))];
  const colors = [
    ...new Map(
      mockData.map((item) => [
        item.colors[0],
        { name: item.colors[0], color: item.colorCode },
      ]),
    ).values(),
  ];

  const prices: Prices = ["$200 - $400", "$400 - $600", "$600 +"];
  const filterData = [
    {
      title: "category",
      component: categories.map((item) => (
        <FilterItems
          title={item}
          quantity={mockData.filter((cat) => cat.category === item)}
        />
      )),
    },
    {
      title: "SIZE MATRIX",
      component: <FilterSize data={productSizes} />,
    },
    {
      title: "PALETTE",
      component: colors.map((item) => (
        <FilterItems
          key={item.name}
          title={item.name}
          quantity={mockData.filter((color) => color.colors[0] === item.name)}
        />
      )),
    },
    {
      title: "VALUATION",
      component: prices.map((item, i) => <PriceFilter key={i} title={item} />),
    },
  ];

  return (
    <div className="w-full backdrop-brightness-105  border border-border flex flex-col p-4 font-thin font-body tracking-[.1rem]">
      <div className="flex justify-between border-b border-border pb-4 hidden md:flex">
        <p className="uppercase">Filter</p>
        <button className="uppercase cursor-pointer">Clear ALL</button>
      </div>
      {filterData.map((data) => (
        <>
          <CollapseDrawer mode={"filter"} name={data.title}>
            {data.component}
          </CollapseDrawer>
          <Divider width={80} />
        </>
      ))}
      <div className="flex md:hidden justify-between ">
        <button
          onClick={() => closeModal(false)}
          className="uppercase cursor-pointer w-1/2  border border-main px-4 py-3  tracking-[0.2rem] text-sm  font-light"
        >
          Apply
        </button>
        <button className="uppercase cursor-pointer w-1/2 px-4 py-3 tracking-[0.2rem] text-sm  font-light">
          Clear All
        </button>
      </div>
    </div>
  );
}
