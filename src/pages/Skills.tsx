import Heading from "../components/Heading";
import { experience, softSkills, techSkills } from "../data/skills";

const Skills = () => {
  return (
    <section
      className="scroll-mt-16  mt-4 flex flex-col items-center gap-4 px-6"
      id="skills"
    >
      <Heading>Skills</Heading>
      {
        /* TECH SKILLS  */
        techSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:px-12 max-w-[1000px] "
          >
            <h3 className="text-sm sm:text-md font-bold uppercase tracking-widest border-Black border-b-1 w-full">
              {skill.title}
            </h3>
            <div className="flex flex-wrap justify-start gap-x-6 sm:gap-x-12 lg:gap-x-16">
              {skill.skills.map((skill, index) => (
                <span
                  className="flex flex-col items-center gap-3  mt-4 min-w-[60px]"
                  key={index}
                >
                  <img
                    className="w-10 h-10 md:w-15 md:h-15 object-contain"
                    src={skill.imgSrc}
                  />
                  <p className="text-md text-Black/60">{skill.label}</p>
                </span>
              ))}
            </div>
          </div>
        ))
      }
      {/* --- SOFT SKILLS --- */}
      <div className="flex flex-col w-full sm:px-12 max-w-[1000px] mt-8">
        <h3 className="text-sm sm:text-md font-bold uppercase tracking-widest border-black border-b w-full mb-2">
          Soft Skills
        </h3>
        <ul className="list-disc pl-5 text-left space-y-1">
          {softSkills.map((skill, index) => (
            <li
              className="text-md text-Black/70 border-b-1 border-Black/30"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* --- EXPERIENCE --- */}
      <div className="flex flex-col w-full sm:px-12 max-w-[1000px] mt-8">
        <h3 className="text-sm sm:text-md font-bold uppercase tracking-widest border-black border-b w-full mb-2">
          Experience
        </h3>
        <div className="list-disc pl-5 text-left space-y-2">
          {experience.map((expi, index) => (
            <div
              className="text-lg text-Black/70 border-b-1 border-Black/30"
              key={index}
            >
              <h4 className="text-sm uppercase">{expi.role}</h4>
              <p className="text-sm text-gray-700">
                {expi.organization} – {expi.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
