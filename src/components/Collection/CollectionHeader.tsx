import React from "react";

export default function CollectionHeader({ collectionView }) {
  return (
    <div className="flex flex-col items-center font-thin gap-8 text-muted tracking-[.2rem] text-center font-body">
      <p className="text-[.7rem] md:text-lg ">HAUTE COUTURE ÉDITIONS</p>
      <h2 className=" text-[2rem] md:text-8xl font-headline text-main tracking-[.5rem] ">
        {collectionView ? "COLLECTION" : "NEW ARRIVALS"}
      </h2>
      <p className="hidden md:block  text-[.7rem] md:text-lg md:max-w-2/3">
        A study in radical silence and architectural draping. Garments
        engineered with sculptural precision in undyed raw cashmere,
        double-faced wool, and unspun raw silks.
      </p>
    </div>
  );
}
