import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactList } from "../../data/contactData";

type ContactPlatform = "GitHub" | "LinkedIn" | "WhatsApp" | "E-mail";

interface ContactItem {
  platform: ContactPlatform;
  name: string;
  href: string;
  svg: JSX.Element;
}

export const Contact = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const [copied, setCopied] = useState(false);

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
            className="icons bg-[#30303060] px-[1rem] lg:px-[2rem] py-[1rem] lg:py-[2rem] rounded-lg flex flex-col justify-start text-[var(--white)] hover:text-[var(--main)] hover:fill-[var(--main)] transition-all duration-300"
          >
            <a
              href={item.href}
              target="_blank"
              className="cursor-pointer items-center gap-2 lg:gap-y-8 flex flex-col"
            >
              {item.svg}
              <div className="items-center text-center flex flex-col lg:gap-y-4">
                <h3 className="text-lg lg:leading-7 lg:text-[1.25vw]">
                  {item.platform}
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
