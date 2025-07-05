import AboutMe from "./landing/AboutMe";
import Contact from "./landing/Contact";
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
      <Contact />
    </>
  );
};

export default page;
