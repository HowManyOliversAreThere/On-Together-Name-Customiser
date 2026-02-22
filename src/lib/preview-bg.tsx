import { useState, type ReactNode } from "react";
import {
  PreviewBgContext,
  type PreviewBackground,
} from "@/lib/preview-bg-context";

export function PreviewBgProvider({ children }: { children: ReactNode }) {
  const [background, setBackground] = useState<PreviewBackground>("default");
  return (
    <PreviewBgContext value={{ background, setBackground }}>
      {children}
    </PreviewBgContext>
  );
}
