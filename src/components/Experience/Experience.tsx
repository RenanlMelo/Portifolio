import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../../data/experienceData";

export const Experience = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="w-full px-8 lg:px-96 lg:py-12 lg:my-12 flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <h2 className="text-[var(--white)] text-2xl lg:text-4xl pb-4 text-left">
          Experience
        </h2>

        <div className="flex flex-col gap-y-12">
          {experienceData.map((exp, index) => (
            <article
              key={index}
              className="pb-4 w-full pr-4 border-b border-[var(--grey)]"
            >
              <h3 className="text-[var(--main)] font-bold text-lg lg:text-2xl p-2 lg:p-8">
                {exp.role} — {exp.company}
              </h3>
              <p className="text-[var(--white)] text-base italic mb-2">
                {exp.period}
              </p>
              <p className="text-[var(--white)] text-lg leading-7 lg:leading-8 tracking-wide">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[var(--main)] px-4 py-2 rounded-full border-2 border-[var(--darker)] text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
