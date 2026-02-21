import { useI18n } from "@/hooks/use-i18n";
import { FileApplicator } from "@/components/file-applicator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const STATUS_MANAGER_URL =
  "https://thunderstore.io/c/on-together/p/officer_balls/officerballs_StatusManager/";

interface InstructionsProps {
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

export function Instructions({
  generatedCode,
  onNameLoaded,
}: InstructionsProps) {
  const { t } = useI18n();

  return (
    <div className="space-y-4 text-sm">
      <p className="text-muted-foreground">{t("instructionIntro")}</p>

      <Accordion type="single" collapsible defaultValue="auto-apply">
        {/* Auto Applicator */}
        <AccordionItem value="auto-apply">
          <AccordionTrigger>{t("autoApplyTitle")}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">{t("autoApplyDesc")}</p>
              <p className="text-muted-foreground text-xs italic">
                {t("autoApplyPrivacy")}
              </p>
              <FileApplicator
                generatedCode={generatedCode}
                onNameLoaded={onNameLoaded}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Manual File Editing */}
        <AccordionItem value="manual">
          <AccordionTrigger>{t("manualMethodTitle")}</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>

        {/* StatusManager Mod */}
        <AccordionItem value="statusmanager">
          <AccordionTrigger>{t("altMethodTitle")}</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
