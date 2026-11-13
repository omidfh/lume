import React, { useState } from "react";
import BreadCrumb from "../BreadCrumb";

export default function ImagesComponents({ productDetails, pathName }) {
  const [selectedPhoto, setSelectedPhoto] = useState(
    productDetails?.image || productDetails?.allImages[0].src,
  );

  function handleSelectPhoto(imageSrc) {
    setSelectedPhoto(imageSrc);
  }
  return (
    <div className="w-full h-auto md:w-[60%] gap-4 flex flex-col md:flex-row justify-center md:justify-evenly">
      <div className="md:hidden block">
        <BreadCrumb path={pathName} />
      </div>
      {/*//* /// all images for desktop */}
      <div className="md:flex hidden md:w-[8rem]  md:flex-col gap-6">
        {productDetails?.allImages.map((item) => (
          <img
            src={item.src}
            alt={item.alt}
            onClick={() => handleSelectPhoto(item.src)}
            className={`${selectedPhoto === item.src ? "opacity-100" : "opacity-50"} w-full h-auto aspect-[3/4]  object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300  ease-in-out `}
          />
        ))}
      </div>

      <div className="w-full min-w-0 md:w-auto md:flex-1">
        <img
          src={selectedPhoto}
          alt={
            productDetails?.allImages.find((item) => item.src === selectedPhoto)
              ?.alt
          }
          className="w-full  h-auto aspect-[3/4] object-cover"
        />
      </div>

      {/* ///* all images for mobile */}
      <div className="md:hidden flex justify-center flex-row gap-6">
        {productDetails?.allImages.map((item) => (
          <img
            src={item.src}
            alt={item.alt}
            onClick={() => handleSelectPhoto(item.src)}
            className={` ${selectedPhoto === item.src ? "opacity-100" : "opacity-50"} w-[4rem] h-auto aspect-[3/4] object-cover transition-opacity duration-300 ease-in-out`}
          />
        ))}
      </div>
    </div>
  );
}
