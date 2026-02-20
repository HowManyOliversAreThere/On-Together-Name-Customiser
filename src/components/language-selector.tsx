import { useI18n, LANGUAGE_NAMES, type Language } from "@/lib/i18n";
import { RTL_LANGUAGES } from "@/lib/translations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HugeiconsIcon } from "@hugeicons/react";
import { Globe02Icon } from "@hugeicons/core-free-icons";

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();

  const handleChange = (value: string) => {
    const lang = value as Language;
    setLanguage(lang);
    document.documentElement.dir = RTL_LANGUAGES.includes(lang)
      ? "rtl"
      : "ltr";
  };

  return (
    <Select value={language} onValueChange={handleChange}>
      <SelectTrigger className="w-auto gap-2">
        <HugeiconsIcon
          icon={Globe02Icon}
          className="size-4 text-muted-foreground"
        />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {(Object.entries(LANGUAGE_NAMES) as [Language, string][]).map(
          ([code, name]) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
}
