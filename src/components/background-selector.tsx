import { useI18n } from "@/hooks/use-i18n";
import { usePreviewBg } from "@/hooks/use-preview-bg";
import {
  PREVIEW_BG_COLOURS,
  type PreviewBackground,
} from "@/lib/preview-bg-context";

const BG_OPTIONS: PreviewBackground[] = [
  "default",
  "grass",
  "road",
  "water",
  "wood",
];

const TRANSLATION_KEYS: Record<PreviewBackground, string> = {
  default: "previewBgDefault",
  grass: "previewBgGrass",
  road: "previewBgRoad",
  water: "previewBgWater",
  wood: "previewBgWood",
};

export function BackgroundSelector() {
  const { t } = useI18n();
  const { background, setBackground } = usePreviewBg();

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-muted-foreground">
        {t("previewBgLabel")}
      </label>
      <div className="flex gap-1">
        {BG_OPTIONS.map((bg) => (
          <button
            key={bg}
            onClick={() => setBackground(bg)}
            className={`h-5 w-5 rounded-full border-2 cursor-pointer transition-all ${
              background === bg
                ? "border-foreground scale-110"
                : "border-transparent hover:border-foreground/30"
            }`}
            style={{ backgroundColor: PREVIEW_BG_COLOURS[bg] }}
            title={t(TRANSLATION_KEYS[bg])}
          />
        ))}
      </div>
    </div>
  );
}
