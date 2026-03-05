import { useEffect, useState } from "react";
import { I18nProvider } from "@/lib/i18n";
import { PreviewBgProvider } from "@/lib/preview-bg";
import { NameCustomiser } from "@/components/name-customiser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NEW_URL = "https://namestyler.app";
const OLD_DOMAINS = ["oliverrobson.tech"];

function DomainRedirect() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(interval);
          window.location.href =
            NEW_URL +
            window.location.pathname +
            window.location.search +
            window.location.hash;
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 pb-16">
      <div className="flex items-center justify-center min-h-[60svh]">
        <Card className="text-center overflow-x-scroll xs:min-w-sm">
          <CardHeader>
            <CardTitle>
              Name Maker is now <b>Name Styler</b>!
            </CardTitle>
            <CardDescription>
              Please update your bookmarks to{" "}
              <a href={NEW_URL} className="text-primary underline font-medium">
                NameStyler.app
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground"></p>
            <p className="text-sm text-muted-foreground">
              Redirecting in{" "}
              <span className="font-mono font-semibold text-foreground">
                {seconds}
              </span>{" "}
              second{seconds !== 1 && "s"}…
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function App() {
  if (OLD_DOMAINS.some((domain) => window.location.hostname.includes(domain))) {
    return <DomainRedirect />;
  }

  return (
    <I18nProvider>
      <PreviewBgProvider>
        <NameCustomiser />
      </PreviewBgProvider>
    </I18nProvider>
  );
}

export default App;
