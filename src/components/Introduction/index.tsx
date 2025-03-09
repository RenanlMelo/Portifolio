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
    <article id="introduction" className="px-4 lg:px-96 py-12">
      <h2 className="text-white font-bold text-5xl lg:text-7xl p-12 pb-3 pr-0">
        Hi, I'am <br />
        <strong className="text-[var(--main)]">Renan Melo</strong>
      </h2>
      <p className="text-3xl lg:text-4xl text-white pl-12 pb-8 xl:pb-12">
        a Web Developer
      </p>
      <h2 className="text-[#ccc] font-semibold text-xl pb-6 pl-12">
        Building Interactive User Experiences with Modern Web Technologies
      </h2>
      <div className="flex flex-col lg:flex-row pl-12 justify-start gap-x-4 gap-y-8 items-start lg:items-center py-4">
        <a
          className="border border-[var(--main)] hover:border-[var(--main)] px-2 py-1 text-2xl text-[var(--main)] hover:text-[var(--main)] duration-150 shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] lg:mx-0"
          href="/Resume.pdf"
          download
        >
          Download Resume
        </a>
        <a
          className="border border-[var(--main)] hover:border-[var(--main)] px-2 py-1 text-2xl text-[var(--main)] hover:text-[var(--main)] duration-150 shadow-[6px_5px_7px_var(--darker)] hover:shadow-[6px_5px_12px_var(--main)] file:lg:mx-0"
          href="mailto:renanlaramelo@gmail.com"
          target="_blank"
        >
          Contact me
        </a>
      </div>
    </article>
  );
};
