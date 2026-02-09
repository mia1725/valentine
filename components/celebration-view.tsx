"use client";

import { Confetti } from "./confetti";
import { FloatingHearts } from "./floating-hearts";

export function CelebrationView() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <FloatingHearts />
      <Confetti />

      <div className="relative z-10 text-center animate-fade-in-up px-4">
        <div className="animate-bounce-in mb-8">
          <span className="text-7xl sm:text-8xl md:text-9xl block" role="img" aria-label="Sparkling heart">
            {"💖"}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-pink-700 mb-4 text-balance">
          Knew you would say yes!
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-pink-500 mb-8 font-medium">
          {"You just made my heart skip a beat! 🥰"}
        </p>

        <div className="flex justify-center gap-4 text-5xl sm:text-6xl animate-bounce" role="img" aria-label="Celebration emojis">
          <span>{"🐻"}</span>
          <span>{"❤️"}</span>
          <span>{"🐻"}</span>
        </div>

        <div className="mt-10 inline-block rounded-full bg-pink-100/60 px-8 py-4 backdrop-blur-sm border border-pink-200/50">
          <p className="text-pink-600 text-base sm:text-lg font-semibold">
            {"Forever yours 💕"}
          </p>
        </div>
      </div>
    </div>
  );
}
