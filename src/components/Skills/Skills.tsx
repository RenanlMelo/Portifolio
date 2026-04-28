import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/skillsData";

export const Skills = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <section
      ref={ref}
      id="skills"
      className="w-full px-8 lg:px-96 lg:py-12 lg:my-12 flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.15 }}
      >
        <h2 className="text-[var(--white)] text-2xl lg:text-4xl pb-8 text-left">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-2xl border border-[var(--darker)] bg-[#0d0d1a] p-6 flex flex-col gap-4 hover:border-[var(--main)] transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-[var(--main)] font-bold text-lg">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[var(--white)] text-sm px-3 py-1 rounded-full border border-[var(--darker)] bg-[#18182e] hover:border-[var(--main)] hover:text-[var(--main)] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});
