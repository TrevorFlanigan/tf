import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
