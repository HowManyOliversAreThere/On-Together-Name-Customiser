import { useState, useMemo, useCallback } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { generateGradient } from "@/lib/colour-utils";
import { generateTags } from "@/lib/tag-generator";
import { LanguageSelector } from "@/components/language-selector";
import { LetterEditor } from "@/components/letter-editor";
import { Preview } from "@/components/preview";
import { CodeOutput } from "@/components/code-output";
import { Instructions } from "@/components/instructions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

const DEFAULT_COLOUR = "#ffffff";

export function NameCustomiser() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [letterColours, setLetterColours] = useState<string[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<Set<number>>(
    new Set()
  );
  const [colonColour, setColonColour] = useState("#ffffff");
  const [messageColour, setMessageColour] = useState("#ffffff");
  const [includeExtras, setIncludeExtras] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (code: string) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const handleNameChange = useCallback((newName: string) => {
    setName(newName);
    setLetterColours((prev) => {
      const next = [...prev];
      while (next.length < newName.length) {
        next.push(DEFAULT_COLOUR);
      }
      return next.slice(0, newName.length);
    });
    setSelectedIndices((prev) => {
      const filtered = new Set([...prev].filter((i) => i < newName.length));
      return filtered.size === prev.size ? prev : filtered;
    });
  }, []);

  const handleApplyColour = useCallback(
    (colour: string) => {
      setLetterColours((prev) => {
        const next = [...prev];
        for (const i of selectedIndices) {
          next[i] = colour;
        }
        return next;
      });
    },
    [selectedIndices]
  );

  const handleApplyGradient = useCallback(
    (start: string, end: string) => {
      const sorted = [...selectedIndices].sort((a, b) => a - b);
      if (sorted.length === 0) return;
      if (sorted.length === 1) {
        handleApplyColour(start);
        return;
      }
      const gradient = generateGradient(start, end, sorted.length);
      setLetterColours((prev) => {
        const next = [...prev];
        sorted.forEach((letterIndex, gradientIndex) => {
          next[letterIndex] = gradient[gradientIndex];
        });
        return next;
      });
    },
    [selectedIndices, handleApplyColour]
  );

  const generatedCode = useMemo(() => {
    return generateTags({
      name,
      letterColours,
      colonColour: includeExtras ? colonColour : null,
      messageColour: includeExtras ? messageColour : null,
    });
  }, [name, letterColours, colonColour, messageColour, includeExtras]);

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 pb-16">
      {/* Header */}
      <header className="-mx-4 -mt-4 bg-card/95 backdrop-blur-sm px-4 py-4 rounded-b-2xl border-b border-border/50">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {t("appTitle")}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {t("appSubtitle")}
            </p>
          </div>
          <LanguageSelector />
        </div>
      </header>

      {/* Name Input */}
      <Card>
        <CardHeader>
          <CardTitle>{t("nameLabel")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder={t("namePlaceholder")}
            className="text-base"
            autoComplete="off"
            spellCheck={false}
          />
        </CardContent>
      </Card>

      {/* Letter Colours */}
      <Card>
        <CardHeader>
          <CardTitle>{t("letterColoursTitle")}</CardTitle>
          {name && (
            <CardDescription>{t("letterColoursHint")}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <LetterEditor
            name={name}
            letterColours={letterColours}
            selectedIndices={selectedIndices}
            onSelectionChange={setSelectedIndices}
            onApplyColour={handleApplyColour}
            onApplyGradient={handleApplyGradient}
          />
        </CardContent>
      </Card>

      {/* Chat Colours */}
      <Card>
        <CardHeader>
          <CardTitle>{t("chatColoursTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeExtras}
                onChange={(e) => setIncludeExtras(e.target.checked)}
                className="size-4 rounded border-border accent-primary"
              />
              <span className="text-sm font-medium">
                {t("enableChatColours")}
              </span>
            </label>

            {includeExtras && (
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Colon colour */}
                <div className="space-y-1.5">
                  <Label>{t("colonColourLabel")}</Label>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        type="color"
                        value={colonColour}
                        onChange={(e) => setColonColour(e.target.value)}
                        className="absolute inset-0 h-9 w-12 cursor-pointer opacity-0"
                      />
                      <div
                        className="h-9 w-12 rounded-lg border border-border cursor-pointer"
                        style={{ backgroundColor: colonColour }}
                      />
                    </div>
                    <input
                      type="text"
                      value={colonColour.toUpperCase()}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
                          setColonColour(val);
                        }
                      }}
                      className="h-9 w-24 rounded-lg border border-border bg-input/30 px-2 text-sm font-mono"
                      maxLength={7}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t("colonColourHint")}
                  </p>
                </div>

                {/* Message colour */}
                <div className="space-y-1.5">
                  <Label>{t("messageColourLabel")}</Label>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        type="color"
                        value={messageColour}
                        onChange={(e) => setMessageColour(e.target.value)}
                        className="absolute inset-0 h-9 w-12 cursor-pointer opacity-0"
                      />
                      <div
                        className="h-9 w-12 rounded-lg border border-border cursor-pointer"
                        style={{ backgroundColor: messageColour }}
                      />
                    </div>
                    <input
                      type="text"
                      value={messageColour.toUpperCase()}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
                          setMessageColour(val);
                        }
                      }}
                      className="h-9 w-24 rounded-lg border border-border bg-input/30 px-2 text-sm font-mono"
                      maxLength={7}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t("messageColourHint")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>{t("previewTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Preview
            name={name}
            letterColours={letterColours}
            colonColour={colonColour}
            messageColour={messageColour}
            showExtras={includeExtras}
          />
        </CardContent>
      </Card>

      {/* Generated Code */}
      <Card>
        <CardHeader>
          <CardTitle>{t("generatedCodeTitle")}</CardTitle>
          {generatedCode && (
            <CardAction>
              <Button
                size="sm"
                variant={copied ? "default" : "outline"}
                onClick={() => handleCopy(generatedCode)}
              >
                <HugeiconsIcon
                  icon={copied ? Tick02Icon : Copy01Icon}
                  className="size-3.5"
                />
                {copied ? t("copiedButton") : t("copyButton")}
              </Button>
            </CardAction>
          )}
        </CardHeader>
        <CardContent>
          <CodeOutput code={generatedCode} />
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>{t("instructionsTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Instructions generatedCode={generatedCode} />
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="-mx-4 -mb-16 bg-card/95 backdrop-blur-sm px-4 py-4 rounded-t-2xl border-t border-border/50 space-y-1">
        <p className="text-center text-xs text-muted-foreground">
          {t("footerFanCreation")}
        </p>
        <p className="text-center text-xs text-muted-foreground">
          <a
            href="https://gigapuff.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            On-Together: Virtual Co-Working
          </a>
          {" · "}
          {t("footerInspired")}{" "}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3651157970"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            {t("footerGuideLink")}
          </a>
        </p>
        <p className="text-center text-xs text-muted-foreground">
          <a
            href="https://github.com/HowManyOliversAreThere/On-Together-Name-Customiser"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            {t("footerSourceCode")}
          </a>
        </p>
      </footer>
    </div>
  );
}
