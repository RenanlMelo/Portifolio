import React, { useEffect, useState } from "react";

interface ScrollToProps {
  onSectionClick: (sectionRef: React.RefObject<HTMLDivElement | null>) => void;
  refs: React.RefObject<HTMLDivElement | null>[];
}

export const Navbar: React.FC<ScrollToProps> = ({ onSectionClick, refs }) => {
  const menuList: string[] = [
    "Introduction",
    "Experience",
    "Projects",
    "Contact",
  ];

  const [open, setOpen] = useState(true);
  const [size, setSize] = useState<number | undefined>(undefined);
  const [active, setActive] = useState<number | null>(0);
  const [boxShadows, setBoxShadows] = useState<string[]>(
    menuList.map(() => "0px 0px 0px rgba(77, 255, 190, 0)")
  );
  const [bgColors, setBgColors] = useState<string[]>(
    menuList.map(() => "rgb(255, 255, 255)")
  );

  useEffect(() => {
    if (active !== null) {
      aumentarSombraECor(active);
    }
  }, [active]);

  const aumentarSombraECor = (index: number) => {
    let desfoque = 0;
    let opacidadeSombra = 0;
    let corR = 255;
    let corG = 255;
    let corB = 255;

    function animarSombraECor() {
      desfoque += 0.5;
      opacidadeSombra += 0.02;

      if (corR > 77) corR -= 7;
      if (corG > 255) corG -= 5;
      if (corB > 190) corB -= 7;

      if (desfoque <= 20 && opacidadeSombra <= 1) {
        setBoxShadows((prevShadows) =>
          prevShadows.map((shadow, i) =>
            i === index
              ? `0px 0px ${desfoque}px rgba(77, 255, 190, ${opacidadeSombra})`
              : shadow
          )
        );

        setBgColors((prevColors) =>
          prevColors.map((color, i) =>
            i === index ? `rgb(${corR}, ${corG}, ${corB})` : color
          )
        );

        requestAnimationFrame(animarSombraECor);
      }
    }

    animarSombraECor();
  };

  const diminuirSombraECor = (index: number) => {
    let desfoque = 20;
    let opacidadeSombra = 1;
    let corR = 77;
    let corG = 255;
    let corB = 190;

    function animarSombraECor() {
      desfoque -= 0.5;
      opacidadeSombra -= 0.02;

      if (corR < 255) corR += 7;
      if (corG < 255) corG += 5;
      if (corB < 255) corB += 7;

      if (desfoque > 0 && opacidadeSombra > 0) {
        setBoxShadows((prevShadows) =>
          prevShadows.map((shadow, i) =>
            i === index
              ? `0px 0px ${desfoque}px rgba(77, 255, 190, ${opacidadeSombra})`
              : shadow
          )
        );

        setBgColors((prevColors) =>
          prevColors.map((color, i) =>
            i === index ? `rgb(${corR}, ${corG}, ${corB})` : color
          )
        );

        requestAnimationFrame(animarSombraECor);
      } else {
        setBoxShadows((prevShadows) =>
          prevShadows.map((shadow, i) =>
            i === index ? "0px 0px 0px rgba(77, 255, 190, 0)" : shadow
          )
        );

        setBgColors((prevColors) =>
          prevColors.map((color, i) =>
            i === index ? "rgb(255, 255, 255)" : color
          )
        );
      }
    }

    animarSombraECor();
  };

  const handleClick = (index: number) => {
    if (active !== null) {
      diminuirSombraECor(active);
    }
    setActive(index);
    const sectionRef = refs[index];
    if (sectionRef && sectionRef.current) {
      onSectionClick(sectionRef);
    }
  };

  useEffect(() => {
    const getNavBarSize = () => {
      const navSize = document.getElementById("navBar");
      if (navSize) setSize(navSize.clientWidth);
    };

    getNavBarSize();
    window.addEventListener("resize", getNavBarSize);

    return () => {
      window.removeEventListener("resize", getNavBarSize);
    };
  }, []);

  useEffect(() => {
    const rotateContent = document.querySelector(".rotate-content");

    if (rotateContent) {
      if (!open) {
        setTimeout(() => {
          rotateContent.classList.add("translate");
        }, 200);
      } else {
        rotateContent.classList.remove("translate");
      }
    }
  }, [open]);

  const navBarClasses = open ? "" : "closed";

  return (
    <article className="z-50">
      <div
        id="navBar"
        className={`flex items-center pl-[calc(2vw-10px)] pr-[calc(1vw-10px)] py-6 left-0 top-1/2 rounded-r-2xl fixed bg-[var(--black)] overflow-visible ${navBarClasses}`}
      >
        <button
          className={`absolute right-0 overflow-hidden ${
            open ? "translate-x-1/2" : "translate-x-full"
          } transition-all duration-300 z-[999] ${navBarClasses}`}
          onClick={() => setOpen(!open)}
        >
          <div
            className={`rotate-content p-4 bg-[var(--black)] rounded-full hover:bg-[var(--darker)]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              viewBox="0 0 512 512"
              className="rotate-90"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
        </button>

        <div className="grid grid-cols-[auto_1fr] grid-rows-4 justify-center items-center flex-col gap-y-[calc(3vh-10px)] h-fit relative w-fit gap-x-4">
          <div className="absolute h-4/5 w-[2px] bg-gradient-to-b from-[var(--main)] from-0% to-[#fff] to-15% shadow-[0_0_20px_#ccc] left-[29px] top-1/2 -translate-y-1/2 -z-10" />
          {menuList.map((item, index) => (
            <React.Fragment key={index}>
              <div
                onClick={() => handleClick(index)}
                style={{
                  boxShadow: boxShadows[index],
                  backgroundColor: bgColors[index],
                }}
                className={`w-5 h-5 m-5 rounded-full cursor-pointer ${
                  index === active ? "bg-[var(--main)]" : "bg-white"
                } col-start-1 row-start-${index + 1}`}
              />
              <h3
                className={`text-[var(--main)] text-[calc(.75vw+7px)] col-start-2 row-start-${
                  index + 1
                } font-bold cursor-pointer pr-6 hover:drop-shadow-[0_0_10px_#4dffbe] duration-300`}
                onClick={() => handleClick(index)}
              >
                {item}
              </h3>
            </React.Fragment>
          ))}
        </div>
      </div>
    </article>
  );
};
