import { translations } from "../src/lib/translations.js";

const languages = Object.keys(translations) as (keyof typeof translations)[];
const allKeys = new Set(
  languages.flatMap((lang) => Object.keys(translations[lang]))
);

let hasErrors = false;

for (const lang of languages) {
  const langKeys = new Set(Object.keys(translations[lang]));
  const missing = [...allKeys].filter((key) => !langKeys.has(key));

  if (missing.length > 0) {
    hasErrors = true;
    console.error(
      `[${lang}] missing ${missing.length} key(s): ${missing.join(", ")}`
    );
  }
}

if (hasErrors) {
  console.error("\nTranslation check failed: some languages are missing keys.");
  process.exit(1);
} else {
  console.log(
    `Translation check passed: all ${languages.length} languages have ${allKeys.size} keys.`
  );
}
