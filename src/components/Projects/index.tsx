import React from "react";

export const Projects = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const listProjects = [
    {
      name: "Auto Sales Brasil",
      url: "https://autosalesbrasil.vercel.app/",
      description: "Site institucional totalmente responsivo e funcional.",
      img: "autosales.png",
      altImg: "Imagem de projeto para empresa Auto Sales Brasil",
      used: ["React.js"],
    },
    {
      name: "Unilock Pisos - Intertravados",
      url: "https://www.unilockpisos.com.br/",
      description: "Site institucional totalmente responsivo e funcional.",
      img: "unilock.png",
      altImg: "Imagem de projeto para empresa Unilock Pisos",
      used: ["React.js"],
    },
    {
      name: "Leveling Corp",
      url: "https://light-leveling.vercel.app/",
      description: "Site institucional totalmente responsivo e funcional.",
      img: "leveling.png",
      altImg: "Imagem de projeto para empresa Leveling",
      used: ["React.js"],
    },
  ];
  return (
    <>
      <section
        ref={ref}
        id="projects"
        className="grid items-center justify-evenly my-24"
      >
        <div className="text-[var(--white)] text-center">
          <h2 className="text-[calc(2.5vw-5px)] p-8 uppercase">
            Projects - Web Development
          </h2>
          <div className="flex flex-col gap-y-20">
            {listProjects.map((prj, index) => (
              <div key={index} className="flex w-full ">
                <img className="w-4/5 -z-20" src={prj.img} alt={prj.altImg} />
                <div className="w-1/5 px-4 py-8 text-start bg-black z-50">
                  <a
                    href={prj.url}
                    className="text-[var(--white)] text-2xl z-[100] hover:underline underline-offset-4"
                  >
                    {prj.name}
                  </a>
                  <h3 className="text-xl mt-[1vh] mb-[3vh]">
                    {prj.description}
                  </h3>
                  <h4>Tecnologias Utilizadas:</h4>
                  <ul className="list-inside list-disc">
                    {prj.used.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <article className="text-[var(--white)] text-center">
          <h2>RPA Development</h2>
          <div>
            <video width={1600} height={900}>
              <source />
            </video>
            <p></p>
          </div>
        </article>
      </section>
    </>
  );
});
