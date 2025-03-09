import React, { useRef } from "react";
import { Experience } from "./components/Experience";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./components.css";
import { FullScreenMenu } from "./components/Navbar";

function App() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <FullScreenMenu
        sectionRefs={[introductionRef, experienceRef, projectsRef, contactRef]}
      />

      <Introduction ref={introductionRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
