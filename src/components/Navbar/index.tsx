import React, { useEffect, useState } from "react";

interface Props {
  open: boolean,
  setOpen: (open: boolean) => void,
  size: number | undefined,
  setSize: (size: number | undefined) => void
}

export const Navbar: React.FC<Props> = ({ open, setOpen, size, setSize }) => {
  const menuList: string[] = [
    "Introduction",
    "Experience",
    "Projects",
    "Contact",
  ];
  const [active, setActive] = useState<number | null>(0);
  const [boxShadows, setBoxShadows] = useState<string[]>(
    menuList.map(() => "0px 0px 0px rgba(77, 255, 190, 0)")
  );
  const [bgColors, setBgColors] = useState<string[]>(
    menuList.map(() => "rgb(255, 255, 255)") // Cor inicial branca
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
  };

  useEffect(() => {
    const getNavBarSize = () => {
      const navSize = document.getElementById("navBar");
      setSize(navSize?.clientWidth);
      console.log(size);
    };

    getNavBarSize();
    window.addEventListener("resize", getNavBarSize);

    return () => {
      window.removeEventListener("resize", getNavBarSize);
    };
  }, []);

  useEffect(() => {
    const handleOpen = () => {

      const navbar = document.getElementById('navbar')
      const duration = 500
      let pos = 0
      const finalPos = size? size * -1 : 0
      
      while (finalPos !== pos) {
        pos -= 1
        if (navbar) navbar.style.translate = `${pos}px, -50%`
      }
    }

    handleOpen()
  }, [open])

  return (
    <article className="z-50">
      <div
        id="navBar"
        className={`flex justify-start items-center p-12 left-0 top-1/2 rounded-r-2xl fixed bg-black/50`}
      >
        <div className="grid grid-cols-[auto_1fr] grid-rows-4 justify-center items-center flex-col gap-y-8 h-fit relative w-fit gap-x-4">
          <div className="absolute h-4/5 w-[2px] bg-gradient-to-b from-[var(--main)] from-0% to-[#fff] to-15% shadow-[0_0_20px_#ccc] left-[29px] top-1/2 -translate-y-1/2 -z-10" />
          {menuList.map((item, index) => (
            <React.Fragment key={index}>
              <div
                onClick={() => handleClick(index)}
                style={{
                  boxShadow: boxShadows[index],
                  backgroundColor: bgColors[index],
                }}
                className={`w-5 h-5 m-5 rounded-full cursor-pointer ${index === active ? "bg-[var(--main)]" : "bg-white"
                  } col-start-1 row-start-${index + 1}`}
              />
              <h3
                className={`text-[var(--main)] text-[1.25vw] col-start-2 row-start-${index + 1
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
