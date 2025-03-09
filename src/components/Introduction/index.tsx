import React, { useRef } from "react";

export const Introduction = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <>
      <div
        className="h-[100vh] w-[100vw] flex justify-start items-center"
        ref={ref}
      >
        <Content />
      </div>
    </>
  );
});

export const Content = () => {
  return (
    <article id="introduction" className="lg:px-96">
      <h1 className="text-white font-bold text-3xl lg:text-7xl p-12 pb-3 pr-0">
        Hi, I'am <br />
        <strong className="text-[var(--main)]">Renan Melo</strong>
      </h1>
      <p className="text-xl lg:text-4xl text-white pl-12 pb-8 xl:pb-12">
        a Web Developer
      </p>
      <h2 className="text-[#ccc] font-semibold md:text-lg lg:text-xl pb-6 pl-12">
        Building Interactive User Experiences with Modern Web Technologies
      </h2>
      <a
        className="border border-[#aaa] px-2 py-1 text-lg text-[#aaa] mx-auto"
        href="/Resume.pdf"
        download
      >
        Download Resume
      </a>
      <a href="mailto:renanlaramelo@gmail.com" target="_blank">
        Contact me
      </a>
    </article>
  );
};
