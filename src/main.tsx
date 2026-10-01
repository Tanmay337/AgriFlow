import { createRoot } from "react-dom/client";
import AnimatedGradient from "@/components/ui/animated-gradient";
import "./index.css";
import "../app.js";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const background = document.getElementById("app-background");

if (background) {
  createRoot(background).render(
    <AnimatedGradient
      className="animated-gradient"
      config={{
        preset: "custom",
        color1: "#14532d",
        color2: "#4ade80",
        color3: "#e9f7be",
        rotation: -24,
        proportion: 50,
        scale: 0.28,
        speed: prefersReducedMotion ? 0 : 14,
        distortion: 8,
        swirl: 28,
        swirlIterations: 5,
        softness: 78,
        offset: 0,
        shape: "Edge",
        shapeSize: 26,
      }}
      noise={{ opacity: 0.08, scale: 1 }}
    />
  );
}
