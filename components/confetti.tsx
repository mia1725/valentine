"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
  type: "heart" | "circle" | "star";
}

export function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#ec4899", "#f472b6", "#fb7185", "#fda4af", "#f9a8d4", "#fecdd3", "#be185d"];
    const types: ConfettiPiece["type"][] = ["heart", "circle", "star"];
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 6,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 2,
      rotation: Math.random() * 360,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setPieces(generated);
  }, []);

  const getShape = (type: ConfettiPiece["type"]) => {
    switch (type) {
      case "heart":
        return "\u2764";
      case "star":
        return "\u2728";
      default:
        return "\u25CF";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0"
          style={{
            left: `${piece.left}%`,
            fontSize: `${piece.size}px`,
            color: piece.color,
            animationDelay: `${piece.delay}s`,
            animation: `confetti-fall ${piece.duration}s ease-out ${piece.delay}s forwards`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {getShape(piece.type)}
        </span>
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
