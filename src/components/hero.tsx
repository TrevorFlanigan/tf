"use client";

type HeroProps = {};
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import justme from "../assets/justme.png";
import selfie from "../assets/selfie.jpg";

const Hero = (props: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const img = new window.Image();
    img.src = selfie.src;

    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = () => {
      console.error("Background image failed to load");
    };
  }, []);

  return (
    <div
      id="home"
      className="flex lowercase flex-col w-full py-20 bg-cover bg-center origin relative"
      style={{
        maxWidth: "2000px",
        filter: resolvedTheme === "dark" ? "grayscale(100%)" : "",
        backgroundImage: `url(${selfie.src})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 60%",
      }}
    >
      <div
        style={{
          filter: resolvedTheme === "dark" ? "grayscale(100%)" : "",
          backgroundImage: `url(${justme.src})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 60%",
          pointerEvents: "none",
        }}
        className="absolute py-20 top-0 w-full h-full max-w-[2000px]"
      />
      <div className=" flex flex-1 w-full justify-center">
        <div className="inline-flex w-fit flex-col">
          <h1
            style={{ letterSpacing: ".2rem" }}
            className={cn(
              "transition-all text-background inline-block w-fit font-black text-3xl lg:text-8xl sm:text-6xl md:text-7xl"
            )}
          >
            TREVOR FLANIGAN
          </h1>
          <div className="flex w-full justify-between">
            <h2 className="text-background text-md sm:text-xl font-light">
              Software Engineer
            </h2>
            <h2 className="text-background text-md sm:text-xl font-light">
              Vancouver | SF
            </h2>
          </div>
          <div className="flex w-full justify-between">
            <div className="pt-5 text-white flex flex-col space-y-1">
              <Link
                rel="noopener noreferrer"
                className="text-background"
                target="_blank"
                href="https://github.com/trevorflanigan"
              >
                <Github />
              </Link>
              <a
                rel="noopener noreferrer"
                className="text-background"
                target="_blank"
                href="https://linkedin.com/in/trevorflanigan"
              >
                <Linkedin />
              </a>
              <a
                rel="noopener noreferrer"
                className="text-background"
                target="_blank"
                href="https://instagram.com/trevorflan"
              >
                <Instagram />
              </a>
              <a
                rel="noopener noreferrer"
                className="text-background"
                target="_blank"
                href="mailto:trevorflanigan@alumni.ubc.ca"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
