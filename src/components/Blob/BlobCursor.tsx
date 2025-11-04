import { useEffect, useRef } from "react";
import "./BlobCursor.css";

export const BlobCursor = () => {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // só ativa em telas >= md (768px)
    if (window.innerWidth < 768) return;

    let mouseX = 0,
      mouseY = 0;
    let outerX = 0,
      outerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.left = `${mouseX}px`;
        innerRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateOuter = () => {
      outerX += mouseX - outerX; // suaviza o movimento
      outerY += mouseY - outerY;

      if (outerRef.current) {
        outerRef.current.style.left = `${outerX}px`;
        outerRef.current.style.top = `${outerY}px`;
      }

      requestAnimationFrame(animateOuter);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateOuter();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={innerRef} className="inner-cursor hidden md:block"></div>
      <div ref={outerRef} className="outer-cursor hidden md:block"></div>
    </>
  );
};
