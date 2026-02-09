"use client";

import React from "react"

import { useCallback, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const HEART_EMOJIS = ["\u2764", "\u1F497", "\u1F496", "\u2728", "\u1F49D"];
const COLORS = ["#ec4899", "#f472b6", "#fb7185", "#f9a8d4", "#fda4af"];

export function ClickSparkles({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const newSparkles: Sparkle[] = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX + (Math.random() - 0.5) * 60,
      y: e.clientY + (Math.random() - 0.5) * 60,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    setSparkles((prev) => [...prev, ...newSparkles]);

    setTimeout(() => {
      setSparkles((prev) =>
        prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id))
      );
    }, 700);
  }, []);

  return (
    <div onClick={handleClick} className="min-h-screen">
      {children}
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="fixed pointer-events-none animate-sparkle z-50 text-lg"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            color: sparkle.color,
          }}
          aria-hidden="true"
        >
          {"♥"}
        </span>
      ))}
    </div>
  );
}
