import {
  createContext,
  useContext,
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

const I18nContext = createContext<I18nContextType | null>(null);

function detectLanguage(): Language {
  const saved = localStorage.getItem("otNameLang");
  if (saved && saved in LANGUAGE_NAMES) return saved as Language;

  const browserLang = navigator.language;
  const langs = Object.keys(LANGUAGE_NAMES) as Language[];

  // Exact match first
  const exact = langs.find(
    (l) => browserLang.toLowerCase() === l.toLowerCase()
  );
  if (exact) return exact;

  // Prefix match
  const prefix = langs.find((l) =>
    browserLang.toLowerCase().startsWith(l.split("-")[0].toLowerCase())
  );
  if (prefix) return prefix;

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

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
