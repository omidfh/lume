import React, { Fragment } from "react";

export default function BreadCrumb({ path }) {
  const pathNames = path.split("/").slice(1);
  return (
    <div className=" text-md md:text-xl  flex gap-2 text-muted font-body tracking-[.2rem] justify-center items-center font-thin ">
      <a href={"/"}>Home</a>

      {pathNames.map((item, i) => (
        <Fragment key={i}>
          <p>/</p>
          {i === pathNames.length - 1 ? (
            <p className="text-main">{item}</p>
          ) : (
            <a href={"/" + item}>{item}</a>
          )}
        </Fragment>
      ))}
    </div>
  );
}
