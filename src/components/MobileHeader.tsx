import logo from "../assets/image.png";
import logoDark from "../assets/imageDark.png";
import logoSmall from "../assets/logoSmall.png";
import { SlBag, SlMagnifier, SlMenu } from "react-icons/sl";

export default function MobileHeader() {
  return (
    <header className="w-full py-2.5 sm:py-3">
      <div className="flex items-center justify-between">
        {/* //* Menu Icon (Left) */}
        <div className="flex items-center1/6">
          <SlMenu className="cursor-pointer text-lg sm:text-xl text-main" />
        </div>

        {/* //* Lume Logo (Center) */}
        <div className="flex justify-center items-center flex-1">
          {/* Light Mode Logo */}
          <img
            src={logo}
            alt="Lume"
            className="h-7 sm:h-9 md:h-10 w-auto object-contain dark:hidden"
          />
          {/* Dark Mode Logo */}
          <img
            src={logoDark}
            alt="Lume"
            className="h-7 sm:h-9 md:h-10 w-auto object-contain hidden dark:block"
          />
        </div>

        {/* //* Actions: Search, Cart, Avatar (Right) */}
        <div className="flex items-center justify-end gap-3  w-1/4">
          <SlMagnifier className="cursor-pointer text-lg sm:text-xl text-main" />
          <SlBag className="cursor-pointer text-lg sm:text-xl text-main" />
          <img
            src={logoSmall}
            alt="avatar"
            className="w-6 h-6 sm:w-9 sm:h-9 cursor-pointer rounded-full object-cover border border-p90"
          />
        </div>
      </div>
    </header>
  );
}
