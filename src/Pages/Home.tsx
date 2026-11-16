import HomeHeroBanner from "../components/Home/HomeHeroBanner";
import HomeTextContent from "../components/Home/HomeTextContent";
import NewArrivals from "../components/Home/NewArrivals";
import RequestInvitation from "../components/Home/RequestInvitation";
import Chapter2 from "../components/Home/Chapter2";
import Journal from "../components/Home/Journal";
import Communication from "../components/Home/Communication";

export default function Home() {
  return (
    <div className="bg-surface flex flex-col gap-40 md:gap-60">
      <HomeHeroBanner />
      <HomeTextContent />
      <NewArrivals />
      <RequestInvitation />
      <Chapter2 />
      <Journal />
      <Communication />
    </div>
  );
}
