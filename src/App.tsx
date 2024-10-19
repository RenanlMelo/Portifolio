import React, { useRef } from "react";
import { Experience } from "./components/Experience";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import "./components.css";

function App() {
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop, // Tente remover a parte - window.innerHeight / 2
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section>
        <Navbar
          onSectionClick={scrollTo}
          refs={[introductionRef, experienceRef, projectsRef, contactRef]}
        />
      </section>
      <Introduction ref={introductionRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
    </>
  );
}

export default App;
