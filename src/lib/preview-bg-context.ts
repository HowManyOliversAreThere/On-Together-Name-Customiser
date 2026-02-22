import { createContext } from "react";

export type PreviewBackground = "default" | "grass" | "road" | "water" | "wood";

export const PREVIEW_BG_COLOURS: Record<PreviewBackground, string> = {
  default: "#8B5C7B",
  grass: "#B9A558",
  road: "#B59A91",
  water: "#BCDEE8",
  wood: "#FEAA82",
};

interface PreviewBgContextType {
  background: PreviewBackground;
  setBackground: (bg: PreviewBackground) => void;
}

export const PreviewBgContext = createContext<PreviewBgContextType | null>(
  null
);
