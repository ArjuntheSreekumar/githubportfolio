// @flow strict
import { skillsData } from "@/utils/data/skills";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

function Skills() {
  // Map skills to corresponding icons
  const skillIcons = {
    'React': <FaReact size={40} className="text-[#61DAFB]" />,
    'Node.js': <FaNodeJs size={40} className="text-[#68A063]" />,
    'JavaScript': <FaJs size={40} className="text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript size={40} className="text-[#3178C6]" />,
    'HTML': <FaHtml5 size={40} className="text-[#E34F26]" />,
    'CSS': <FaCss3Alt size={40} className="text-[#1572B6]" />,
    'Next.js': <SiNextdotjs size={40} />,
    'Tailwind CSS': <SiTailwindcss size={40} className="text-[#06B6D4]" />,
    'MongoDB': <SiMongodb size={40} className="text-[#47A248]" />,
    'Git': <FaGitAlt size={40} className="text-[#F05032]" />,
    // Add more mappings as needed
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div 
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-10 w-10 flex items-center justify-center">
                    {skillIcons[skill] || <span className="text-white text-2xl">💻</span>}
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;