import { useI18n } from "@/hooks/use-i18n";

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

  if (!name) {
    return (
      <div className="rounded-xl bg-[#8B5C7B] p-4 text-sm">
        <span className="text-white/50 italic">{t("enterName")}</span>
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
    <div className="rounded-xl bg-[#8B5C7B] p-4 text-sm leading-relaxed">
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
  );
}
