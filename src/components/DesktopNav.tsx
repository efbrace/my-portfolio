
import { FaFileDownload } from "react-icons/fa";

const DesktopNav = () => {
  return (
    <nav>
      <ul className="list-none lg:w-[48%]  sm:flex justify-evenly items-center gap-1 text-nowrap hidden ">
        <a href="#about">
          <li className="py-[0.2rem] px-3.5 rounded-4xl text-sm text-white transition-all duration-200 ease-in-out bg-Black hover:bg-White hover:text-Black">
            About me
          </li>
        </a>
        <a href="#skills">
          <li className="py-[0.2rem] px-3.5 rounded-4xl text-sm text-white transition-all duration-200 ease-in-out bg-Black hover:bg-White hover:text-Black">
            Skills
          </li>
        </a>
        <a href="#portfolio">
          <li className="py-[0.2rem] px-3.5 rounded-4xl text-sm text-white transition-all duration-200 ease-in-out bg-Black hover:bg-White hover:text-Black">
            Portfolio
          </li>
        </a>
        <a href="#contact">
          <li className="py-[0.2rem] px-3.5 rounded-4xl text-sm text-white transition-all duration-200 ease-in-out bg-Black hover:bg-White hover:text-Black">
            Contact
          </li>
        </a>

        <a href="./src/assets/my-resume.pdf" target="_blank">
          <li className="py-[0.2rem] px-3.5 rounded-4xl text-sm text-Black transition-all duration-200 ease-in-out bg-White hover:bg-LightGray hover:text-Black flex items-center gap-1">
            Download CV <FaFileDownload className="text-sm" />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default DesktopNav;
