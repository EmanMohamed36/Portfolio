import Hero from "../components/sections/hero/Hero";
import About from "../components/sections/about/About";
import Services from "../components/sections/services/Services";
import ProjectsCarousel from "../components/sections/projects/ProjectsCarousel";
import Experience from "../components/sections/experience/Experience";
import Contact from "../components/sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsCarousel />
      <Experience />
      <Contact />
    </>
  );
}
