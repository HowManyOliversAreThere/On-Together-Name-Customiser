const translations: Record<string, string> = {
  appTitle: "Stilizzatore di nomi per On-Together",
  appSubtitle:
    "Personalizza i colori del tuo nome visualizzato in On-Together: Virtual Co-Working",
  nameLabel: "Nome visualizzato",
  namePlaceholder: "Inserisci il tuo nome...",
  letterStylingTitle: "Stile delle lettere",
  letterStylingHint:
    "Clicca sulle lettere per selezionarle, poi applica un colore o sfumatura. Shift+Clic per intervallo, Ctrl/Cmd+Clic per alternare.",
  selectAll: "Seleziona tutto",
  deselectAll: "Deseleziona tutto",
  colourLabel: "Colore",
  applyColour: "Applica colore",
  randomColour: "Casuale",
  gradientLabel: "Sfumatura",
  gradientStart: "Inizio",
  gradientEnd: "Fine",
  swapGradient: "Inverti colori",
  applyGradient: "Applica sfumatura",
  singleColourTitle: "Colore singolo",
  gradient2Title: "Sfumatura a 2 colori",
  gradient3Title: "Sfumatura a 3 colori",
  gradientMid: "Centro",
  chatStylingTitle: "Stile della chat",
  colonColourLabel: "Colore dei due punti",
  colonColourHint:
    "Il colore dei due punti (:) mostrati dopo il tuo nome nella chat",
  messageColourLabel: "Colore del messaggio",
  messageColourHint: "Il colore dei tuoi messaggi nella chat",
  previewTitle: "Anteprima",
  previewSampleMessage: "Ciao a tutti!",
  previewBgLabel: "Sfondo:",
  previewBgDefault: "Predefinito",
  previewBgGrass: "Erba",
  previewBgRoad: "Strada",
  previewBgWater: "Acqua",
  previewBgWood: "Legno",
  generatedCodeTitle: "Codice generato",
  generatedCodeHint:
    'Copia questo e incollalo come valore di "Name" nel tuo file PlayerData.txt',
  copyButton: "Copia",
  copiedButton: "Copiato!",
  instructionsTitle: "Come applicare",
  instructionIntro:
    "Per applicare il tuo nome personalizzato, modifica il file PlayerData.txt:",
  step1: "Chiudi completamente il gioco.",
  step2: "Vai al file PlayerData.txt che si trova in:",
  stepBackup:
    "Fai un backup del file (es. copialo come PlayerData-backup.txt).",
  step3:
    'Apri il file in un editor di testo e trova il campo "Name". Apparirà più o meno così:',
  step3Example: '"Name":"IlTuoNomeAttuale"',
  step4:
    'Sostituisci il valore (es. YourCurrentName nell\'esempio sopra) con il codice della sezione "Codice generato".',
  step5: "Salva il file e avvia il gioco.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "Puoi anche usare il mod StatusManager e il comando /setname nel gioco.",
  altMethodLink: "mod StatusManager",
  tipTitle: "Suggerimenti",
  tip40Char:
    "Il campo nome nel gioco ha un limite di 40 caratteri, ma modificare PlayerData.txt lo aggira.",
  tipBackup:
    "Fai sempre un backup del tuo PlayerData.txt prima di modificarlo.",
  tipEscapeQuotes:
    'Se il tuo nome contiene virgolette, escapale con un backslash (\\") nel file JSON.',
  enterName: "Inserisci un nome sopra per iniziare",
  noLettersSelected: "Seleziona una o più lettere per impostare il loro colore",
  languageLabel: "Lingua",
  enableChatColours: "Attiva colori della chat",
  autoApplyTitle: "Applicazione automatica",
  autoApplyDesc:
    "Trascina il tuo file PlayerData.txt qui e scarica la versione modificata con il tuo nuovo nome applicato. Esegui prima il backup del tuo PlayerData.txt esistente, poi sostituiscilo con il file scaricato.",
  autoApplyPrivacy:
    "Tutto viene eseguito localmente nel tuo browser — i tuoi dati non lasciano mai il tuo computer.",
  manualMethodTitle: "Modifica manuale del file",
  fileApplyDropZone: "Rilascia il tuo file PlayerData.txt qui",
  fileApplyDropHint: "o clicca per sfogliare",
  fileApplyNoCode: "Prima configura i colori del tuo nome, poi torna qui.",
  fileApplyNoName:
    "Impossibile trovare il campo Name in questo file. Assicurati che sia un file PlayerData.txt valido.",
  fileApplyReadError: "Impossibile leggere il file. Riprova.",
  fileApplyLoaded: "File caricato",
  fileApplyOldName: "Nome attuale",
  fileApplyDownload: "Scarica file modificato",
  fileApplyDownloaded: "Scaricato!",
  fileApplyDownloadHint:
    "Sostituisci il tuo PlayerData.txt originale con il file scaricato, poi avvia il gioco.",
  fileApplyReset: "Reimposta",
  footerFanCreation:
    "Questa è una creazione dei fan e non è ufficialmente associata a On-Together o GigaPuff.",
  footerInspired: "Ispirato dalla",
  footerGuideLink: "Guida di Ranch",
  footerSourceCode: "Codice sorgente",
  fileApplyWaitingForName:
    "Imposta i colori del tuo nome sopra, poi torna per scaricare il file aggiornato.",
  boldLabel: "Grassetto",
  chatBoldLabel: "Grassetto chat",
  italicLabel: "Corsivo",
  chatItalicLabel: "Corsivo chat",
  nameLoadHint:
    'Puoi caricare il tuo nome visualizzato esistente trascinando il file PlayerData nell\'Applicatore automatico nella sezione "Come applicare" qui sotto.',
  nameOverrideTitle: "Sostituire il nome attuale?",
  nameOverrideDesc:
    "Hai già un nome inserito. Vuoi sostituirlo con il nome dal tuo file PlayerData?",
  nameOverrideConfirm: "Sostituisci",
  nameOverrideCancel: "Mantieni attuale",
  footerKofi: "Supporta su Ko-fi",
  faqTitle: "Domande frequenti",
  faqCharLimitQ: "Posso semplicemente usare il campo nome del gioco?",
  faqCharLimitA:
    "Il campo nome del gioco è limitato a 40 caratteri, che si esauriscono molto rapidamente una volta aggiunti i tag colore. Se il codice generato supera tale limite, dovrai utilizzare uno dei metodi dalla sezione \u00ABCome applicare\u00BB sopra.",
  faqCantTypeQ:
    "Sto provando a digitare il mio nome nel campo del gioco ma riesco a inserire solo pochi caratteri!",
  faqCantTypeA:
    "Questo accade quando tag di stile invisibili sono ancora presenti nel campo di testo \u2014 non puoi rimuoverli semplicemente premendo Backspace. Premi Ctrl+A (o Cmd+A su Mac) per selezionare tutto, poi cancella. Dovresti ora poter digitare tutti i 40 caratteri.",
  faqHowWorksQ: "Come funziona questa stilizzazione del nome?",
  faqHowWorksA:
    "On-Together è sviluppato con Unity e utilizza TextMeshPro per il rendering del testo. TextMeshPro supporta i Rich Text Tag (simili all'HTML) che possono essere incorporati nel testo per cambiare colori, aggiungere grassetto/corsivo e altro. Questo strumento genera quei tag per te.",
  undoButton: "Annulla",
  redoButton: "Ripeti",
};

export default translations;
