import React, { useRef } from "react";
import { Experience } from "./components/Experience/Experience";
import { Introduction } from "./components/Introduction/Introduction";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "./components.css";
import { FullScreenMenu } from "./components/Navbar/Navbar";
import { BlobCursor } from "./components/Blob/BlobCursor";

function App() {
  const introductionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <BlobCursor />
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
