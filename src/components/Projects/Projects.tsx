import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import { ExternalLink, Github } from "lucide-react";

export const Projects = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="grid items-center justify-evenly mb-12 mt-32 lg:my-48"
    >
      <div className="text-[var(--white)] text-center">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.75 }}
          className="text-2xl lg:text-4xl p-2 pb-6 lg:p-8"
        >
          Projects - Web Development
        </motion.h2>

        {projects.map((prj, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            key={index}
            className="flex flex-col lg:flex-row w-full -z-30"
          >
            <img
              className="mx-auto lg:w-4/5 -z-20"
              src={prj.img}
              alt={prj.altImg}
            />
            <div className="mx-0 lg:mx-auto w-auto lg:w-1/5 px-4 py-8 text-start bg-black z-30">
              <a
                href={prj.url}
                target="_blank"
                className="text-[var(--white)] text-base lg:text-2xl z-40 hover:underline underline-offset-4"
              >
                {prj.name}
              </a>

              <h3 className="text-sm lg:text-xl mt-[1vh] mb-[3vh]">
                {prj.description}
              </h3>

              <h4 className="text-base lg:text-base">Technologies Used:</h4>

              <div className="text-sm lg:text-base">
                {/* Frontend */}
                {prj.technologies.frontend.length > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold">Front-end:</span>
                    <ul className="list-inside list-disc ml-4">
                      {prj.technologies.frontend.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Backend */}
                {prj.technologies.backend.length > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold">Back-end:</span>
                    <ul className="list-inside list-disc ml-4">
                      {prj.technologies.backend.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* API */}
                {prj.technologies.api.length > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold">API:</span>
                    <ul className="list-inside list-disc ml-4">
                      {prj.technologies.api.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Database */}
                {prj.technologies.database.length > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold">Database:</span>
                    <ul className="list-inside list-disc ml-4">
                      {prj.technologies.database.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-x-2 items-center justify-evenly pt-4">
                <a
                  href={prj.repository}
                  target="_blank"
                  className="flex justify-start px-4 py-2 rounded-full border-2 border-[var(--lightGrey)] gap-x-2 h-full items-center text-base lg:text-sm text-[var(--white)] hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={24} />
                  Repository
                </a>

                <a
                  href={prj.url}
                  target="_blank"
                  className="flex justify-start gap-x-2 px-4 py-2 rounded-full border-2 border-[var(--lightGrey)] items-center text-base lg:text-sm text-[var(--white)] hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <ExternalLink size={22} />
                  Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
