import BreadCrumb from "../components/BreadCrumb";
import CollectionHeader from "../components/Collection/CollectionHeader";
import SortAndView from "../components/Collection/SortAndView";
import { mockData } from "../fakeData/data";
import ProductCard from "../components/ProductCard";
import { useState, useMemo } from "react";
import ProductCountAndMore from "../components/Collection/ProductCountAndMore";

export default function NewArrivals() {
  const [activeCols, setActiveCols] = useState(4);
  const [productAmountShow, setProductAmountShow] = useState(8);
  const newData = mockData.filter((item) => item.isNew);

  const visibleProducts = newData.slice(0, productAmountShow);
  const shownCount = visibleProducts.length;

  function handleShowMoreProduct(amount) {
    if (productAmountShow + amount >= newData.length) {
      setProductAmountShow(newData.length);
    } else {
      setProductAmountShow((productCount) => productCount + amount);
    }
  }

  const progress = newData.length > 0 ? (shownCount / newData.length) * 100 : 0;

  // useMemo computes the tile array whenever activeCols changes
  const productViewTile = useMemo(
    () => [
      { value: 4, active: activeCols === 4 },
      { value: 2, active: activeCols === 2 },
    ],
    [activeCols],
  );

  const tileViewHandle = (view) => {
    setActiveCols(view);
  };

  // useMemo computes the grid class based on activeCols
  const gridColsClass = useMemo(
    () => (activeCols === 2 ? "md:grid-cols-2" : "md:grid-cols-4"),
    [activeCols],
  );

  const { pathname } = window.location;
  return (
    <>
      <div className="flex  flex-col gap-8 w-full text-main justify-between items-center py-8">
        <BreadCrumb path={pathname} />

        <CollectionHeader />

        <SortAndView
          productAmount={shownCount}
          modalHandler={() => {}}
          tileView={productViewTile}
          tileHandler={tileViewHandle}
        />

        <div className="w-full flex flex-row gap-4 justify-between">
          <div
            className={` w-full flex flex-row flex-wrap  justify-between md:grid ${gridColsClass} gap-4 `}
          >
            {visibleProducts.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>

        <ProductCountAndMore
          progress={progress}
          shownCount={shownCount}
          mockDataLength={newData.length}
          handleShowMoreProduct={handleShowMoreProduct}
        />
        <div className="h-8 flex md:hidden"></div>
      </div>
    </>
  );
}
