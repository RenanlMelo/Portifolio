import React from "react";

export const Experience = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  return (
    <>
      <section
        ref={ref}
        id="experience"
        className="w-full px-96 py-12 my-12 flex flex-col justify-center items-center"
      >
        <h1 className="text-[var(--white)] text-[calc(2.5vw-5px)] uppercase">
          Experience
        </h1>
        <article className="pb-8">
          <h2 className="text-[var(--white)] font-bold text-[calc(2vw-5px)] p-8 underline underline-offset-8 decoration-1 decoration-[var(--white)">
            Web Developer
          </h2>
          <p className="text-[var(--white)] text-[calc(1.5vw-5px)]">
            I began my web development journey in May 2023 as part of a college
            project, and since then, I have been continuously expanding my
            knowledge in this vast field. Currently, my focus is on Front-End
            development with{" "}
            <strong className="text-[var(--main)]">React</strong>, and I have
            recently started learning{" "}
            <strong className="text-[var(--main)]">Node.js</strong>, to explore
            Back-End development.
          </p>
          <p className="text-[var(--white)] text-[calc(1.5vw-5px)]">
            I am eager to transition into the professional world of web
            development, where I am confident I will embrace every challenge and
            continuously strive to improve my skills every day.
          </p>
        </article>
        <line className="bg-[var(--grey)] w-full h-px" />
        <article>
          <h2 className="text-[var(--white)] font-bold text-[calc(2vw-5px)] p-8 underline underline-offset-8 decoration-1 decoration-[var(--white)">
            RPA Developer Intern
          </h2>
          <p className="text-[var(--white)] text-[calc(1.5vw-5px)]">
            I have been working as an RPA Developer Intern since March 2024.
            Over the past few months, I have gained extensive experience in{" "}
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
        </article>
      </section>
    </>
  );
});
