import AboutMe from "./landing/AboutMe";
import Hero from "./landing/Hero";
import ProjectCards from "./landing/ProjectCard";
import Skills from "./landing/Skills";

const page = () => {
  return (
    <>
      <Hero />
      <ProjectCards />
      <Skills />
      <AboutMe />
    </>
  );
};

export default page;
