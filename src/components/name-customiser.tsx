import { useState, useMemo, useCallback } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { generateGradient, generate3PointGradient } from "@/lib/colour-utils";
import { generateTags } from "@/lib/tag-generator";
import { LanguageSelector } from "@/components/language-selector";
import { LetterEditor } from "@/components/letter-editor";
import { Preview } from "@/components/preview";
import { CodeOutput } from "@/components/code-output";
import { Instructions } from "@/components/instructions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColourPicker } from "@/components/ui/colour-picker";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Copy01Icon,
  GithubIcon,
  KoFiIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";

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
  const [letterBold, setLetterBold] = useState<boolean[]>([]);
  const [letterItalic, setLetterItalic] = useState<boolean[]>([]);
  const [chatBold, setChatBold] = useState(false);
  const [chatItalic, setChatItalic] = useState(false);
  const [copied, setCopied] = useState(false);
  const [overrideDialogOpen, setOverrideDialogOpen] = useState(false);
  const [pendingNameData, setPendingNameData] = useState<{
    name: string;
    letterColours: string[];
    letterBold: boolean[];
    letterItalic: boolean[];
    chatBold: boolean;
    chatItalic: boolean;
    colonColour: string | null;
    messageColour: string | null;
  } | null>(null);

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
    setLetterBold((prev) => {
      const next = [...prev];
      while (next.length < newName.length) {
        next.push(false);
      }
      return next.slice(0, newName.length);
    });
    setLetterItalic((prev) => {
      const next = [...prev];
      while (next.length < newName.length) {
        next.push(false);
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

  const handleApplyGradient3 = useCallback(
    (start: string, mid: string, end: string) => {
      const sorted = [...selectedIndices].sort((a, b) => a - b);
      if (sorted.length === 0) return;
      if (sorted.length === 1) {
        handleApplyColour(start);
        return;
      }
      const gradient = generate3PointGradient(start, mid, end, sorted.length);
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

  const handleToggleBold = useCallback(() => {
    const allBold = [...selectedIndices].every((i) => letterBold[i]);
    setLetterBold((prev) => {
      const next = [...prev];
      for (const i of selectedIndices) {
        next[i] = !allBold;
      }
      return next;
    });
  }, [selectedIndices, letterBold]);

  const handleToggleItalic = useCallback(() => {
    const allItalic = [...selectedIndices].every((i) => letterItalic[i]);
    setLetterItalic((prev) => {
      const next = [...prev];
      for (const i of selectedIndices) {
        next[i] = !allItalic;
      }
      return next;
    });
  }, [selectedIndices, letterItalic]);

  const applyParsedName = useCallback(
    (data: {
      name: string;
      letterColours: string[];
      letterBold: boolean[];
      letterItalic: boolean[];
      chatBold: boolean;
      chatItalic: boolean;
      colonColour: string | null;
      messageColour: string | null;
    }) => {
      setName(data.name);
      setLetterColours(data.letterColours);
      setLetterBold(data.letterBold);
      setLetterItalic(data.letterItalic);
      setSelectedIndices(new Set());
      setChatBold(data.chatBold);
      setChatItalic(data.chatItalic);
      if (data.colonColour || data.messageColour) {
        setIncludeExtras(true);
        if (data.colonColour) setColonColour(data.colonColour);
        if (data.messageColour) setMessageColour(data.messageColour);
      }
    },
    []
  );

  const handleNameLoaded = useCallback(
    (data: {
      name: string;
      letterColours: string[];
      letterBold: boolean[];
      letterItalic: boolean[];
      chatBold: boolean;
      chatItalic: boolean;
      colonColour: string | null;
      messageColour: string | null;
    }) => {
      if (!name) {
        applyParsedName(data);
      } else {
        setPendingNameData(data);
        setOverrideDialogOpen(true);
      }
    },
    [name, applyParsedName]
  );

  const generatedCode = useMemo(() => {
    return generateTags({
      name,
      letterColours,
      letterBold,
      letterItalic,
      colonColour: includeExtras ? colonColour : null,
      messageColour: includeExtras ? messageColour : null,
      chatBold,
      chatItalic,
    });
  }, [
    name,
    letterColours,
    letterBold,
    letterItalic,
    colonColour,
    messageColour,
    includeExtras,
    chatBold,
    chatItalic,
  ]);

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 pb-16">
      {/* Header */}
      <header className="-mx-4 -mt-4 bg-card/95 backdrop-blur-sm px-4 py-4 rounded-b-2xl border-b border-border/50">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">{t("appTitle")}</h1>
          <LanguageSelector />
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {(() => {
            const gameName = "On-Together: Virtual Co-Working";
            const subtitle = t("appSubtitle");
            const idx = subtitle.indexOf(gameName);
            if (idx === -1) return subtitle;
            return (
              <>
                {subtitle.slice(0, idx)}
                <a
                  href="https://gigapuff.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  {gameName}
                </a>
                {subtitle.slice(idx + gameName.length)}
              </>
            );
          })()}
        </p>
      </header>

      {/* Name Input */}
      <Card>
        <CardHeader>
          <CardTitle>{t("nameLabel")}</CardTitle>
          <CardDescription>{t("nameLoadHint")}</CardDescription>
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

      {/* Letter Styling */}
      <Card>
        <CardHeader>
          <CardTitle>{t("letterStylingTitle")}</CardTitle>
          {name && <CardDescription>{t("letterStylingHint")}</CardDescription>}
        </CardHeader>
        <CardContent>
          <LetterEditor
            name={name}
            letterColours={letterColours}
            letterBold={letterBold}
            letterItalic={letterItalic}
            selectedIndices={selectedIndices}
            onSelectionChange={setSelectedIndices}
            onApplyColour={handleApplyColour}
            onApplyGradient={handleApplyGradient}
            onApplyGradient3={handleApplyGradient3}
            onToggleBold={handleToggleBold}
            onToggleItalic={handleToggleItalic}
          />
        </CardContent>
      </Card>

      {/* Chat Colours */}
      <Card>
        <CardHeader>
          <CardTitle>{t("chatStylingTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
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
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatBold}
                  onChange={(e) => setChatBold(e.target.checked)}
                  className="size-4 rounded border-border accent-primary"
                />
                <span className="text-sm font-medium">
                  {t("chatBoldLabel")}
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={chatItalic}
                  onChange={(e) => setChatItalic(e.target.checked)}
                  className="size-4 rounded border-border accent-primary"
                />
                <span className="text-sm font-medium">
                  {t("chatItalicLabel")}
                </span>
              </label>
            </div>

            {includeExtras && (
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Colon colour */}
                <div className="space-y-1.5">
                  <Label>{t("colonColourLabel")}</Label>
                  <ColourPicker value={colonColour} onChange={setColonColour} />
                  <p className="text-xs text-muted-foreground">
                    {t("colonColourHint")}
                  </p>
                </div>

                {/* Message colour */}
                <div className="space-y-1.5">
                  <Label>{t("messageColourLabel")}</Label>
                  <ColourPicker
                    value={messageColour}
                    onChange={setMessageColour}
                  />
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
            letterBold={letterBold}
            letterItalic={letterItalic}
            colonColour={colonColour}
            messageColour={messageColour}
            showExtras={includeExtras}
            chatBold={chatBold}
            chatItalic={chatItalic}
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
          <Instructions
            generatedCode={generatedCode}
            onNameLoaded={handleNameLoaded}
          />
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="-mx-4 -mb-16 bg-card/95 backdrop-blur-sm px-4 py-4 rounded-t-2xl border-t border-border/50 space-y-1">
        <p className="text-center text-xs text-muted-foreground">
          {t("footerFanCreation")}
        </p>
        <p className="text-center text-xs text-muted-foreground flex flex-row gap-1 justify-center">
          {t("footerInspired")}{" "}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=3651157970"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            {t("footerGuideLink")}
          </a>
          {" · "}
          <a
            href="https://github.com/HowManyOliversAreThere/On-Together-Name-Customiser"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            <div className="flex flex=row gap-1">
              <HugeiconsIcon
                icon={GithubIcon}
                strokeWidth={2}
                className="h-5 -translate-y-0.5"
              />
              {t("footerSourceCode")}
            </div>
          </a>
          {" · "}
          <a
            href="https://ko-fi.com/F1F21UNYHM"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            <div className="flex flex-row gap-1">
              <HugeiconsIcon
                icon={KoFiIcon}
                strokeWidth={2}
                className="h-6 -translate-y-1"
              />
              {t("footerKofi")}
            </div>
          </a>
        </p>
      </footer>

      {/* Override Name Dialog */}
      <AlertDialog
        open={overrideDialogOpen}
        onOpenChange={setOverrideDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("nameOverrideTitle")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("nameOverrideDesc")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setPendingNameData(null);
                setOverrideDialogOpen(false);
              }}
            >
              {t("nameOverrideCancel")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (pendingNameData) applyParsedName(pendingNameData);
                setPendingNameData(null);
                setOverrideDialogOpen(false);
              }}
            >
              {t("nameOverrideConfirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
