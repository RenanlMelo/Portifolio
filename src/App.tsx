import { useState } from "react";
import { Experience } from "./components/Experience";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {

  const [open, setOpen] = useState(true);
  const [size, setSize] = useState<number | undefined>(undefined);

  function handleToggle() {
    const navbar = document.getElementById('navbar');
    console.log('Navbar element:', navbar);
    navbar?.classList.toggle('activeNavbar', !open);
    setOpen(!open)
  }

  return (
    <>
      <button
        onClick={handleToggle}
        style={{ left: open ? `${size}px` : "0" }}
        className="bg-black/50 text-white aspect-square px-4 py-2 fixed top-1/2 left-0"
      >
        {open ? "<" : ">"}
      </button>
      <section>
        <Navbar open={open} setOpen={setOpen} size={size} setSize={setSize} />
        <div className="w-[95vw] h-[100vh] shadow-[inset_500px_0_300px_#000000bb] top-0 fixed -z-10" />
      </section>
      <Introduction />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
