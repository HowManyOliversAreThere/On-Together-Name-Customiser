import { useContext } from "react";
import { PreviewBgContext } from "@/lib/preview-bg-context";

export function usePreviewBg() {
  const ctx = useContext(PreviewBgContext);
  if (!ctx)
    throw new Error("usePreviewBg must be used within a PreviewBgProvider");
  return ctx;
}
