import React from "react";

export default function ProductCountAndMore({
  shownCount,
  mockDataLength,
  progress,
  handleShowMoreProduct,
}) {
  return (
    <div className="flex flex-col w-[80%] md:w-1/5 gap-4 justify-center">
      <p className=" tracking-[.2rem] text-center font-body text-muted text-sm uppercase">
        Displaying {shownCount} of {mockDataLength}{" "}
      </p>
      <div
        role="progressbar"
        aria-label="Products displayed"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        className=" h-[3px]  w-full bg-border"
      >
        <div
          className="h-full bg-main transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {shownCount < mockDataLength && (
        <div className="flex w-full justify-center">
          <button
            onClick={() => handleShowMoreProduct(8)}
            className=" uppercase cursor-pointer w-[80%]  border border-main px-4 py-3  tracking-[0.2rem] text-sm  font-light"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
