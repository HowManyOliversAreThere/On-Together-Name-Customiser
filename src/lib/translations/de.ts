const translations: Record<string, string> = {
  appTitle: "Namensstyler für On-Together",
  appSubtitle:
    "Passe die Farben deines Anzeigenamens in On-Together: Virtual Co-Working an",
  nameLabel: "Anzeigename",
  namePlaceholder: "Gib deinen Anzeigenamen ein...",
  letterStylingTitle: "Buchstabenstil",
  letterStylingHint:
    "Klicke auf Buchstaben, um sie auszuwählen, dann wende eine Farbe oder einen Verlauf an. Shift+Klick für Bereich, Strg/Cmd+Klick zum Umschalten.",
  selectAll: "Alle auswählen",
  deselectAll: "Auswahl aufheben",
  colourLabel: "Farbe",
  applyColour: "Farbe anwenden",
  randomColour: "Zufällig",
  gradientLabel: "Verlauf",
  gradientStart: "Anfang",
  gradientEnd: "Ende",
  swapGradient: "Farben tauschen",
  applyGradient: "Verlauf anwenden",
  singleColourTitle: "Einzelne Farbe",
  gradient2Title: "2-Farben-Verlauf",
  gradient3Title: "3-Farben-Verlauf",
  gradientMid: "Mitte",
  chatStylingTitle: "Chat-Stil",
  colonColourLabel: "Doppelpunkt-Farbe",
  colonColourHint: "Die Farbe des Doppelpunkts (:) nach deinem Namen im Chat",
  messageColourLabel: "Nachrichtenfarbe",
  messageColourHint: "Die Farbe deiner Chat-Nachrichten",
  previewTitle: "Vorschau",
  previewSampleMessage: "Hallo zusammen!",
  previewBgLabel: "Hintergrund:",
  previewBgDefault: "Standard",
  previewBgGrass: "Gras",
  previewBgRoad: "Straße",
  previewBgWater: "Wasser",
  previewBgWood: "Holz",
  generatedCodeTitle: "Generierter Code",
  generatedCodeHint:
    'Kopiere dies und füge es als Wert von "Name" in deiner PlayerData.txt ein',
  copyButton: "Kopieren",
  copiedButton: "Kopiert!",
  instructionsTitle: "So wendest du es an",
  instructionIntro:
    "Um deinen benutzerdefinierten Namen anzuwenden, bearbeite die PlayerData.txt:",
  step1: "Schließe das Spiel vollständig.",
  step2: "Navigiere zur PlayerData.txt unter:",
  stepBackup:
    "Erstelle eine Sicherungskopie der Datei (z.B. als PlayerData-backup.txt).",
  step3:
    'Öffne die Datei in einem Texteditor und finde das "Name"-Feld. Es sieht ungefähr so aus:',
  step3Example: '"Name":"DeinAktuellerName"',
  step4:
    'Ersetze den Wert (z.B. YourCurrentName im Beispiel oben) durch den Code aus dem Abschnitt "Generierter Code".',
  step5: "Speichere die Datei und starte das Spiel.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "Du kannst auch den StatusManager-Mod verwenden und den /setname-Befehl im Spiel nutzen.",
  altMethodLink: "StatusManager-Mod",
  tipTitle: "Tipps",
  tip40Char:
    "Das Namensfeld im Spiel hat ein 40-Zeichen-Limit, aber die Bearbeitung von PlayerData.txt umgeht dies.",
  tipBackup:
    "Erstelle immer ein Backup deiner PlayerData.txt vor dem Bearbeiten.",
  tipEscapeQuotes:
    'Wenn dein Name Anführungszeichen enthält, escape sie mit einem Backslash (\\") in der JSON-Datei.',
  enterName: "Gib oben einen Namen ein, um zu beginnen",
  noLettersSelected:
    "Wähle einen oder mehrere Buchstaben, um die Farbe festzulegen",
  languageLabel: "Sprache",
  enableChatColours: "Chat-Farben aktivieren",
  autoApplyTitle: "Automatisch anwenden",
  autoApplyDesc:
    "Ziehen Sie Ihre PlayerData.txt-Datei hierher und laden Sie die geänderte Version mit Ihrem neuen Namen herunter. Sichern Sie zuerst Ihre vorhandene PlayerData.txt und ersetzen Sie sie dann durch die heruntergeladene Datei.",
  autoApplyPrivacy:
    "Alles läuft lokal in Ihrem Browser — Ihre Daten verlassen niemals Ihren Computer.",
  manualMethodTitle: "Manuelle Dateibearbeitung",
  fileApplyDropZone: "PlayerData.txt-Datei hier ablegen",
  fileApplyDropHint: "oder klicken zum Durchsuchen",
  fileApplyNoCode:
    "Konfigurieren Sie zuerst Ihre Namensfarben und kommen Sie dann hierher zurück.",
  fileApplyNoName:
    "Das Name-Feld konnte in dieser Datei nicht gefunden werden. Stellen Sie sicher, dass es eine gültige PlayerData.txt-Datei ist.",
  fileApplyReadError:
    "Die Datei konnte nicht gelesen werden. Bitte versuchen Sie es erneut.",
  fileApplyLoaded: "Datei geladen",
  fileApplyOldName: "Aktueller Name",
  fileApplyDownload: "Geänderte Datei herunterladen",
  fileApplyDownloaded: "Heruntergeladen!",
  fileApplyDownloadHint:
    "Ersetzen Sie Ihre originale PlayerData.txt durch die heruntergeladene Datei und starten Sie das Spiel.",
  fileApplyReset: "Zurücksetzen",
  footerFanCreation:
    "Dies ist eine Fan-Kreation und steht in keiner offiziellen Verbindung zu On-Together oder GigaPuff.",
  footerInspired: "Inspiriert vom",
  footerGuideLink: "Guide von Ranch",
  footerSourceCode: "Quellcode",
  fileApplyWaitingForName:
    "Stellen Sie oben Ihre Namensfarben ein und kommen Sie dann zurück, um die aktualisierte Datei herunterzuladen.",
  boldLabel: "Fett",
  chatBoldLabel: "Chat Fett",
  italicLabel: "Kursiv",
  chatItalicLabel: "Chat Kursiv",
  nameLoadHint:
    'Sie können Ihren bestehenden Anzeigenamen laden, indem Sie Ihre PlayerData-Datei in den Auto-Applikator im Abschnitt "So wenden Sie es an" unten ziehen.',
  nameOverrideTitle: "Aktuellen Namen überschreiben?",
  nameOverrideDesc:
    "Es ist bereits ein Name eingegeben. Möchten Sie ihn durch den Namen aus Ihrer PlayerData-Datei ersetzen?",
  nameOverrideConfirm: "Ersetzen",
  nameOverrideCancel: "Beibehalten",
  footerKofi: "Auf Ko-fi unterstützen",
  faqTitle: "Häufig gestellte Fragen",
  faqCharLimitQ: "Kann ich einfach das Namensfeld im Spiel verwenden?",
  faqCharLimitA:
    "Das Namensfeld im Spiel ist auf 40 Zeichen begrenzt, die bei Farb-Tags sehr schnell aufgebraucht sind. Wenn dein generierter Code dieses Limit überschreitet, musst du eine der Methoden aus dem Abschnitt \u201ESo wendest du es an\u201C oben verwenden.",
  faqCantTypeQ:
    "Ich versuche meinen Namen im Namensfeld im Spiel einzugeben, aber ich kann nur wenige Zeichen tippen!",
  faqCantTypeA:
    "Das passiert, wenn unsichtbare Stil-Tags noch im Textfeld vorhanden sind \u2014 sie lassen sich nicht einfach mit der Rücktaste löschen. Drücke Strg+A (oder Cmd+A auf dem Mac), um alles auszuwählen, und lösche dann den Inhalt. Danach solltest du wieder die vollen 40 Zeichen eingeben können.",
  faqHowWorksQ: "Wie funktioniert diese Namens-Stilisierung?",
  faqHowWorksA:
    "On-Together wurde mit Unity entwickelt und verwendet TextMeshPro für die Textdarstellung. TextMeshPro unterstützt Rich-Text-Tags (ähnlich wie HTML), die im Text eingebettet werden können, um Farben zu ändern, Fett-/Kursivschrift hinzuzufügen und mehr. Dieses Tool generiert diese Tags für dich.",
};

export default translations;
