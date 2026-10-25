"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
}

const STAR_COUNT = 440;

function createStars(): Star[] {
  return Array.from({ length: STAR_COUNT }, () => {
    return {
      x: Math.random(),
      y: Math.random(),
      size: 0.35 + Math.random() * 0.4,
      driftX: 0.014 + Math.random() * 0.018,
      driftY: (Math.random() - 0.5) * 0.008,
    };
  });
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const stars = createStars();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let frame = 0;

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.beginPath();
      const elapsed = reduceMotion.matches ? 0 : time;

      for (const star of stars) {
        const screenX = ((star.x * width + elapsed * star.driftX) % width + width) % width;
        const screenY = ((star.y * height + elapsed * star.driftY) % height + height) % height;
        const radius = star.size;
        // Start a separate subpath for every star; otherwise canvas connects
        // each arc to the previous one and fills large triangular shapes.
        context.moveTo(screenX + radius, screenY);
        context.arc(screenX, screenY, radius, 0, Math.PI * 2);
      }

      context.fillStyle = "rgba(239, 232, 255, 0.78)";
      context.fill();

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-starfield" aria-hidden="true" />;
}
