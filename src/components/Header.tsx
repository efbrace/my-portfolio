import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` -mt-15  sticky top-0 flex justify-between items-center font-bold py-3 lg:px-24  px-6 transition-all ease-in duration-500 bg-Black  z-99  ${
        isScrolled ? "bg-Black shadow-md" : "bg-transparent"
      }`}
    >
      {/* LOGO  */}
      <a href="#">
        <span
          className={`text-3xl cursor-pointer  ${
            isScrolled ? "text-White" : "text-Black"
          }`}
        >
          EFB
        </span>
      </a>
      {/* NAV MOBILE  */}
      <MobileNav setNavOpen={setNavOpen} navOpen={navOpen} />

      {/* NAV DESKTOP */}
      <DesktopNav />
      {/* NAV MENU ICON */}
      {navOpen ? (
        <IoClose
          onClick={() => setNavOpen(!navOpen)}
          className={`border-white/50 rounded border-1  text-4xl sm:hidden ${
            isScrolled ? "text-White" : "text-Gray"
          }`}
        />
      ) : (
        <HiMenu
          onClick={() => setNavOpen(!navOpen)}
          className={`border-white/50 rounded border-1 text-shadow-2xs text-4xl sm:hidden ${
            isScrolled ? "text-White" : "text-Gray"
          }`}
        />
      )}
    </header>
  );
};

export default Header;
