import AboutMe from "./landing/AboutMe";
import Experience from "./landing/Experience";
import Hero from "./landing/Hero";
import ProjectCards from "./landing/ProjectCard";
import Skills from "./landing/Skills";

const page = () => {
  return (
    <div>
      <Hero />
      <ProjectCards />
      <Experience />
      <Skills />
      <AboutMe />
    </div>
  );
};

export default page;
