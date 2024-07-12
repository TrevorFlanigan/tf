"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import AristaLogo from "../assets/icons/aristaLogo.png";
import GenLogo from "../assets/icons/gen.png";
import TeslaLogo from "../assets/icons/teslaLogo.png";
import UBCDarkLogo from "../assets/icons/ubc-dark.png";
import UBCLightLogo from "../assets/icons/ubc-light.png";
import ExperienceBody, { ExperienceBodyProps } from "./experienceBody";
import { Sidemenu } from "./sidemenu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { Separator } from "./ui/separator";
import { useMatches } from "@mantine/core";

const Tesla = () => {
  return (
    <Image
      priority
      src={TeslaLogo}
      height={25}
      width={25}
      className="mr-1 sm:pr-2 py-1"
      alt="Tesla Logo"
    />
  );
};

const Arista = () => {
  return (
    <Image
      priority
      src={AristaLogo}
      height={25}
      width={25}
      className="mr-1 sm:pr-2 py-1"
      alt="Arista Networks Logo"
    />
  );
};

const UBCLight = () => {
  return (
    <Image
      priority
      src={UBCLightLogo}
      height={25}
      width={25}
      className="mr-1 sm:pr-2 py-1"
      alt="UBC Logo"
    />
  );
};

const UBCDark = () => {
  return (
    <Image
      priority
      src={UBCDarkLogo}
      height={25}
      width={25}
      className="mr-1 sm:pr-2 py-1"
      alt="UBC Logo"
    />
  );
};

const Gen = () => {
  return (
    <Image
      priority
      src={GenLogo}
      height={25}
      width={25}
      className="mr-1 sm:pr-2 py-1"
      alt="UBC Logo"
    />
  );
};

type ExperienceProps = {};

enum Company {
  Tesla,
  Arista,
  UBC,
  Gen,
}

// Correctly Type the Experiences object
type ExperienceMap = {
  [key in Company]: ExperienceBodyProps;
};

const EXPERIENCES: ExperienceMap = {
  [Company.Tesla]: {
    jobTitle: "Software Engineer",
    company: "Tesla",
    startDate: new Date("2023-08-01T00:00:00-08:00"),
    endDate: new Date("2024-07-01T00:00:00-08:00"),
    context: [
      "Tesla Track team - in-house timekeeping system",
      "Focused on development of timekeeping device management platform and mobile application",
    ],
    technical: [
      "Implemented computer vision and machine learning for facial recognition, decreasing queue times by 30% and increasing factory productivity",
      "Developed a kiosk application for factory workers to clock in and out, for 35,000+ users using Electron, Express, and React Native",
    ],
    impact: [
      "Migrated factories to use new timekeeping system, enabling reuse of existing hardware and saving $4 Million per year",
      "Conducted performance tests and optimized MySQL queries, achieving a 2000% increase in throughput",
    ],
    tags: ["React", "TypeScript", "Express", "MySQL", "React Native"],
  },
  [Company.Arista]: {
    jobTitle: "Software Engineer Intern",
    company: "Arista Networks",
    startDate: new Date("2022-05-01T00:00:00-08:00"),
    endDate: new Date("2022-09-01T00:00:00-08:00"),
    context: ["CloudVision Platform team - network management software"],
    technical: [
      "Built internal tools in Go, Python and TypeScript to increase developer productivity",
      "Created network router simulation tool for testing network configurations",
      "Constructed linter in Python and integrated with Jenkins CI to automatically detect and fix config issues during deployment",
    ],
    impact: [
      "Prevented common configuration issues by automating configuration checks",
      "Device simulation tool saves 100+ developers 30 minutes per day",
    ],
    tags: ["Golang", "React", "TypeScript", "Python", "Jenkins"],
  },
  [Company.UBC]: {
    jobTitle: "Student Developer → Student Mentor",
    company: "UBC aws cloud innovation center",
    startDate: new Date("2021-01-01T00:00:00-08:00"),
    endDate: new Date("2022-04-01T00:00:00-08:00"),
    context: [
      "Developer turned mentor for the UBC Cloud Innovation Centre",
      "Built prototypes for Canadian Health and Wellness companies, powered by AWS",
    ],
    technical: [
      "Developed React video call application with WebRTC, providing first responders remote medical expertise",
      "Engineered interactive map displaying donor insights for over 100 GB of census data using keras and D3.js",
    ],
    impact: [
      "Mentored students in AWS Lambda, DynamoDB, and AWS Amplify, helping them complete prototypes",
      "Delivered technical presentations to students on AWS CloudFormation, AWS CDK, and git",
      "Contributed to the UBC CIC becoming the most successful CIC across the globe",
    ],
    tags: ["React", "TypeScript", "Python", "AWS", "D3.js", "WebRTC"],
  },
  [Company.Gen]: {
    jobTitle: "Software Engineer Intern",
    company: "Gen Digital",
    startDate: new Date("2020-04-01T00:00:00-08:00"),
    endDate: new Date("2020-12-01T00:00:00-08:00"),
    context: [
      "canadian fintech startup focusing on digital identity",
      "researched and developed with experimental technologies",
    ],
    technical: [
      "Built React and Node.js web wallet for verifying digital credentials",
      "Researched the novel web bluetooth API for secure communication between web and mobile wallets",
      "Upgraded to DIDConnect protocol, improving transaction security and becoming blockchain agnostic",
    ],
    impact: ["Web wallet demonstrated on company website"],
    tags: ["React", "TypeScript", "Python", "Vue", "Blockchain"],
  },
};

const Experience = (props: ExperienceProps) => {
  const { resolvedTheme } = useTheme();
  const small = useMatches({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });
  // render the experienceBody component based on the company selected

  const [company, setCompany] = useState(Company.Tesla);

  return (
    <div className="flex w-full px-2 items-center sm:px-10 md:px-10 lg:px-10 flex-col mt-2">
      {!small && (
        <>
          <ResizablePanelGroup
            direction={"horizontal"}
            className="h-full border rounded-lg"
          >
            <ResizablePanel className="h-full max-w-14 sm:max-w-72 flex flex-col">
              <h2 className="font-extralight py-2 ml-4">work experience</h2>
              <Separator />
              <div className="pr-0 max-w-12 sm:px-4 sm:max-w-72">
                <Sidemenu
                  links={[
                    {
                      title: small ? "" : "Tesla",
                      icon: Tesla,
                      variant: company === Company.Tesla ? "default" : "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        setCompany(Company.Tesla);
                      },
                    },
                    {
                      title: small ? "" : "Arista Networks",
                      icon: Arista,
                      variant: company === Company.Arista ? "default" : "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        setCompany(Company.Arista);
                      },
                    },
                    {
                      title: small ? "" : "UBC aws cloud innovation center",
                      icon: resolvedTheme === "dark" ? UBCDark : UBCLight,
                      variant: company === Company.UBC ? "default" : "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        setCompany(Company.UBC);
                      },
                    },
                    {
                      title: small ? "" : "Gen Digital",
                      icon: Gen,
                      variant: company === Company.Gen ? "default" : "ghost",
                      onClick: (e) => {
                        e.preventDefault();
                        setCompany(Company.Gen);
                      },
                    },
                  ]}
                />
              </div>
            </ResizablePanel>

            <ResizableHandle />
            <ResizablePanel>
              <ExperienceBody
                jobTitle={EXPERIENCES[company].jobTitle}
                company={EXPERIENCES[company].company}
                startDate={EXPERIENCES[company].startDate}
                endDate={EXPERIENCES[company].endDate}
                context={EXPERIENCES[company].context}
                technical={EXPERIENCES[company].technical}
                impact={EXPERIENCES[company].impact}
                tags={EXPERIENCES[company].tags}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </>
      )}
      {small && (
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-[200px] w-full rounded-lg border"
        >
          <div>
            <ResizablePanel
              className="flex flex-row justify-evenly items-center"
              defaultSize={25}
            >
              <h2 className="font-extralight py-2 ml-2">work experience</h2>
              <Sidemenu
                orientation="horizontal"
                links={[
                  {
                    title: small ? "" : "Tesla",
                    icon: Tesla,
                    variant: company === Company.Tesla ? "default" : "ghost",
                    onClick: (e) => {
                      e.preventDefault();
                      setCompany(Company.Tesla);
                    },
                  },
                  {
                    title: small ? "" : "Arista Networks",
                    icon: Arista,
                    variant: company === Company.Arista ? "default" : "ghost",
                    onClick: (e) => {
                      e.preventDefault();
                      setCompany(Company.Arista);
                    },
                  },
                  {
                    title: small ? "" : "UBC",
                    icon: resolvedTheme === "dark" ? UBCDark : UBCLight,
                    variant: company === Company.UBC ? "default" : "ghost",
                    onClick: (e) => {
                      e.preventDefault();
                      setCompany(Company.UBC);
                    },
                  },
                  {
                    title: small ? "" : "Gen Digital",
                    icon: Gen,
                    variant: company === Company.Gen ? "default" : "ghost",
                    onClick: (e) => {
                      e.preventDefault();
                      setCompany(Company.Gen);
                    },
                  },
                ]}
              />
            </ResizablePanel>
          </div>
          <ResizableHandle />
          <div>
            <ResizablePanel>
              <ExperienceBody
                jobTitle={EXPERIENCES[company].jobTitle}
                company={EXPERIENCES[company].company}
                startDate={EXPERIENCES[company].startDate}
                endDate={EXPERIENCES[company].endDate}
                context={EXPERIENCES[company].context}
                technical={EXPERIENCES[company].technical}
                impact={EXPERIENCES[company].impact}
                tags={EXPERIENCES[company].tags}
              />
            </ResizablePanel>
          </div>
        </ResizablePanelGroup>
      )}
    </div>
  );
};

export default Experience;
