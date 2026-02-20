import { useState, useCallback } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

interface CodeOutputProps {
  code: string;
}

export function CodeOutput({ code }: CodeOutputProps) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  if (!code) {
    return (
      <div className="rounded-xl border border-border bg-muted/50 p-4">
        <span className="text-muted-foreground text-sm italic">
          {t("enterName")}
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative rounded-xl border border-border bg-zinc-900 p-4">
        <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-sm text-zinc-200 pr-16">
          {code}
        </pre>
        <Button
          size="sm"
          variant={copied ? "default" : "outline"}
          className="absolute top-3 right-3"
          onClick={handleCopy}
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className="size-3.5"
          />
          {copied ? t("copiedButton") : t("copyButton")}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">{t("generatedCodeHint")}</p>
    </div>
  );
}
