import React from "react";
import { motion } from "framer-motion";

export const Experience = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <>
      <section
        ref={ref}
        id="experience"
        className="w-full px-8 lg:px-96 lg:py-12 lg:my-12 flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-[var(--white)] text-2xl lg:text-4xl pb-4 lg:pb-0 text-center">
            Experience
          </h2>

          <article className="pb-8 w-full pl-6 pr-4 lg:px-0">
            <h3 className="text-[var(--main)] font-bold text-base lg:text-[calc(2vw-5px)] p-2 lg:p-8 underline underline-offset-8 decoration-1 decoration-[var(--white)]">
              Web Developer
            </h3>
            <p className="text-[var(--white)] text-sm leading-7 lg:leading-normal lg:text-[calc(1.5vw-5px)]">
              I began my web development journey in May 2023 as part of a
              college project, and since then, I have been continuously
              expanding my knowledge in this vast field. Currently, my focus is
              on Front-End development with{" "}
              <strong className="text-[var(--main)]">React</strong>, and I have
              recently started learning{" "}
              <strong className="text-[var(--main)]">Node.js</strong> and{" "}
              <strong className="text-[var(--main)]">FastApi</strong>, to
              explore Back-End development.
            </p>
            <p className="text-[var(--white)] text-[calc(1.5vw-5px)]">
              I am eager to transition into the professional world of web
              development, where I am confident I will embrace every challenge
              and continuously strive to improve my skills every day.
            </p>
          </article>
        </motion.div>
        <motion.line
          className="bg-[var(--grey)] w-full h-px mb-8 lg:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        />

        <motion.article
          className="w-full pl-6 pr-4 lg:px-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 className="text-[var(--main)] font-bold text-base lg:text-[calc(2vw-5px)] p-2 lg:p-8 underline underline-offset-8 decoration-1 decoration-[var(--white)]">
            RPA Developer Intern
          </h3>
          <p className="text-[var(--white)] text-sm leading-7 lg:leading-normal lg:text-[calc(1.5vw-5px)]">
            I have been working as an RPA Developer Intern since March 2024.
            Over the year, I have gained extensive experience in{" "}
            <strong className="text-[var(--main)]">Python</strong>,{" "}
            <strong className="text-[var(--main)]">UiPath</strong>, and{" "}
            <strong className="text-[var(--main)]">Power Automate</strong>,
            along with other key development tools such as{" "}
            <strong className="text-[var(--main)]">SQLite</strong> and{" "}
            <strong className="text-[var(--main)]">APIs</strong>
          </p>
          <p className="text-[var(--white)] text-[calc(1.5vw-5px)]">
            I have been responsible for developing robust and efficient
            applications that integrate with both web and desktop software,
            enabling large-scale and precise automations.
          </p>
        </motion.article>
      </section>
    </>
  );
});
