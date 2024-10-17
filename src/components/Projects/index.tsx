export const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="grid items-center justify-evenly my-24 pr-4 z-10"
      >
        <article className="text-[var(--white)] text-center">
          <h2 className="text-[calc(2.5vw-5px)] p-8 font-mono uppercase">
            Projects - Web Development
          </h2>
          <div className="flex h-full relative -z-10 shadow-[0_0_30px_#000]">
            <div className="absolute w-full h-full shadow-[inset_500px_0_300px_#000000bb]" />
            <img
              className="w-4/5"
              src="autosales.png"
              alt="Imagem de projeto para empresa Auto Sales Brasil"
            />
            <div className="w-1/5 px-4 py-8 text-start bg-black">
              <h1 className="text-[var(--white)] text-2xl">
                Unilock Pisos - Intertravados
              </h1>
              <h2 className="text-xl mb-4">
                Site institucional totalmente responsivo e funcional.
              </h2>
              <h3>Tecnologias Utilizadas:</h3>
              <ul>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className=" w-full h-8" />

          <div className="flex h-full relative -z-10 shadow-[0_0_30px_#000]">
            <div className="absolute w-full h-full shadow-[inset_500px_0_300px_#000000bb]" />
            <img
              className="w-4/5 h-full"
              src="unilock.png"
              alt="Imagem de projeto para empresa Unilock Pisos"
            />
            <div className="w-1/5 px-4 py-8 text-start bg-black">
              <h1 className="text-[var(--white)] text-2xl">
                Unilock Pisos - Intertravados
              </h1>
              <h2 className="text-xl mb-4">
                Site institucional totalmente responsivo e funcional.
              </h2>
              <h3>Tecnologias Utilizadas:</h3>
              <ul>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-8" />
          <div className="flex h-full relative -z-10 shadow-[0_0_30px_#000]">
            <div className="absolute w-full h-full shadow-[inset_500px_0_300px_#000000bb]" />
            <img
              className="w-4/5"
              src="leveling.png"
              alt="Imagem de projeto para projeto pessoal"
            />
            <div className="w-1/5 px-4 py-8 text-start bg-black">
              <h1 className="text-[var(--white)] text-2xl">
                Unilock Pisos - Intertravados
              </h1>
              <h2 className="text-xl mb-4">
                Site institucional totalmente responsivo e funcional.
              </h2>
              <h3>Tecnologias Utilizadas:</h3>
              <ul>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="flex h-full relative -z-10 shadow-[0_0_30px_#000]" />
        </article>
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
};
