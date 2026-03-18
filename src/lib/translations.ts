import translationsAr from "./translations/ar";
import translationsDe from "./translations/de";
import translationsEn from "./translations/en";
import translationsEnUS from "./translations/en-US";
import translationsEs from "./translations/es";
import translationsFr from "./translations/fr";
import translationsId from "./translations/id";
import translationsIt from "./translations/it";
import translationsJa from "./translations/ja";
import translationsKo from "./translations/ko";
import translationsPl from "./translations/pl";
import translationsPtBR from "./translations/pt-BR";
import translationsTh from "./translations/th";
import translationsTr from "./translations/tr";
import translationsUk from "./translations/uk";
import translationsVi from "./translations/vi";
import translationsZhCN from "./translations/zh-CN";
import translationsZhTW from "./translations/zh-TW";

export type Language =
  | "en"
  | "fr"
  | "it"
  | "de"
  | "es"
  | "ar"
  | "id"
  | "ja"
  | "ko"
  | "pt-BR"
  | "pl"
  | "zh-CN"
  | "th"
  | "zh-TW"
  | "tr"
  | "en-US"
  | "uk"
  | "vi";

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English (UK)",
  "en-US": "English (US)",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
  "pt-BR": "Português (BR)",
  pl: "Polski",
  uk: "Українська",
  tr: "Türkçe",
  ar: "العربية",
  ja: "日本語",
  ko: "한국어",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  th: "ไทย",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
};

export const RTL_LANGUAGES: Language[] = ["ar"];

type Translations = Record<string, string>;

export const translations: Record<Language, Translations> = {
  en: translationsEn,

  "en-US": translationsEnUS,

  ja: translationsJa,

  ko: translationsKo,

  "zh-CN": translationsZhCN,

  "zh-TW": translationsZhTW,

  fr: translationsFr,

  de: translationsDe,

  es: translationsEs,

  "pt-BR": translationsPtBR,

  it: translationsIt,

  tr: translationsTr,

  pl: translationsPl,

  uk: translationsUk,

  ar: translationsAr,

  id: translationsId,

  th: translationsTh,

  vi: translationsVi,
};
