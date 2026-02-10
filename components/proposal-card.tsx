"use client";

import { useCallback, useState } from "react";
import { Typewriter } from "./typewriter";

const NO_TEXTS = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you being serious?",
  "Please say yes 🥺",
  "Pretty please? 🥺👉👈",
  "I'll be really sad 😢",
];

interface ProposalCardProps {
  onYes: () => void;
}

export function ProposalCard({ onYes }: ProposalCardProps) {
  const [noCount, setNoCount] = useState(0);
  const yesScale = 1 + noCount * 0.15;

  const handleNo = useCallback(() => {
    setNoCount((prev) => Math.min(prev + 1, NO_TEXTS.length - 1));
  }, []);

  return (
    <div className="relative z-10 w-full max-w-lg mx-4 animate-fade-in-up">
      <div className="rounded-3xl bg-card/40 backdrop-blur-xl border border-pink-200/30 p-8 sm:p-12 shadow-2xl shadow-pink-300/20">
        {/* Heart emoji */}
        <div className="text-center mb-6">
          <span className="text-6xl sm:text-7xl inline-block animate-bounce" role="img" aria-label="Heart with arrow">
            {"💘"}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-pink-700 mb-4 text-balance leading-tight">
          Ishat Chhipaaaa, Will you be my Valentine?
        </h1>

        {/* Typewriter subtitle */}
        <p className="text-center text-pink-500 text-base sm:text-lg md:text-xl mb-10 min-h-[2rem]">
          <Typewriter
            text="I promise unlimited love, food & memes 🥺👉👈"
            speed={50}
          />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onYes}
            type="button"
            className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-3 animate-pulse-glow hover:from-pink-600 hover:to-rose-600 active:scale-95 transition-all duration-300 shadow-lg shadow-pink-400/30"
            style={{
              transform: `scale(${yesScale})`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {"Yes! 💖"}
          </button>

          {noCount < NO_TEXTS.length - 1 && (
            <button
              onClick={handleNo}
              type="button"
              className="rounded-full bg-pink-100/80 text-pink-500 font-semibold px-6 py-3 hover:bg-pink-200/80 active:scale-95 transition-all duration-300 border border-pink-200/50"
              style={{
                fontSize: `${Math.max(0.875 - noCount * 0.05, 0.5)}rem`,
                opacity: Math.max(1 - noCount * 0.08, 0.15),
                transform: `scale(${Math.max(1 - noCount * 0.06, 0.4)})`,
                pointerEvents: noCount >= NO_TEXTS.length - 2 ? "none" : "auto",
              }}
            >
              {NO_TEXTS[noCount]}
            </button>
          )}
        </div>

        {noCount >= 3 && (
          <p className="text-center text-pink-400 text-sm mt-6 animate-fade-in-up">
            {"The yes button is calling you... 👀"}
          </p>
        )}
      </div>
    </div>
  );
}
