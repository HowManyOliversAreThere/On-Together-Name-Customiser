import { useI18n } from "@/hooks/use-i18n";

interface CodeOutputProps {
  code: string;
}

export function CodeOutput({ code }: CodeOutputProps) {
  const { t } = useI18n();

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
      <div className="rounded-xl border border-border bg-zinc-100 p-4">
        <pre className="overflow-x-auto whitespace-pre-wrap break-all font-mono text-sm text-zinc-700">
          {code}
        </pre>
      </div>
      <p className="text-xs text-muted-foreground">{t("generatedCodeHint")}</p>
    </div>
  );
}
