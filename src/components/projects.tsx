"use client";
import ProjectCard from "./projectCard";

type ProjectsProps = {};

const PROJECTS = [
  { title: "Neesh" },
  {
    title: "StoryShare",
  },
  { title: "Meetable" },
  { title: "First Responder" },
  { title: "Census Explorer" },
  { title: "Bullpen" },
  { title: "Sync" },
];

const Projects = (props: ProjectsProps) => {
  return (
    <div
      id="projects"
      className="flex flex-col flex-wrap w-full px-2 sm:px-10 md:px-10 lg:px-10"
    >
      <h2 className="font-extralight my-2">projects</h2>
      <div className="flex flex-row justify-center flex-wrap w-full gap-2">
        {PROJECTS.map(() => (
          <ProjectCard />
        ))}
      </div>
    </div>
  );
};

export default Projects;
