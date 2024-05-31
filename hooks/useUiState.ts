import { create } from "zustand";

const useUiState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://yt3.googleusercontent.com/tYHeCHmQEfdw6Tv64mnYiC7om8yNErgVhcsHHrLUjEZjK089dkKyVR-mG-C8_lRqhc7f8ABjFQM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  setHomeCategory: (value: any) => set({ homeCategory: value }),
  setHeaderImageSrc: (src: string) => set({ headerImageSrc: src }),
}));

export default useUiState;
