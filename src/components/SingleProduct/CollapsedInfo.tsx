import type { Product } from "../../types/product";
import CollapseDrawer from "../CollapseDrawer";

export default function CollapsedInfo({
  productDetails,
}: {
  productDetails: Product;
}) {
  const infoData = [
    {
      name: "description",
      content: (
        <div className="flex flex-col font-body font-extralight text-main ">
          <p className="text-sm md:text-lg">{productDetails.description}</p>
          <ul className="list-disc  list-outside pl-6 py-2 text-sm">
            {productDetails.details.map((item) => (
              <li className="my-1" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      name: "MATERIALS & CARE",
      content: (
        <div className="flex flex-col gap-4 font-body font-extralight text-main">
          <p className="">{productDetails.materialCare.description}</p>
          <div className="grid items-center grid-cols-2 gap-4 text-xs md:text-sm">
            <p className="p-4 backdrop-brightness-150 text-center">
              ORIGIN: {productDetails.materialCare.origin}
            </p>
            <p className="p-4 backdrop-brightness-150 text-center">
              FINISH: {productDetails.materialCare.finish}
            </p>
            <p className="p-4 backdrop-brightness-150 text-center">
              CARE: {productDetails.materialCare.care}
            </p>
            <p className="p-4 backdrop-brightness-150 text-center">
              IRON: {productDetails.materialCare.iron}
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "SHIPPING & ARCHIVAL RETURNS",
      content: (
        <div className="flex flex-col gap-4 font-body font-extralight text-main">
          <p className="text-sm font-thin">
            Each garment is enclosed in custom unbleached organic cotton dust
            bags and rigid archival presentation boxes.
          </p>
          <p className="text-sm">
            <span className="font-medium">NORTH AMERICA: </span>
            2–3 Business Days via FedEx Priority{" "}
          </p>
          <p className="text-sm">
            <span className="font-medium">EUROPE: </span>
            1–2 Business Days via DHL Express{" "}
          </p>
          <p className="text-sm">
            <span className="font-medium">ASIA & OCEANIA: </span>
            3–4 Business Days
          </p>
          <p className="text-sm font-thin">
            Complimentary doorstep returns arranged within 14 calendar days from
            delivery.
          </p>
        </div>
      ),
    },
  ];
  return (
    <>
      {infoData.map((item) => (
        <div className="bg-bg2 p-4 w-full" key={item.name}>
          <CollapseDrawer name={item.name} mode={"info"}>
            {item.content}
          </CollapseDrawer>
        </div>
      ))}
    </>
  );
}
