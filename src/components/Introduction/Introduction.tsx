"use client";
import React from "react";
import { motion } from "framer-motion";
import { introductionData } from "../../data/introductionData";

export const Introduction = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <div
      className="min-h-[80vh] lg:min-h-screen mb-12 lg:mb-0 flex justify-start items-center"
      ref={ref}
    >
      <Content />
    </div>
  );
});

export const Content = () => {
  const { name, title, subtitle, resumeUrl, whatsappUrl } = introductionData;

  return (
    <article
      id="introduction"
      className="px-8 lg:px-96 py-12 h-auto lg:h-auto flex lg:block flex-col justify-center items-start bg-transparent backdrop-blur-md lg:backdrop-blur-none"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-white font-bold text-5xl lg:text-7xl py-12 pb-3 pr-0">
          Hi, I’m <br />
          <strong className="text-[var(--main)]">{name}</strong>
        </h2>
        <p className="text-3xl lg:text-4xl text-white pb-8 xl:pb-12">
          a {title}
        </p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-[var(--white)] font-semibold text-xl pb-6 "
      >
        {subtitle}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col lg:flex-row justify-start gap-x-8 gap-y-8 items-start lg:items-center py-4"
      >
        <a
          className="font-semibold border border-[var(--main)] rounded-full px-4 py-2 text-xl text-[var(--main)] shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] duration-150 hover:bg-[var(--main)] hover:text-[var(--white)]"
          href={resumeUrl}
          download
        >
          Download Resume
        </a>

        <a
          className="font-semibold border border-[var(--main)] rounded-full px-4 py-2 text-xl text-[var(--main)] shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] duration-150 hover:bg-[var(--main)] hover:text-[var(--white)]"
          href={whatsappUrl}
          target="_blank"
        >
          Contact me via WhatsApp
        </a>
      </motion.div>
    </article>
  );
};
