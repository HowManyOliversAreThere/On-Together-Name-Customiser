import { useState, useCallback, useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { getContrastColour } from "@/lib/colour-utils";
import { Button } from "@/components/ui/button";
import { ColourPicker } from "@/components/ui/colour-picker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface LetterEditorProps {
  name: string;
  letterColours: string[];
  letterBold: boolean[];
  letterItalic: boolean[];
  selectedIndices: Set<number>;
  onSelectionChange: (indices: Set<number>) => void;
  onApplyColour: (colour: string) => void;
  onApplyGradient: (start: string, end: string) => void;
  onApplyGradient3: (start: string, mid: string, end: string) => void;
  onToggleBold: () => void;
  onToggleItalic: () => void;
}

export function LetterEditor({
  name,
  letterColours,
  letterBold,
  letterItalic,
  selectedIndices,
  onSelectionChange,
  onApplyColour,
  onApplyGradient,
  onApplyGradient3,
  onToggleBold,
  onToggleItalic,
}: LetterEditorProps) {
  const { t } = useI18n();
  const [pickerColour, setPickerColour] = useState("#ffffff");
  const [gradientStart, setGradientStart] = useState("#ff6b6b");
  const [gradientEnd, setGradientEnd] = useState("#4ecdc4");
  const [gradient3Start, setGradient3Start] = useState("#ff6b6b");
  const [gradient3Mid, setGradient3Mid] = useState("#ffd93d");
  const [gradient3End, setGradient3End] = useState("#4ecdc4");
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
                "relative flex h-10 w-10 items-center justify-center rounded-lg text-base transition-all cursor-pointer",
                "ring-1 ring-inset",
                letterBold[index] ? "font-bold" : "font-normal",
                letterItalic[index] ? "italic" : "",
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
          {/* Bold / Italic toggles */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={
                [...selectedIndices].every((i) => letterBold[i])
                  ? "default"
                  : "outline"
              }
              onClick={onToggleBold}
            >
              <span className="font-bold">{t("boldLabel")}</span>
            </Button>
            <Button
              size="sm"
              variant={
                [...selectedIndices].every((i) => letterItalic[i])
                  ? "default"
                  : "outline"
              }
              onClick={onToggleItalic}
            >
              <span className="italic">{t("italicLabel")}</span>
            </Button>
          </div>

          {/* Colour application modes */}
          <Accordion type="single" collapsible defaultValue="single-colour">
            {/* Single colour */}
            <AccordionItem value="single-colour">
              <AccordionTrigger>{t("singleColourTitle")}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap items-end gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">
                      {t("colourLabel")}
                    </label>
                    <ColourPicker
                      value={pickerColour}
                      onChange={setPickerColour}
                    />
                  </div>
                  <Button size="sm" onClick={() => onApplyColour(pickerColour)}>
                    {t("applyColour")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2-point gradient */}
            <AccordionItem value="gradient-2">
              <AccordionTrigger>{t("gradient2Title")}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap items-end gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {t("gradientStart")}
                        </span>
                        <ColourPicker
                          value={gradientStart}
                          onChange={setGradientStart}
                          showInput={false}
                          compact
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const temp = gradientStart;
                          setGradientStart(gradientEnd);
                          setGradientEnd(temp);
                        }}
                        className="mt-4 p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title={t("swapGradient")}
                      >
                        ⇄
                      </button>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {t("gradientEnd")}
                        </span>
                        <ColourPicker
                          value={gradientEnd}
                          onChange={setGradientEnd}
                          showInput={false}
                          compact
                        />
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
              </AccordionContent>
            </AccordionItem>

            {/* 3-point gradient */}
            <AccordionItem value="gradient-3">
              <AccordionTrigger>{t("gradient3Title")}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap items-end gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {t("gradientStart")}
                        </span>
                        <ColourPicker
                          value={gradient3Start}
                          onChange={setGradient3Start}
                          showInput={false}
                          compact
                        />
                      </div>
                      <span className="text-muted-foreground mt-4">→</span>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {t("gradientMid")}
                        </span>
                        <ColourPicker
                          value={gradient3Mid}
                          onChange={setGradient3Mid}
                          showInput={false}
                          compact
                        />
                      </div>
                      <span className="text-muted-foreground mt-4">→</span>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          {t("gradientEnd")}
                        </span>
                        <ColourPicker
                          value={gradient3End}
                          onChange={setGradient3End}
                          showInput={false}
                          compact
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      onApplyGradient3(
                        gradient3Start,
                        gradient3Mid,
                        gradient3End
                      )
                    }
                  >
                    {t("applyGradient")}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
}
