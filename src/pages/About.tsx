import Heading from "../components/Heading";
import aboutSeparator from "../assets/about-separator.svg";
import { services } from "../data/services";

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 mt-4 px-4 flex flex-col items-center gap-4">
      <Heading>About Me</Heading>
      <p className="text-sm text-center w-full sm:w-[80%] max-w-[800px] text-Black/80">
        Hi, I’m Ebenezer Flintwood Brace, a junior web developer passionate
        about creating responsive and user-friendly web experiences. I enjoy
        turning ideas into interactive interfaces using HTML, CSS, JavaScript,
        and React. <br />
        I’m constantly learning and exploring new tools to improve my skills and
        build better digital products. <br />
        Outside of coding, I have a strong interest in 3D modelling and product
        visualisation, exploring new UI trends, and continuously learning how
        design and tech can work hand in hand to solve real-world problems.
      </p>
      <h3 className="text-xs font-bold uppercase tracking-widest border-x-4 py-1 px-4 mt-1">
        Explore
      </h3>
      <img className="w-30 -mt-3" src={aboutSeparator} />
      <div className="flex flex-wrap justify-center gap-4 w-full py-4">
        {services.map(({ title, Icon, description }, index) => (
          <div
            className="rounded-sm  flex flex-col text-Black/80 text-sm sm:w-[40%] sm:p-4 p-3 shadow-md shadow-Black/30 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25),_0_1px_2px_rgba(100,100,100,0.3)]  hover:scale-98 transition duration-300"
            key={index}
          >
            <span className="flex items-center">
              <Icon className="text-4xl text-Gray" />
              <h4 className="text-4 uppercase tracking-widest -ml-4 text-shadow-2xs shadow-White font-bold">
                {title}
              </h4>
            </span>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
