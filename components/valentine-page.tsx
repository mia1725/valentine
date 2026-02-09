"use client";

import { useCallback, useState } from "react";
import { CelebrationView } from "./celebration-view";
import { ClickSparkles } from "./click-sparkles";
import { FloatingHearts } from "./floating-hearts";
import { MusicToggle } from "./music-toggle";
import { ProposalCard } from "./proposal-card";

export function ValentinePage() {
  const [accepted, setAccepted] = useState(false);

  const handleYes = useCallback(() => {
    setAccepted(true);
  }, []);

  return (
    <ClickSparkles>
      {/* Romantic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 z-[-1]" />

      {/* Secondary gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-pink-300/30 via-transparent to-rose-200/40 z-[-1]" />

      <MusicToggle playing={accepted} />

      <main className="relative flex items-center justify-center min-h-screen">
        {!accepted && <FloatingHearts />}

        {accepted ? <CelebrationView /> : <ProposalCard onYes={handleYes} />}
      </main>
    </ClickSparkles>
  );
}
