import { Experience } from "./components/Experience";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[95vw] h-[100vh] shadow-[inset_500px_0_300px_#000000bb] top-0 fixed -z-10" />
      <Introduction />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
