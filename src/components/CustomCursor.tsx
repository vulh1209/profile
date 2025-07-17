import React, { useEffect, useRef, useState } from "react";

// CustomCursor: Modern animated cursor for desktop, with bloom effect
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);

  // Update cursor position
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const addHover = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button, a, input, textarea, select, [role="button"]')
      ) {
        setHovered(true);
      }
    };
    const removeHover = (e: Event) => {
      setHovered(false);
    };
    document.addEventListener("mouseover", addHover);
    document.addEventListener("mouseout", removeHover);
    return () => {
      document.removeEventListener("mouseover", addHover);
      document.removeEventListener("mouseout", removeHover);
    };
  }, []);

  // Hide on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  if (isMobile) return null;

  return (
    <>
      {/* Bloom effect */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? (hovered ? 0.45 : 0.28) : 0,
          pointerEvents: "none",
          position: "fixed",
          zIndex: 9998,
          transform: `translate(-50%, -50%) scale(${hovered ? 2.6 : 1.8})`,
          transition: "transform 0.22s cubic-bezier(.22,1,.36,1), opacity 0.2s",
        }}
        className={`
          hidden md:block
          w-24 h-24
          rounded-full
          bg-cyan-300/40
          blur-2xl
          filter
          pointer-events-none
          select-none
          transition-all
          duration-200
          ease-out
          ${hovered ? "bg-cyan-300/60 blur-[60px]" : "blur-2xl"}
        `}
      />
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: visible ? 1 : 0,
          pointerEvents: "none",
          position: "fixed",
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${hovered ? 1.8 : 1})`,
          transition:
            "transform 0.18s cubic-bezier(.22,1,.36,1), background 0.2s, opacity 0.2s",
        }}
        className={`
          hidden md:block
          w-7 h-7
          rounded-full
          border-2 border-white/80
          bg-white/10
          shadow-[0_0_16px_4px_rgba(80,200,255,0.25)]
          backdrop-blur-sm
          mix-blend-difference
          pointer-events-none
          select-none
          transition-all
          duration-200
          ease-out
          ${
            hovered
              ? "bg-cyan-300/30 border-cyan-400/80 shadow-[0_0_32px_8px_rgba(80,200,255,0.35)]"
              : ""
          }
        `}
      />
    </>
  );
};

export default CustomCursor;
