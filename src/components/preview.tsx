import { useI18n } from "@/hooks/use-i18n";
import { usePreviewBg } from "@/hooks/use-preview-bg";
import { PREVIEW_BG_COLOURS } from "@/lib/preview-bg-context";
import { BackgroundSelector } from "@/components/background-selector";

interface PreviewProps {
  name: string;
  letterColours: string[];
  letterBold?: boolean[];
  letterItalic?: boolean[];
  colonColour: string;
  messageColour: string;
  showExtras: boolean;
  chatBold?: boolean;
  chatItalic?: boolean;
}

export function Preview({
  name,
  letterColours,
  letterBold = [],
  letterItalic = [],
  colonColour,
  messageColour,
  showExtras,
  chatBold = false,
  chatItalic = false,
}: PreviewProps) {
  const { t } = useI18n();
  const { background } = usePreviewBg();
  const bgColour = PREVIEW_BG_COLOURS[background];

  if (!name) {
    return (
      <div className="space-y-2">
        <div
          className="rounded-xl p-4 text-sm"
          style={{ backgroundColor: bgColour }}
        >
          <span className="text-white/50 italic">{t("enterName")}</span>
        </div>
        <BackgroundSelector />
      </div>
    );
  }

  const chatClassName = [
    chatBold ? "font-bold" : undefined,
    chatItalic ? "italic" : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-2">
      <div
        className="rounded-xl p-4 text-sm leading-relaxed"
        style={{ backgroundColor: bgColour }}
      >
        {/* Name with per-letter colours and formatting */}
        <span>
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={[
                letterBold[index] ? "font-bold" : undefined,
                letterItalic[index] ? "italic" : undefined,
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ color: letterColours[index] || "#FFFFFF" }}
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Colon */}
        <span
          className={chatClassName || undefined}
          style={{
            color: showExtras
              ? colonColour
              : letterColours[letterColours.length - 1] || "#FFFFFF",
          }}
        >
          :
        </span>

        {/* Message */}
        <span
          className={chatClassName || undefined}
          style={{ color: showExtras ? messageColour : "#FFFFFF" }}
        >
          {" "}
          {t("previewSampleMessage")}
        </span>
      </div>
      <BackgroundSelector />
    </div>
  );
}
