import heroImage from "../assets/hero-image1.png";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

type mySocials = { link: string; icon: React.ReactElement }[];

const socials: mySocials = [
  {
    link: "https://www.youtube.com/@efbmediaa?sub_confirmation=1",
    icon: <FaYoutube />,
  },
  {
    link: "https://github.com/efbrace",
    icon: <FaGithub />,
  },
  {
    link: "https://www.linkedin.com/in/flintwood-brace/",
    icon: <FaLinkedin />,
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="lg:h-screen md:min-h-auto min-h-screen lg:px-24  sm:px-6 pt-12 flex bg-[url(/public/assets/heroSvg.svg)] bg-cover md:bg-[180%] flex-col-reverse sm:flex-row relative overflow-hidden"
    >
      <div className="sm:w-[50%] overflow-hidden font-Raleway flex flex-col justify-center gap-4 sm:static absolute bottom-0 left-0 sm:bg-transparent bg-Black/75 sm:text-Black text-White px-4 pt-4">
        <h2 className="lg:text-4xl text-3xl font-semibold">Hi, I am</h2>
        <h1 className="lg:text-6xl text-4xl font-bold">
          Ebenezer Flintwood Brace
        </h1>
        <p className="text-lg sm:font-bold text-Gray sm:ml-1">
          A passionate Junior Developer focused on building clean and scalable
          web applications.
        </p>
        <div className="p-4 flex items-center gap-8 text-3xl">
          {socials.map((s, i) => (
            <a
              href={s.link}
              target="_blank"
              key={i}
              className="border-Gray border p-1.5 rounded-4xl shadow-sm shadow-Black/50 transition duration-300 ease-in-out cursor-pointer hover:transform hover:scale-95 hover:inset-shadow-sm hover:shadow-White"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="grid place-items-center sm:w-[50%] overflow-hidden sm:h-auto h-[calc(100vh-60px)]  bg-transparent">
        <img
          src={heroImage}
          alt="A picture of Me"
          className=" sm:w-[73%] lg:-mt-4 md:mt-1 sm:h-auto w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
