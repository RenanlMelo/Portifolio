import { GithubIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from "./icons";

export interface ContactItem {
  platform: "GitHub" | "LinkedIn" | "WhatsApp" | "E-mail";
  name: string;
  href: string;
  svg: JSX.Element;
}

export const contactList: ContactItem[] = [
  {
    platform: "GitHub",
    name: "RenanlMelo",
    href: "https://github.com/RenanlMelo",
    svg: <GithubIcon />,
  },
  {
    platform: "LinkedIn",
    name: "Renan Melo",
    href: "https://www.linkedin.com/in/renanlaramelo/",
    svg: <LinkedinIcon />,
  },
  {
    platform: "WhatsApp",
    name: "Renan Lara Melo",
    href: "https://wa.me/5515996839690",
    svg: <WhatsappIcon />,
  },
  {
    platform: "E-mail",
    name: "Renanlmelo.dev@gmail.com",
    href: "mailto:renanlmelo.dev@gmail.com",
    svg: <EmailIcon />,
  },
];
