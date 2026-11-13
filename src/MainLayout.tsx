import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import UpperHeader from "./components/HeaderComponents/UpperHeader";
import FooterMain from "./components/Footer/FooterMain";
import MobileItems from "./components/MobileItems";

export default function MainLayout() {
  return (
    <div className="flex flex-col bg-surface ">
      <UpperHeader />

      <div className="flex flex-col bg-surface px-5 md:px-12 overflow-x-hidden">
        <div>
          <div className="hidden md:block">
            <Header />
          </div>
          <div className="block md:hidden">
            <MobileHeader />
          </div>
        </div>
        <div>{<Outlet />}</div>
        <div className="md:block hidden">
          <FooterMain />
        </div>
        <div className="md:hidden block">
          <div className="h-[90px]"></div>
          <MobileItems />
        </div>
      </div>
    </div>
  );
}
