import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactList } from "../../data/contactData";
import { Clipboard, Check } from "lucide-react";

type ContactPlatform = "GitHub" | "LinkedIn" | "WhatsApp" | "E-mail";

interface ContactItem {
  platform: ContactPlatform;
  name: string;
  href: string;
  number?: string;
  svg: JSX.Element;
}

export const Contact = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((props, ref) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false); // controla se a seção está visível

  const handleCopy = async (item: ContactItem, index: number) => {
    let text = "";
    switch (item.platform) {
      case "GitHub":
      case "LinkedIn":
        text = item.href;
        break;
      case "WhatsApp":
        text = item.number || "5515996839690";
        break;
      case "E-mail":
        text = item.name;
        break;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  const containerVariants = {
    visible: {
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.1 }}
      variants={containerVariants}
      className="w-full py-12 lg:pt-36 mt-12 flex flex-col justify-center items-center bg-black"
    >
      <motion.h2
        variants={itemVariants}
        className="text-white py-4 text-2xl lg:text-4xl"
      >
        Contact
      </motion.h2>

      <motion.div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-y-10 lg:gap-x-20 lg:m-12">
        {contactList.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full bg-[#30303060] flex flex-col rounded-lg rounded-r-none justify-between text-[var(--white)] hover:text-[var(--main)] hover:fill-[var(--main)] transition-all duration-300 relative"
          >
            <a
              href={item.href}
              target="_blank"
              className="flex w-full flex-col items-center text-center gap-2 px-[1rem] lg:px-[2rem] py-[1.5rem] lg:py-[2.5rem]"
            >
              {item.svg}
              <div className="flex flex-col">
                <h3 className="text-lg lg:leading-7 lg:text-[1.25vw]">
                  {item.platform}
                </h3>
                <h4 className="text-base lg:leading-7 lg:text-[1.1vw] break-all">
                  {item.name}
                </h4>
              </div>
            </a>

            <button
              onClick={() => handleCopy(item, index)}
              className="absolute right-0 translate-x-full bg-[#070707] h-full flex items-center justify-center p-2 rounded-r-md hover:bg-[var(--main)] text-white transition shadow-md"
              title="Copiar"
            >
              {copiedIndex === index ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Clipboard className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
});
