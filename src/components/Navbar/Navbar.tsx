import React, { useState } from "react";
import { motion } from "framer-motion";

interface FullScreenMenuProps {
  sectionRefs: React.RefObject<HTMLDivElement>[];
}

export const FullScreenMenu: React.FC<FullScreenMenuProps> = ({
  sectionRefs,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList: string[] = [
    "Introduction",
    "Experience",
    "Projects",
    "Contact",
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  const scrollToSection = (index: number) => {
    const sectionRef = sectionRefs[index];

    if (sectionRef?.current) {
      const h2Element = sectionRef.current.querySelector("h2");

      if (h2Element) {
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const h1Position =
          h2Element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: h1Position - headerHeight - 20, // Ajuste para evitar que fique colado no topo
          behavior: "smooth",
        });
      }
    }

    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed bg-[var(--bg)] border-b border-[var(--darker2)] py-4 lg:py-6 px-14 lg:px-8 flex justify-between items-center w-full z-[1000]">
        <h1 className="text-[#eee] font-bold tracking-wider text-base lg:text-xl">
          Renan Melo – Full-Stack Web & Automation
        </h1>
        <span
          onClick={handleToggle}
          className="w-8 h-8 flex items-center justify-center cursor-pointer text-white text-3xl"
        >
          {isOpen ? (
            <span className="text-4xl lg:text-6xl -translate-y-1 lg:translate-y-0">
              ×
            </span>
          ) : (
            <span className="w-5 lg:w-8 flex flex-col gap-y-1 lg:gap-y-2 cursor-pointer lg:translate-y-1">
              <div className="w-full h-[2px] bg-[#ccc] transition-all" />
              <div className="w-full h-[2px] bg-[#ccc] transition-all" />
              <div className="w-full h-[2px] bg-[#ccc] transition-all" />
            </span>
          )}
        </span>
      </header>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-full bg-[var(--menu)] backdrop-blur-sm flex flex-col justify-center items-center z-40"
        >
          <ul className="text-white space-y-6 text-center px-8 -translate-y-1/3 lg:translate-y-0">
            {menuList.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(index)}
                className="cursor-pointer text-2xl lg:text-3xl group transition-colors duration-75 hover:text-[var(--main)]"
              >
                <span className="">{item}</span>
                <span className="block h-[2px] bg-[var(--main)] transform scale-x-0 origin-left transition-transform duration-75 delay-75 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </>
  );
};
