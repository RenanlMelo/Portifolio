import React from "react";

export const Contact = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const contactList = [
    {
      plataform: "GitHub Profile",
      name: "RenanlMelo",
      color: "#505072",
    },
    {
      plataform: "Linkedin Profile",
      name: "Renan Lara Melo",
      color: "#0069d0",
    },
    {
      plataform: "Email",
      name: "Renanlaramelo@gmail.com",
      color: "#ed554b",
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className="w-full px-96 py-36 mt-12 flex flex-col justify-center items-center bg-black"
    >
      <h2 className="text-[var(--white)] text-[calc(2.5vw-5px)] uppercase mb-12">
        Contact
      </h2>
      <div className="grid grid-cols-3 justify-center items-center gap-x-10 m-12">
        {contactList.map((item, index) => (
          <div key={index} className="contact_item flex flex-col justify-start">
            <h3 className="text-[1.25vw]">{item.plataform}</h3>
            <h4 className="text-[1.1vw]">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
});
