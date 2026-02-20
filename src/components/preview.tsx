import { useI18n } from "@/lib/i18n";

interface PreviewProps {
  name: string;
  letterColours: string[];
  colonColour: string;
  messageColour: string;
  showExtras: boolean;
}

export function Preview({
  name,
  letterColours,
  colonColour,
  messageColour,
  showExtras,
}: PreviewProps) {
  const { t } = useI18n();

  if (!name) {
    return (
      <div className="rounded-xl bg-zinc-900 p-4 font-mono text-sm">
        <span className="text-zinc-500 italic">{t("enterName")}</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-zinc-900 p-4 font-mono text-sm leading-relaxed">
      {/* Name with colours */}
      <span>
        {name.split("").map((letter, index) => (
          <span
            key={index}
            style={{ color: letterColours[index] || "#FFFFFF" }}
          >
            {letter}
          </span>
        ))}
      </span>

      {/* Colon */}
      <span
        style={{
          color: showExtras
            ? colonColour
            : letterColours[letterColours.length - 1] || "#FFFFFF",
        }}
      >
        :
      </span>

      {/* Message */}
      <span style={{ color: showExtras ? messageColour : "#FFFFFF" }}>
        {" "}
        {t("previewSampleMessage")}
      </span>
    </div>
  );
}
