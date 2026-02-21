import { useState, useCallback, useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { getContrastColour } from "@/lib/colour-utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LetterEditorProps {
  name: string;
  letterColours: string[];
  selectedIndices: Set<number>;
  onSelectionChange: (indices: Set<number>) => void;
  onApplyColour: (colour: string) => void;
  onApplyGradient: (start: string, end: string) => void;
}

export function LetterEditor({
  name,
  letterColours,
  selectedIndices,
  onSelectionChange,
  onApplyColour,
  onApplyGradient,
}: LetterEditorProps) {
  const { t } = useI18n();
  const [pickerColour, setPickerColour] = useState("#ffffff");
  const [gradientStart, setGradientStart] = useState("#ff6b6b");
  const [gradientEnd, setGradientEnd] = useState("#4ecdc4");
  const lastClickedRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<number | null>(null);

  const handleLetterMouseDown = useCallback(
    (index: number, event: React.MouseEvent) => {
      event.preventDefault();
      const isMeta = event.metaKey || event.ctrlKey;
      const isShift = event.shiftKey;

      if (isShift && lastClickedRef.current !== null) {
        const start = Math.min(lastClickedRef.current, index);
        const end = Math.max(lastClickedRef.current, index);
        const range = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        if (isMeta) {
          onSelectionChange(new Set([...selectedIndices, ...range]));
        } else {
          onSelectionChange(new Set(range));
        }
      } else if (isMeta) {
        const next = new Set(selectedIndices);
        if (next.has(index)) next.delete(index);
        else next.add(index);
        onSelectionChange(next);
      } else {
        onSelectionChange(new Set([index]));
        isDraggingRef.current = true;
        dragStartRef.current = index;
      }

      lastClickedRef.current = index;
    },
    [selectedIndices, onSelectionChange]
  );

  const handleLetterMouseEnter = useCallback(
    (index: number) => {
      if (isDraggingRef.current && dragStartRef.current !== null) {
        const start = Math.min(dragStartRef.current, index);
        const end = Math.max(dragStartRef.current, index);
        const range = Array.from(
          { length: end - start + 1 },
          (_, i) => start + i
        );
        onSelectionChange(new Set(range));
      }
    },
    [onSelectionChange]
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleSelectAll = () => {
    onSelectionChange(
      new Set(Array.from({ length: name.length }, (_, i) => i))
    );
  };

  const handleDeselectAll = () => {
    onSelectionChange(new Set());
  };

  if (!name) {
    return (
      <p className="text-muted-foreground text-sm italic">{t("enterName")}</p>
    );
  }

  return (
    <div
      className="space-y-4"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Letter tiles */}
      <div className="flex flex-wrap gap-1.5 select-none">
        {name.split("").map((letter, index) => {
          const colour = letterColours[index] || "#FFFFFF";
          const isSelected = selectedIndices.has(index);
          const contrastColour = getContrastColour(colour);

          return (
            <button
              key={index}
              onMouseDown={(e) => handleLetterMouseDown(index, e)}
              onMouseEnter={() => handleLetterMouseEnter(index)}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold transition-all cursor-pointer",
                "ring-1 ring-inset",
                isSelected
                  ? "ring-2 ring-primary scale-110 shadow-lg z-10"
                  : "ring-border hover:ring-foreground/30"
              )}
              style={{
                backgroundColor: colour,
                color: contrastColour,
              }}
              title={`${letter} — ${colour.toUpperCase()}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </button>
          );
        })}
      </div>

      {/* Selection controls */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={handleSelectAll}>
          {t("selectAll")}
        </Button>
        <Button variant="outline" size="sm" onClick={handleDeselectAll}>
          {t("deselectAll")}
        </Button>
      </div>

      {selectedIndices.size === 0 ? (
        <p className="text-muted-foreground text-sm italic">
          {t("noLettersSelected")}
        </p>
      ) : (
        <div className="space-y-4">
          {/* Single colour */}
          <div className="flex flex-wrap items-end gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">{t("colourLabel")}</label>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="color"
                    value={pickerColour}
                    onChange={(e) => setPickerColour(e.target.value)}
                    className="absolute inset-0 h-9 w-12 cursor-pointer opacity-0"
                  />
                  <div
                    className="h-9 w-12 rounded-lg border border-border cursor-pointer"
                    style={{ backgroundColor: pickerColour }}
                  />
                </div>
                <input
                  type="text"
                  value={pickerColour.toUpperCase()}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
                      setPickerColour(val);
                    }
                  }}
                  className="h-9 w-24 rounded-lg border border-border bg-input/30 px-2 text-sm font-mono"
                  maxLength={7}
                />
              </div>
            </div>
            <Button size="sm" onClick={() => onApplyColour(pickerColour)}>
              {t("applyColour")}
            </Button>
          </div>

          {/* Gradient */}
          <div className="flex flex-wrap items-end gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">
                {t("gradientLabel")}
              </label>
              <div className="flex items-center gap-2">
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">
                    {t("gradientStart")}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <input
                        type="color"
                        value={gradientStart}
                        onChange={(e) => setGradientStart(e.target.value)}
                        className="absolute inset-0 h-9 w-10 cursor-pointer opacity-0"
                      />
                      <div
                        className="h-9 w-10 rounded-lg border border-border cursor-pointer"
                        style={{ backgroundColor: gradientStart }}
                      />
                    </div>
                  </div>
                </div>
                <span className="text-muted-foreground mt-4">→</span>
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">
                    {t("gradientEnd")}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <input
                        type="color"
                        value={gradientEnd}
                        onChange={(e) => setGradientEnd(e.target.value)}
                        className="absolute inset-0 h-9 w-10 cursor-pointer opacity-0"
                      />
                      <div
                        className="h-9 w-10 rounded-lg border border-border cursor-pointer"
                        style={{ backgroundColor: gradientEnd }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onApplyGradient(gradientStart, gradientEnd)}
            >
              {t("applyGradient")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
