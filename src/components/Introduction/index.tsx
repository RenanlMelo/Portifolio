"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

export const Introduction = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <>
      <div
        className="h-[100lvh] w-[100vw] mb-12 lg:mb-0 flex justify-start items-center"
        ref={ref}
      >
        <Content />
      </div>
    </>
  );
});

export const Content = () => {
  return (
    <>
      <article
        id="introduction"
        className="px-4 lg:px-96 py-12 h-full lg:h-auto flex lg:block flex-col justify-center items-start bg-black/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-white font-bold text-5xl lg:text-7xl p-12 pb-3 pr-0">
            Hi, I'am <br />
            <strong className="text-[var(--main)]">Renan Melo</strong>
          </h2>
          <p className="text-3xl lg:text-4xl text-white pl-12 pb-8 xl:pb-12">
            a Web Developer
          </p>
          {/* </motion.div> */}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-[#ccc] font-semibold text-xl pb-6 pl-12"
        >
          Building Interactive User Experiences with Modern Web Technologies
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col lg:flex-row pl-12 justify-start gap-x-4 gap-y-8 items-start lg:items-center py-4"
        >
          <a
            className="border border-[var(--main)] hover:border-[var(--main)] px-2 py-1 text-2xl text-[var(--main)] hover:text-[var(--main)] duration-150 shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] lg:mx-0"
            href="/Resume.pdf"
            download
          >
            Download Resume
          </a>
          <a
            className="border border-[var(--main)] hover:border-[var(--main)] px-2 py-1 text-2xl text-[var(--main)] hover:text-[var(--main)] duration-150 shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] file:lg:mx-0"
            href="https://wa.me/5515996839690"
            target="_blank"
          >
            Contact me via WhatsApp
          </a>
        </motion.div>
      </article>
    </>
  );
};

function StyleSheet() {
  return (
    <style>{`
      body {
        perspective: 1600px;
      }
      .cube {
        top: 350px;
        left: 60%;
        width: 400px;
        height: 400px;
        position: absolute;
        transform-style: preserve-3d;
      }
      .side {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.48;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      .front  { transform: rotateY(0deg) translateZ(200px); background: #5f41a5; }
      .right  { transform: rotateY(90deg) translateZ(200px); background: #5f41a5; }
      .back   { transform: rotateY(180deg) translateZ(200px); background: #5f41a5; }
      .left   { transform: rotateY(-90deg) translateZ(200px); background: #5f41a5; }
      .top    { transform: rotateX(90deg) translateZ(200px); background: #5f41a5; }
      .bottom { transform: rotateX(-90deg) translateZ(200px); background: #5f41a5; }
    `}</style>
  );
}
