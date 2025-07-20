import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import arrow from "../assets/double-arrow.svg";

const Footer = () => {
  return (
    <footer className="py-8 bg-Black text-White flex flex-col items-center gap-4">
      <a href="#top">
        <img
          src={arrow}
          alt="Back to top arrow"
          className="w-8 hover:opacity-50 cursor-pointer transition"
        />
      </a>
      <a href="#">
        <h4 className="tracking-wide font-light hover:opacity-50 cursor-pointer transition">
          Back To Top
        </h4>
      </a>

      <div className="flex justify-evenly w-[50%] max-w-[300px] text-2xl">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:opacity-50 transition" />
        </a>
        <a
          href="https://github.com/efbrace"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:opacity-50 transition" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:opacity-50 transition" />
        </a>
      </div>

      <p className="text-sm text-Black/60">
        <span>@2025 EFB</span> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
