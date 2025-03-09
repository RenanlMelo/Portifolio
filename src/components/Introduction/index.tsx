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
      <h1 className="text-white font-bold text-2xl lg:text-7xl p-12 pb-3 pr-0">
        Hi,
        <br /> I'am <strong className="text-[var(--main)]">Renan Melo</strong>
        <br />a Web Developer
      </h1>
      <h2 className="text-[#ccc] font-semibold md:text-lg lg:text-xl pb-6 pl-12">
        Building Interactive User Experiences with Modern Web Technologies
      </h2>
    </article>
  );
};
