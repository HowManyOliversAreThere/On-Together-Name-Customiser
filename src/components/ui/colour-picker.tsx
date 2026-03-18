import { useI18n } from "@/hooks/use-i18n";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShuffleIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

const generateRandomColour = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

interface ColourPickerProps {
  value: string;
  onChange: (value: string) => void;
  /** Show hex text input alongside the swatch. Default: true */
  showInput?: boolean;
  /** Use compact sizing for tighter layouts. Default: false */
  compact?: boolean;
  className?: string;
}

export function ColourPicker({
  value,
  onChange,
  showInput = true,
  compact = false,
  className,
}: ColourPickerProps) {
  const { t } = useI18n();

  const swatchWidth = compact ? "w-10" : "w-12";
  const buttonWidth = compact ? "w-8" : "w-9";
  const iconSize = compact ? "size-3.5" : "size-4";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cn(
              "absolute inset-0 h-9 cursor-pointer opacity-0",
              swatchWidth
            )}
          />
          <div
            className={cn(
              "h-9 rounded-l-lg border border-r-0 border-border cursor-pointer",
              swatchWidth
            )}
            style={{ backgroundColor: value }}
          />
        </div>
        <button
          type="button"
          onClick={() => onChange(generateRandomColour())}
          className={cn(
            "h-9 flex items-center justify-center rounded-r-lg border border-border bg-muted/50 hover:bg-muted cursor-pointer transition-colors",
            buttonWidth
          )}
          title={t("randomColour")}
        >
          <HugeiconsIcon icon={ShuffleIcon} className={iconSize} />
        </button>
      </div>
      {showInput && (
        <input
          type="text"
          value={value.toUpperCase()}
          onChange={(e) => {
            const val = e.target.value;
            if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
              onChange(val);
            }
          }}
          className="h-9 w-24 rounded-lg border border-border bg-input/30 px-2 text-sm font-mono"
          maxLength={7}
        />
      )}
    </div>
  );
}
