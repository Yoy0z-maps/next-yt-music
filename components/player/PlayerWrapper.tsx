"use client";

import usePlayerState from "@/hooks/usePlayerState";
import PlayerContent from "./PlayerContent";

export default function PlayerWrapper() {
  const { isVisible } = usePlayerState();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 h-[72px] w-full bg-neutral-900">
      <PlayerContent />
    </div>
  );
}
