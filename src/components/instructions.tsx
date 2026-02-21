import { useI18n } from "@/hooks/use-i18n";
import { Separator } from "@/components/ui/separator";

const STATUS_MANAGER_URL =
  "https://thunderstore.io/c/on-together/p/officer_balls/officerballs_StatusManager/";

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
        <li>{t("stepBackup")}</li>
        <li>
          {t("step3")}
          <div className="mt-2 ml-5">
            <code className="rounded bg-muted px-2 py-1 font-mono text-xs">
              {t("step3Example")}
            </code>
          </div>
        </li>
        <li>{t("step4")}</li>
        <li>{t("step5")}</li>
      </ol>

      <Separator />

      <div className="space-y-2">
        <h4 className="font-medium">{t("altMethodTitle")}</h4>
        <p className="text-muted-foreground">
          {t("altMethodDesc")}{" "}
          <a
            href={STATUS_MANAGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            {t("altMethodLink")}
          </a>
        </p>
      </div>
    </div>
  );
}
