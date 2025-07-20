import Heading from "../components/Heading";
import { designProjects, webProjects } from "../data/portfolio";

const Portfolio = () => {
  return (
    <section
      className="scroll-mt-16  flex flex-col items-center gap-x-8 px-2 sm:px-16 mt-8"
      id="portfolio"
    >
      <Heading>Portfolio</Heading>
      <h3 className="text-sm sm:text-md font-bold uppercase tracking-widest border-black border-b w-full m-2">
        Web Development
      </h3>
      {/* WEB PROJECTS  */}
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 my-4">
        {webProjects.map((project, i) => (
          <div
            key={i}
            className=" flex flex-col items-center gap-4 p-1 sm:p-4  rounded-lg shadow-lg shadow-Black/30 text-center"
          >
            <iframe
              className="w-full rounded-lg h-[350px]   hover:shadow-lg shadow-Black/50"
              src={project.iframeSrc}
            ></iframe>
            <span className="flex flex-col h-[40%] justify-between p-2 gap-2">
              <h4 className="text-md font-bold text-Black/80">
                {project.title}
              </h4>

              <p className="self-start text-sm text-Black/70  -mt-2">
                {project.description}
              </p>
              <a href={project.url} target="_blank">
                <button className="text-md bg-White py-0.2 px-2 text-Black shadow-sm shadow-Black transition duration-200 hover:bg-Black hover:text-White cursor-pointer rounded-lg ">
                  Live Preview
                </button>
              </a>
            </span>
          </div>
        ))}
      </div>

      {/* DESIGN PROJECTS  */}
      <h3 className="text-sm sm:text-md font-bold uppercase tracking-widest border-black border-b w-full mb-2 mt-12">
        Design Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 my-4">
        {designProjects.map((design, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-1  rounded-lg shadow-lg shadow-Black/30 text-center "
          >
            <div className="h-[300px] w-full overflow-hidden  flex items-center justify-center">
              <img
                className=" w-full "
                src={design.imageSrc}
                alt={design.title}
              />
            </div>
            <span className="p-2">
              {/* <h4 className="text-md font-bold text-Black/80">
                {design.title}
              </h4> */}
              <a href={design.imageSrc} target="_blank">
                <button className="text-md bg-White py-0.2 px-2 text-Black shadow-sm shadow-Black transition duration-200 hover:bg-Black hover:text-White cursor-pointer rounded-lg ">
                  Open Image
                </button>
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
