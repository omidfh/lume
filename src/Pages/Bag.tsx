import BreadCrumb from "../components/BreadCrumb";
import { mockData } from "../fakeData/data";
import Divider from "../components/Divider";
import BagItem from "../components/BagComponents/BagItem";
import TotalInfo from "../components/BagComponents/TotalInfo";
import { useBag } from "../store/cartStore";

export default function Bag() {
  const { pathname } = window.location;

  const bagItems = useBag((state) => state.items);

  const totalPrice = bagItems.reduce((acc, item) => {
    const product = mockData.find((mockItem) => mockItem.id === item.id);
    return acc + (product?.price ?? 0) * item.quantity;
  }, 0);

  if (!bagItems) return;

  return (
    <div className="flex flex-col gap-4 text-main font-body tracking-[.2rem]">
      <div className="flex justify-center">
        <BreadCrumb path={pathname} />
      </div>
      {!bagItems.length ? (
        <div className="flex justify-center items-center h-[60dvh]">
          <p className=" uppercase text-center text-2xl md:text-[5rem] font-headline">
            Your Bag Is Empty!
          </p>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <p className=" uppercase text-2xl md:text-[5rem] font-headline">
              YOUR Bag
            </p>
            <p className="font-body text-xs md:text-lg font-extralight uppercase tracking-[0.1rem] md:tracking-[0.2rem]">
              {bagItems.length} items
            </p>
          </div>
          <Divider />
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="flex flex-col gap-4 w-full">
              {bagItems.map((item, i) => (
                <BagItem itemData={item} key={i} />
              ))}
            </div>

            <TotalInfo totalPrice={totalPrice} />
          </div>
        </>
      )}
    </div>
  );
}
