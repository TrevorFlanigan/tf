"use client";
import { Anchor } from "@mantine/core";
import { ExternalLink, Github, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import bullpen from "../assets/bullpen.jpg";
import censusExplorer from "../assets/census-explorer.jpg";
import firstResponder from "../assets/firstresponder1.jpg";
import meetablePhones from "../assets/meetable_phones.png";
import neeshPhonesDark from "../assets/neesh_phones_dark.jpg";
import neeshPhonesLight from "../assets/neesh_phones_light.jpg";
import storyshareDark from "../assets/storyshare-dark.jpg";
import storyshareLight from "../assets/storyshare-light.jpg";
import ProjectCard, { ProjectType } from "./projectCard";
type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  const { resolvedTheme } = useTheme();
  const PROJECTS: ProjectType[] = [
    {
      title: "Neesh",
      description:
        "A nonprofit community mobile app where LGBTQ2+ individuals can feel affirmed and alleviate anxieties by asking questions and sharing life stories.",
      img: resolvedTheme === "dark" ? neeshPhonesDark : neeshPhonesLight,
      links: [
        <Anchor
          key={"neeshsite"}
          href="https://neeshapp.webflow.io"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <ExternalLink className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
        <Anchor
          key={"neeshyt"}
          href="https://www.youtube.com/watch?v=KRFYNcZKZSQ"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <Youtube className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
      ],
      tags: ["typescript", "expo", "aws", "react native"],
    },
    {
      title: "StoryShare",
      description: "A platform for authors to sell their stories",
      img: resolvedTheme === "dark" ? storyshareDark : storyshareLight,
      imgClassName: "rounded-lg",
      links: [
        <Anchor
          key={"storyshare"}
          href="https://storyshare.me"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <ExternalLink className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
      ],
      tags: ["typescript", "firebase", "react", "tailwindcss"],
    },
    {
      title: "Meetable",
      description: "A mobile app for reconnecting UBC students after COVID-19",
      img: meetablePhones,
      tags: ["typescript", "react native", "aws"],
    },
    {
      title: "First Responder",
      description:
        "a mobile app and dashboard for assisting first responders with medical expertise during emergencies",
      img: firstResponder,
      imgClassName: "rounded-lg h-[200px] w-auto",
      links: [
        <Anchor
          key={"firstrespondersite"}
          href="https://cic.ubc.ca/project/virtual-communication-for-remote-first-responders/"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <ExternalLink className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
        <Anchor
          key={"firstrespondergithub"}
          href="https://github.com/UBC-CIC/first-responder-mobile-app"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <Github className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
      ],
      tags: ["React", "AWS", "PWA", "WebRTC"],
    },
    {
      title: "Census Explorer",
      description:
        "An interactive dashboard for non-profits to explore census and donor data for demographic insights",
      img: censusExplorer,
      imgClassName: "bg-contain",
      links: [
        <Anchor
          key={"censusexplorersite"}
          href="https://cic.ubc.ca/project/empowering-nonprofits-to-make-decisions-for-good-unlocking-census-data/"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <ExternalLink className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
        <Anchor
          key={"censusexplorergithub"}
          href="https://github.com/UBC-CIC/census-explorer"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <Github className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
      ],
      tags: ["React", "AWS", "D3.JS", "Leaflet"],
    },
    {
      title: "Bullpen",
      description: "website for expanding your music taste with spotify's API",
      tags: ["Oauth2", "Spotify API", "React"],
      imgClassName: "rounded-lg h-[200px]",
      img: bullpen,
      links: [
        <Anchor
          key={"bullpen"}
          href="https://bullpen.trevorflanigan.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          className="hover:bg-transparent"
          size="icon"
        >
          <ExternalLink className="text-foreground h-[1.2rem] w-[1.2rem]" />
        </Anchor>,
      ],
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col flex-wrap w-full px-2 sm:px-10 md:px-10 lg:px-10"
    >
      <h2 className="font-extralight my-2">projects</h2>
      <div className="flex flex-row justify-center flex-wrap w-full gap-2">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            links={project.links}
            img={project.img}
            imgClassName={project.imgClassName}
            title={project.title}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
