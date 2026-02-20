import { I18nProvider } from "@/lib/i18n";
import { NameCustomiser } from "@/components/name-customiser";

export function App() {
  return (
    <I18nProvider>
      <NameCustomiser />
    </I18nProvider>
  );
}

export default App;