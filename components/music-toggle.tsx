"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function MusicToggle({ playing }: { playing: boolean }) {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(
        "/jeremiah7-indian-104-guitar-250024.mp3"
      );
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (playing && !muted && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [playing, muted]);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (next) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch(() => {});
        }
      }
      return next;
    });
  }, []);

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 rounded-full bg-pink-100/70 backdrop-blur-sm p-3 border border-pink-200/50 text-pink-600 hover:bg-pink-200/70 transition-all duration-300 hover:scale-110"
      aria-label={muted ? "Unmute music" : "Mute music"}
      type="button"
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
}
