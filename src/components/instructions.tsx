import { useI18n } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";

export function Instructions() {
  const { t } = useI18n();

  return (
    <div className="space-y-4 text-sm">
      <p className="text-muted-foreground">{t("instructionIntro")}</p>

      <ol className="list-decimal list-inside space-y-3">
        <li>{t("step1")}</li>
        <li>
          {t("step2")}
          <div className="mt-2 ml-5 space-y-2">
            <div>
              <span className="font-medium text-muted-foreground">
                {t("windowsLabel")}:
              </span>
              <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-xs break-all">
                C:\Users\USERNAME\AppData\LocalLow\GigaPuff\On-Together\PlayerData.txt
              </code>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">
                {t("macLabel")}:
              </span>
              <code className="ml-2 rounded bg-muted px-2 py-0.5 font-mono text-xs break-all">
                ~/Library/Application
                Support/com.GigaPuff.On-Together/PlayerData.txt
              </code>
            </div>
          </div>
        </li>
        <li>{t("step3")}</li>
        <li>{t("step4")}</li>
        <li>{t("step5")}</li>
      </ol>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">{t("altMethodTitle")}</h4>
        <p className="text-muted-foreground">{t("altMethodDesc")}</p>
      </div>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">{t("tipTitle")}</h4>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>{t("tip40Char")}</li>
          <li>{t("tipBackup")}</li>
          <li>{t("tipEscapeQuotes")}</li>
        </ul>
      </div>
    </div>
  );
}
