import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState {
  // Player
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  // Song Que
  activeSong?: Song | null; // now playing
  prevPlayerQue: Song[];
  nextPlayerQue: Song[];
  // Function Play, Next, Prev
  addSongList: (songList: Song[]) => void;
  playNext: () => void;
  playPrev: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) => set({ isVisible }),
  activeSong: null,
  prevPlayerQue: [],
  nextPlayerQue: [],
  addSongList: (songList: Song[]) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const cuurrentSong = cloneSongList.splice(0, 1)?.[0];
      return {
        activeSong: cuurrentSong,
        prevPlayerQue: prevSong
          ? [prevSong, ...prev.prevPlayerQue]
          : prev.prevPlayerQue,
        nextPlayerQue: [...cloneSongList],
        isVisible: true,
      };
    }),
  playNext: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQue.splice(0, 1)?.[0];
      return {
        activeSong: nextSrc,
        nextPlayerQue: prev.nextPlayerQue,
        prevPlayerQue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.prevPlayerQue,
        ],
      };
    }),
  playPrev: () =>
    set((prev) => {
      const currentSong = prev.activeSong;
      const preSrc = prev.prevPlayerQue.splice(0, 1)?.[0];
      return {
        activeSong: preSrc,
        nextPlayerQue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.nextPlayerQue,
        ],
        prevPlayerQue: prev.prevPlayerQue,
      };
    }),
}));

export default usePlayerState;
