import React from "react";
import HTML from "../public/assests/skills/html.png";
import CSS from "../public/assests/skills/css.png";
import JS from "../public/assests/skills/javascript.png";
import REACT from "../public/assests/skills/react.png";
import NEXT from "../public/assests/skills/nextjs.png";
import TAILWIND from "../public/assests/skills/tailwind.png";
import MUI from "../public/assests/skills/mui.png";
import GITHUB from "../public/assests/skills/github1.png";
import Image from "next/image";

const skillsList = [
  {
    image: HTML,
    name: "HTML",
  },
  {
    image: CSS,
    name: "CSS",
  },
  {
    image: JS,
    name: "JavaScript",
  },
  {
    image: REACT,
    name: "React JS",
  },
  {
    image: NEXT,
    name: "Next JS",
  },
  {
    image: MUI,
    name: "Material UI",
  },
  {
    image: TAILWIND,
    name: "Tailwind css",
  },
  {
    image: GITHUB,
    name: "Github",
  },
];

const Skills = () => {
  return (
   <div className="bg-[#ecf0f3]" id="skills">
     <div id="skills" className="w-[80%] mx-auto lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#4E3636] font-extrabold text-2xl">
          Skills
        </p>
        <h2 className="py-4 text-2xl font-extrabold">My tools of choice</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList.map((skill) => (
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.image} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Skills;
