import React from "react";
import Blog from "../public/assests/projects/blog.png";
import Movilla from "../public/assests/projects/movilla.png";
import Cake from "../public/assests/projects/cake-town.png";
import Sorter from "../public/assests/projects/sorter.png";
import ProjectItem from "./ProjectItem";

const projectsList = [
  {
    title: "Movilla | Movie app",
    image: Movilla,
    stack: "React js",
    url: "https://movilla.netlify.app/",
    path:'/Movilla',
    code:'https://github.com/Biyinzika-Joshua-J/Movila',
  },
  {
    title: "Sorting Algorithm Visualizer",
    image: Sorter,
    stack: "React js",
    url: "https://cs-sorting-algorithms-visualizer.netlify.app/",
    path:'/SortingAlgos',
    code:'https://github.com/Biyinzika-Joshua-J/sorting-algorithm-animations',
  },
  {
    title: "Computer science blog",
    image: Blog,
    stack: "Wordpress",
    url: "https://soarwithcode.com/",
    code:'',
    path:'/csblog'
  },
  {
    title: "Cake town landing page",
    image: Cake,
    stack: "React js",
    url: "https://cake-town.netlify.app/",
    code:'',
    path:'/CakeTown'
  },
];

const Projects = () => {
  return (
    <div className="bg-[#ecf0f3] py-8" id="projects">
      <div className="mx-auto w-[80%]">
        <div className="">
          <h1 className="text-3xl font-extrabold">PROJECTS</h1>
          <h2 className="text-2xl font-extrabold">
            Majestic Milestones: Noteworthy Projects Collection
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 pt-8">
          {projectsList.map((project) => (
            <div className="col-span-2">
              <ProjectItem
                title={project.title}
                image={project.image}
                stack={project.stack}
                url={project.url}
                code={project.code}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
