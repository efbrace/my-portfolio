import { FaFileDownload } from "react-icons/fa";

type props = {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
};

const MobileNav = ({ setNavOpen, navOpen }: props) => {
  return (
    <nav>
      <ul
        className={`animate-navBar-animation origin-top ${
          navOpen ? "flex" : "hidden"
        } list-none w-screen sm:hidden absolute top-15 left-0 bg-Black/60 flex-col items-center justify-evenly h-[30vh] max-h-[200px]`}
      >
        <a
          onClick={() => setNavOpen(false)}
          href="#about"
          className="w-[100%] h-[100%]  text-White bg-Black/60 text-center grid place-content-center hover:bg-White/70 hover:text-Black focus:bg-White/70 focus:text-Black "
        >
          <li>About me</li>
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#skills"
          className="w-[100%] h-[100%]  text-White bg-Black/60 text-center grid place-content-center hover:bg-White/70 hover:text-Black focus:bg-White/70 focus:text-Black "
        >
          <li>Skills</li>
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#portfolio"
          className="w-[100%] h-[100%]  text-White bg-Black/60 text-center grid place-content-center hover:bg-White/70 hover:text-Black focus:bg-White/70 focus:text-Black "
        >
          <li>Portfolio</li>
        </a>
        <a
          onClick={() => setNavOpen(false)}
          href="#contact"
          className="w-[100%] h-[100%]  text-White bg-Black/60 text-center grid place-content-center hover:bg-White/70 hover:text-Black focus:bg-White/70 focus:text-Black "
        >
          <li>Contact</li>
        </a>

        <a
          onClick={() => setNavOpen(false)}
          href="./src/assets/my-resume.pdf"
          target="_blank"
          className="w-[100%] h-[100%]  text-White bg-Black/60 text-center grid place-content-center hover:bg-White/70 hover:text-Black focus:bg-White/70 focus:text-Black "
        >
          <li className="py-[0.2rem] px-3.5 rounded-sm text-sm text-Black transition-all duration-200 ease-in-out bg-White hover:bg-LightGray hover:text-Black flex items-center gap-1">
            Download CV <FaFileDownload />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default MobileNav;
