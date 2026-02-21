import { useState, useCallback, useRef, useMemo } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { extractName, replaceName } from "@/lib/player-data";
import { parseTmpName } from "@/lib/tmp-parser";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { DownloadIcon, Tick02Icon } from "@hugeicons/core-free-icons";

interface FileApplicatorProps {
  generatedCode: string;
  onNameLoaded?: (data: {
    name: string;
    letterColours: string[];
    letterBold: boolean[];
    letterItalic: boolean[];
    chatBold: boolean;
    chatItalic: boolean;
    colonColour: string | null;
    messageColour: string | null;
  }) => void;
}

export function FileApplicator({
  generatedCode,
  onNameLoaded,
}: FileApplicatorProps) {
  const { t } = useI18n();
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [oldName, setOldName] = useState<string | null>(null);
  const [rawContent, setRawContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [downloadedCode, setDownloadedCode] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const downloaded = downloadedCode === generatedCode && generatedCode !== "";

  // Recompute modified content whenever generatedCode or rawContent changes
  const modifiedContent =
    rawContent && generatedCode ? replaceName(rawContent, generatedCode) : null;

  // Parse old name TMP tags for visual preview
  const parsedOldName = useMemo(
    () => (oldName ? parseTmpName(oldName) : null),
    [oldName]
  );

  const processFile = useCallback(
    async (file: File) => {
      setError(null);
      setRawContent(null);
      setOldName(null);
      setDownloadedCode(null);

      try {
        const text = await file.text();
        const extracted = extractName(text);

        if (extracted === null) {
          setError(t("fileApplyNoName"));
          return;
        }

        setFileName(file.name);
        setOldName(extracted);
        setRawContent(text);

        // Notify parent about loaded name for backfill
        if (onNameLoaded) {
          const parsed = parseTmpName(extracted);
          if (parsed) {
            onNameLoaded({
              name: parsed.letters.map((l) => l.char).join(""),
              letterColours: parsed.letters.map((l) => l.colour),
              letterBold: parsed.letters.map((l) => l.bold),
              letterItalic: parsed.letters.map((l) => l.italic),
              chatBold: parsed.chatBold,
              chatItalic: parsed.chatItalic,
              colonColour: parsed.colonColour,
              messageColour: parsed.messageColour,
            });
          }
        }
      } catch {
        setError(t("fileApplyReadError"));
      }
    },
    [t, onNameLoaded]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragOver(false);

      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleDownload = useCallback(() => {
    if (!modifiedContent || !fileName) return;

    const blob = new Blob([modifiedContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloadedCode(generatedCode);
  }, [modifiedContent, fileName, generatedCode]);

  const handleReset = useCallback(() => {
    setFileName(null);
    setOldName(null);
    setRawContent(null);
    setError(null);
    setDownloadedCode(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  // File has been loaded — show info and download/waiting state
  if (rawContent && fileName) {
    const canDownload = !!modifiedContent;

    return (
      <div className="space-y-3">
        <div className="rounded-xl border border-border bg-muted/50 p-4 space-y-2">
          <p className="text-sm">
            <span className="font-medium">{t("fileApplyLoaded")}:</span>{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              {fileName}
            </code>
          </p>
          {oldName && parsedOldName && (
            <>
              <div className="rounded-lg bg-[#8B5C7B] px-3 py-2 text-sm leading-relaxed">
                {/* Name with colours */}
                <span>
                  {parsedOldName.letters.map((l, i) => (
                    <span
                      key={i}
                      className={[
                        l.bold ? "font-bold" : undefined,
                        l.italic ? "italic" : undefined,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      style={{ color: l.colour }}
                    >
                      {l.char}
                    </span>
                  ))}
                </span>
                {/* Colon */}
                <span
                  className={[
                    parsedOldName.chatBold ? "font-bold" : undefined,
                    parsedOldName.chatItalic ? "italic" : undefined,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    color:
                      parsedOldName.colonColour ??
                      parsedOldName.letters[parsedOldName.letters.length - 1]
                        ?.colour ??
                      "#FFFFFF",
                  }}
                >
                  :
                </span>
                {/* Sample message */}
                <span
                  style={{
                    color: parsedOldName.messageColour ?? "#FFFFFF",
                  }}
                >
                  {" "}
                  {t("previewSampleMessage")}
                </span>
              </div>
            </>
          )}
          {oldName && (
            <p className="text-xs text-muted-foreground">
              {t("fileApplyOldName")}:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs break-all">
                {oldName}
              </code>
            </p>
          )}
        </div>

        {canDownload ? (
          <>
            <div className="flex gap-2">
              <Button onClick={handleDownload} className="flex-1">
                <HugeiconsIcon
                  icon={downloaded ? Tick02Icon : DownloadIcon}
                  className="size-4"
                />
                {downloaded ? t("fileApplyDownloaded") : t("fileApplyDownload")}
              </Button>
              <Button variant="outline" onClick={handleReset}>
                {t("fileApplyReset")}
              </Button>
            </div>

            {downloaded && (
              <p className="text-xs text-muted-foreground">
                {t("fileApplyDownloadHint")}
              </p>
            )}
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              {t("fileApplyWaitingForName")}
            </p>
            <Button variant="outline" size="sm" onClick={handleReset}>
              {t("fileApplyReset")}
            </Button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-4 text-center transition-colors ${
          dragOver
            ? "border-primary bg-primary/10"
            : "border-border hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <p className="text-sm font-medium">{t("fileApplyDropZone")}</p>
        <p className="text-xs text-muted-foreground">
          {t("fileApplyDropHint")}
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".txt"
        onChange={handleFileInput}
        className="hidden"
      />

      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
