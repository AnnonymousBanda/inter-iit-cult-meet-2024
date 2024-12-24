'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Celebration() {
  const confettiRef = useRef(null);

  useEffect(() => {
    const colors = ["#FF69B4", "#87CEEB", "#FFD700", "#98FB98", "#DDA0DD", "#F0E68C"];
    const shapes = [
      { width: "8px", height: "8px", borderRadius: "50%" },
      { width: "8px", height: "8px", borderRadius: "0" },
      { width: "12px", height: "4px", borderRadius: "2px" },
      { width: "0", height: "0", borderWidth: "0 4px 8px 4px", borderStyle: "solid", backgroundColor: "transparent" }
    ];

    const numberOfConfetti = 500;
    const confetti = [];

    for (let i = 0; i < numberOfConfetti; i++) {
      const div = document.createElement("div");
      div.className = "confetti";
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      Object.assign(div.style, {
        position: "absolute",
        ...shape,
        backgroundColor: color,
        borderColor: shape.borderWidth ? `${color} transparent transparent transparent` : undefined,
        opacity: Math.random() * 1 + 0.5,
        boxShadow: `0 0 4px ${color}80`,
        zIndex: "9999"
      });

      confettiRef.current?.appendChild(div);
      confetti.push(div);
    }

    confetti.forEach((div) => {
      const startX = window.innerWidth / 2;
      const startY = 0;
      const endX = Math.random() * window.innerWidth;
      const fallDistance = window.innerHeight + 100;
      const rotation = Math.random() * 720 - 360;
      const duration = Math.random() * 3 + 1;
      const delay = Math.random() * 0.05;

      const timeline = gsap.timeline();
      setTimeout(() => timeline.play(), 1000);
      timeline
        .fromTo(
          div,
          {
            x: startX,
            y: startY,
            z: 30,
            rotation: 0,
            scale: 0,
            opacity: 1,
          },
          {
            x: endX,
            rotation: rotation,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power2.out",
          }
        )
        .to(div, {
          y: fallDistance,
          duration: 2,
          ease: "power1.in",
          onComplete: () => div.remove()
        });
    });

    return () => {
      confetti.forEach(div => div.remove());
    };
  }, []);

  return (
    <div
      ref={confettiRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    />
  );
}   