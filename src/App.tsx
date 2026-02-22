import { I18nProvider } from "@/lib/i18n";
import { PreviewBgProvider } from "@/lib/preview-bg";
import { NameCustomiser } from "@/components/name-customiser";

export function App() {
  return (
    <I18nProvider>
      <PreviewBgProvider>
        <NameCustomiser />
      </PreviewBgProvider>
    </I18nProvider>
  );
}

export default App;
