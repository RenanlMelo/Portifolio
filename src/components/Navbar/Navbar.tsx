import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          top: h1Position - headerHeight - 20,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  };

  // Variants do framer-motion
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
    exit: { opacity: 0, y: "-100%", transition: { when: "afterChildren" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
      {/* Header */}
      <header className="fixed bg-[var(--bg)] border-b border-[var(--darker2)] py-4 lg:py-6 px-8 flex justify-between items-center w-full z-[1000]">
        <h1 className="text-[var(--white)] font-bold tracking-wider text-sm lg:text-xl max-w-[70%]">
          Renan Melo – Full-Stack Web & Automation
        </h1>

        <button
          onClick={handleToggle}
          className="relative w-11 h-9 flex flex-col justify-between items-center group focus:outline-none hover:bg-[#ffffff30] rounded-lg p-2"
        >
          <span
            className={`block h-[2px] w-full bg-[var(--white)] rounded transition-all duration-500
            ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-full bg-[var(--white)] rounded transition-all duration-500
            ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-full bg-[var(--white)] rounded transition-all duration-500
            ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </header>

      {/* FullScreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-md flex flex-col justify-center items-center z-40"
          >
            <motion.ul className="space-y-8 text-center px-8">
              {menuList.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  onClick={() => scrollToSection(index)}
                  className="cursor-pointer text-3xl lg:text-5xl text-white font-semibold relative hover:text-[var(--main)] transition-all duration-300"
                >
                  <motion.span
                    className="relative"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item}
                  </motion.span>
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--main)] origin-left scale-x-0"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
