import { mockData } from "../fakeData/data";
import ImagesComponents from "../components/SingleProduct/ImagesComponents";
import InformationComponents from "../components/SingleProduct/InformationComponents";
import MiddleTextComponent from "../components/SingleProduct/MiddleTextComponent";
import SimilarProducts from "../components/SingleProduct/SimilarProducts";

export default function SingleProduct() {
  const { pathname } = window.location;

  const productId = pathname.split("/").at(-1);
  const productDetails = mockData.find((item) => item.id === productId);

  return (
    <div className=":flex flex-col gap-12 text-main tracking-[.2rem]">
      <div className="flex flex-col md:flex-row gap-6 justify-between w-full font-body text-main tracking-[.2rem]">
        <ImagesComponents productDetails={productDetails} pathName={pathname} />

        <InformationComponents
          productDetails={productDetails}
          pathName={pathname}
        />
      </div>
      <MiddleTextComponent />
      <SimilarProducts productDetails={productDetails} />
      <div className="h-12 w-full flex flex-col md:hidden" />
    </div>
  );
}
