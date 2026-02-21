import {
  createContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  translations,
  LANGUAGE_NAMES,
  type Language,
} from "@/lib/translations";

export type { Language };
export { LANGUAGE_NAMES };

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | null>(null);

function detectLanguage(): Language {
  const saved = localStorage.getItem("otNameLang");
  if (saved && saved in LANGUAGE_NAMES) return saved as Language;

  const langs = Object.keys(LANGUAGE_NAMES) as Language[];

  // Check all browser languages in priority order
  for (const browserLang of navigator.languages ?? [navigator.language]) {
    const normalised = browserLang.toLowerCase();

    // Exact match (e.g. "en-US" → "en-US", "pt-BR" → "pt-BR")
    const exact = langs.find((l) => normalised === l.toLowerCase());
    if (exact) return exact;

    // Region-specific match (e.g. browser "en-GB" → "en", "zh-Hans" → "zh-CN")
    const prefix = normalised.split("-")[0];
    const regionMatch = langs.find(
      (l) => l.toLowerCase().split("-")[0] === prefix
    );
    if (regionMatch) return regionMatch;
  }

  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("otNameLang", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}
