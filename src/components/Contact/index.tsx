import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const [copied, setCopied] = useState(false);

  const contactList = [
    {
      plataform: "GitHub Profile",
      name: "RenanlMelo",
      href: "https://github.com/RenanlMelo",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={75}
          height={75}
          viewBox="0 0 512 512"
          className="fill-current p-4 lg:p-0"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      ),
    },
    {
      plataform: "Linkedin Profile",
      name: "Renan Lara Melo",
      href: "https://www.linkedin.com/in/renanlaramelo/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={75}
          height={75}
          viewBox="0 0 512 512"
          className="fill-current p-4 lg:p-0"
        >
          <path
            fill="currentColor"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          />
        </svg>
      ),
    },
    {
      plataform: "WhatsApp",
      name: "Renan Lara Melo",
      href: "https://wa.me/5515996839690",
      svg: (
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={75}
          height={75}
          className="fill-current p-4 lg:p-0"
        >
          <defs>
            <path
              fill="currentColor"
              id="i-419"
              d="M46.557,37.182l-9-6.014c-1.498-1.002-2.941-0.967-4.189,0.059c-3.504,2.873-5.582,2.049-5.92,1.879 c-1.982-0.992-3.854-1.928-6.741-4.813c-3.584-3.586-4.878-5.875-5.812-7.74c-0.373-0.746-0.803-3.254,1.65-5.869 c1.147-1.221,1.253-2.721,0.299-4.221c-0.735-1.156-0.735-1.156-1.313-2.006c-0.57-0.84-1.709-2.518-4.713-7.014 C10.169,0.473,9.247,0,8,0C6.586,0,5.87,0.717,5.293,1.293l-3,3C0.169,6.416,0,7.633,0,9c0,1.721,2.485,12.939,14.292,24.705 C26.061,45.514,37.268,48,38.988,48h0.066c1.355-0.02,2.559-0.199,4.652-2.293l3-3C47.283,42.131,48,41.414,48,40 C48,38.752,47.527,37.83,46.557,37.182z M45.293,41.293l-3,3c-1.684,1.684-2.416,1.695-3.305,1.707 c-0.123-0.004-10.891-1.273-23.282-13.709C3.415,20.043,2.002,9.096,2,9c0-0.887,0-1.586,1.706-3.293l3-3C7.233,2.182,7.443,2,8,2 c0.653,0,0.927,0.213,1.156,0.555c3.009,4.504,4.15,6.186,4.721,7.025c0.563,0.828,0.563,0.828,1.28,1.957 c0.568,0.893,0.302,1.383-0.07,1.779c-3.121,3.324-2.66,6.771-1.981,8.131c1.003,2.006,2.39,4.463,6.187,8.26 c3.115,3.115,5.223,4.168,7.26,5.188c0.561,0.279,1.293,0.434,2.063,0.434c1.326,0,3.445-0.443,6.02-2.555 c0.365-0.301,0.625-0.336,0.789-0.336c0.287,0,0.631,0.133,1.021,0.395l9,6.012C45.787,39.072,46,39.346,46,40 C46,40.557,45.818,40.768,45.293,41.293z"
            />
          </defs>

          <use x="0" y="0" xlinkHref="#i-419" />
        </svg>
      ),
    },
    {
      plataform: "Email",
      name: "Renanlaramelo@gmail.com",
      href: "mailto:renanlaramelo@gmail.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={75}
          height={75}
          viewBox="0 0 512 512"
          className="fill-current p-4 lg:p-0"
        >
          <path
            fill="currentColor"
            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full py-12 lg:pt-36 mt-12 flex flex-col justify-center items-center bg-black"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.9 }}
        className="text-white py-4 text-2xl lg:text-4xl"
      >
        Contact
      </motion.h2>
      <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-y-10 lg:gap-x-10 lg:m-12">
        {contactList.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, bounce: false }}
            viewport={{ once: false, amount: 0.5 }}
            key={index}
            className="icons bg-[#30303060] px-[1rem] lg:px-[2rem] py-[1rem] lg:py-[2rem] rounded-lg flex flex-col justify-start text-[#aaa] hover:text-[var(--main)] hover:fill-[var(--main)] transition-all duration-300"
          >
            <a
              href={item.href}
              target="_blank"
              className="cursor-pointer items-center gap-2 lg:gap-y-8 flex flex-col"
            >
              {item.svg}
              <div className="items-center text-center flex flex-col lg:gap-y-4">
                <h3 className="text-lg lg:leading-7 lg:text-[1.25vw]">
                  {item.plataform}
                </h3>
                <h4 className="text-base lg:leading-7 lg:text-[1.1vw]">
                  {item.name}
                </h4>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
