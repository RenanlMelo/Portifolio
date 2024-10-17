import React, { useRef, useEffect } from "react";

const ArrowCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Função para desenhar a seta
        function drawArrow(
          ctx: CanvasRenderingContext2D,
          fromX: number,
          fromY: number,
          toX: number,
          toY: number
        ) {
          const headlen = 100; // tamanho da cabeça da seta
          const angle = Math.atan2(toY - fromY, toX - fromX);

          // Desenha a linha (corpo da seta)
          ctx.beginPath();
          ctx.moveTo(fromX, fromY);
          ctx.lineTo(toX, toY);
          ctx.strokeStyle = "white";
          ctx.lineWidth = 5;
          ctx.stroke();

          // Desenha a cabeça da seta
          ctx.beginPath();
          ctx.moveTo(toX, toY);
          ctx.lineTo(
            toX - headlen * Math.cos(angle - Math.PI / 6),
            toY - headlen * Math.sin(angle - Math.PI / 6)
          );
          ctx.lineTo(
            toX - headlen * Math.cos(angle + Math.PI / 6),
            toY - headlen * Math.sin(angle + Math.PI / 6)
          );
          ctx.lineTo(toX, toY);
          ctx.closePath();
          ctx.fillStyle = "white";
          ctx.fill();
        }

        // Define o tamanho do canvas
        canvas.width = 400;
        canvas.height = 400;

        // Chama a função para desenhar a seta
        drawArrow(ctx, 50, 200, 350, 200);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ border: "1px solid white", backgroundColor: "#282c34" }}
    />
  );
};

export default ArrowCanvas;
