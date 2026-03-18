const translations: Record<string, string> = {
  appTitle: "Stylizator nazw dla On-Together",
  appSubtitle:
    "Dostosuj kolory wyświetlanej nazwy w On-Together: Virtual Co-Working",
  nameLabel: "Nazwa wyświetlana",
  namePlaceholder: "Wpisz swoją nazwę...",
  letterStylingTitle: "Styl liter",
  letterStylingHint:
    "Kliknij litery, aby je wybrać, następnie zastosuj kolor lub gradient. Shift+Klik dla zakresu, Ctrl/Cmd+Klik do przełączania.",
  selectAll: "Zaznacz wszystko",
  deselectAll: "Odznacz wszystko",
  colourLabel: "Kolor",
  applyColour: "Zastosuj kolor",
  randomColour: "Losowy",
  gradientLabel: "Gradient",
  gradientStart: "Początek",
  gradientEnd: "Koniec",
  swapGradient: "Zamień kolory",
  applyGradient: "Zastosuj gradient",
  singleColourTitle: "Jeden kolor",
  gradient2Title: "Gradient 2-kolorowy",
  gradient3Title: "Gradient 3-kolorowy",
  gradientMid: "Środek",
  chatStylingTitle: "Styl czatu",
  colonColourLabel: "Kolor dwukropka",
  colonColourHint: "Kolor dwukropka (:) wyświetlanego po nazwie w czacie",
  messageColourLabel: "Kolor wiadomości",
  messageColourHint: "Kolor twoich wiadomości na czacie",
  previewTitle: "Podgląd",
  previewSampleMessage: "Cześć wszystkim!",
  previewBgLabel: "Tło:",
  previewBgDefault: "Domyślne",
  previewBgGrass: "Trawa",
  previewBgRoad: "Droga",
  previewBgWater: "Woda",
  previewBgWood: "Drewno",
  generatedCodeTitle: "Wygenerowany kod",
  generatedCodeHint:
    'Skopiuj to i wklej jako wartość "Name" w pliku PlayerData.txt',
  copyButton: "Kopiuj",
  copiedButton: "Skopiowano!",
  instructionsTitle: "Jak zastosować",
  instructionIntro:
    "Aby zastosować niestandardową nazwę, edytuj plik PlayerData.txt:",
  step1: "Całkowicie zamknij grę.",
  step2: "Przejdź do pliku PlayerData.txt znajdującego się w:",
  stepBackup: "Zrób kopię zapasową pliku (np. jako PlayerData-backup.txt).",
  step3:
    'Otwórz plik w edytorze tekstu i znajdź pole "Name". Będzie wyglądać mniej więcej tak:',
  step3Example: '"Name":"TwojaBieżącaNazwa"',
  step4:
    'Zamień wartość (np. YourCurrentName w powyższym przykładzie) na kod z sekcji "Wygenerowany kod".',
  step5: "Zapisz plik i uruchom grę.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "Możesz też użyć moda StatusManager i komendy /setname w grze.",
  altMethodLink: "mod StatusManager",
  tipTitle: "Wskazówki",
  tip40Char:
    "Pole nazwy w grze ma limit 40 znaków, ale edycja PlayerData.txt omija to.",
  tipBackup: "Zawsze rób kopię zapasową PlayerData.txt przed edycją.",
  tipEscapeQuotes:
    'Jeśli nazwa zawiera cudzysłowy, ucieczka je odwrotnym ukośnikiem (\\") w pliku JSON.',
  enterName: "Wpisz nazwę powyżej, aby rozpocząć",
  noLettersSelected: "Wybierz jedną lub więcej liter, aby ustawić ich kolor",
  languageLabel: "Język",
  enableChatColours: "Włącz kolory czatu",
  autoApplyTitle: "Automatyczne zastosowanie",
  autoApplyDesc:
    "Przeciągnij plik PlayerData.txt tutaj i pobierz zmodyfikowaną wersję z nową nazwą. Najpierw wykonaj kopię zapasową istniejącego pliku PlayerData.txt, a następnie zastąp go pobranym plikiem.",
  autoApplyPrivacy:
    "Wszystko działa lokalnie w przeglądarce — Twoje dane nigdy nie opuszczają komputera.",
  manualMethodTitle: "Ręczna edycja pliku",
  fileApplyDropZone: "Upuść plik PlayerData.txt tutaj",
  fileApplyDropHint: "lub kliknij, aby przeglądać",
  fileApplyNoCode: "Najpierw skonfiguruj kolory nazwy, a potem wróć tutaj.",
  fileApplyNoName:
    "Nie znaleziono pola Name w tym pliku. Upewnij się, że to prawidłowy plik PlayerData.txt.",
  fileApplyReadError: "Nie udało się odczytać pliku. Spróbuj ponownie.",
  fileApplyLoaded: "Plik załadowany",
  fileApplyOldName: "Obecna nazwa",
  fileApplyDownload: "Pobierz zmodyfikowany plik",
  fileApplyDownloaded: "Pobrano!",
  fileApplyDownloadHint:
    "Zastąp oryginalny PlayerData.txt pobranym plikiem i uruchom grę.",
  fileApplyReset: "Resetuj",
  footerFanCreation:
    "To jest twórczość fanów i nie jest oficjalnie powiązana z On-Together ani GigaPuff.",
  footerInspired: "Inspirowane",
  footerGuideLink: "poradnikiem Ranch",
  footerSourceCode: "Kod źródłowy",
  fileApplyWaitingForName:
    "Ustaw kolory nazwy powyżej, a następnie wróć, aby pobrać zaktualizowany plik.",
  boldLabel: "Pogrubienie",
  chatBoldLabel: "Pogrubienie czatu",
  italicLabel: "Kursywa",
  chatItalicLabel: "Kursywa czatu",
  nameLoadHint:
    'Możesz załadować swoją obecną wyświetlaną nazwę, upuszczając plik PlayerData do Automatycznego aplikatora w sekcji "Jak zastosować" poniżej.',
  nameOverrideTitle: "Nadpisać aktualną nazwę?",
  nameOverrideDesc:
    "Masz już wpisaną nazwę. Czy chcesz ją zastąpić nazwą z pliku PlayerData?",
  nameOverrideConfirm: "Zastąp",
  nameOverrideCancel: "Zachowaj aktualną",
  footerKofi: "Wesprzyj na Ko-fi",
  faqTitle: "Często zadawane pytania",
  faqCharLimitQ: "Czy mogę po prostu użyć pola nazwy w grze?",
  faqCharLimitA:
    "Pole nazwy w grze jest ograniczone do 40 znaków, które bardzo szybko się kończą po dodaniu tagów kolorów. Jeśli wygenerowany kod przekracza ten limit, musisz użyć jednej z metod z sekcji \u201EJak zastosować\u201D powyżej.",
  faqCantTypeQ:
    "Próbuję wpisać swoją nazwę w polu nazwy w grze, ale mogę wpisać tylko kilka znaków!",
  faqCantTypeA:
    "Dzieje się tak, gdy w polu tekstowym pozostają niewidoczne tagi stylów \u2014 nie można ich usunąć samym klawiszem Backspace. Naciśnij Ctrl+A (lub Cmd+A na Macu), aby zaznaczyć wszystko, a następnie usuń. Powinno być teraz możliwe wpisanie pełnych 40 znaków.",
  faqHowWorksQ: "Jak działa ta stylizacja nazwy?",
  faqHowWorksA:
    "On-Together jest zbudowany w Unity i używa TextMeshPro do renderowania tekstu. TextMeshPro obsługuje tagi Rich Text (podobne do HTML), które można osadzać w tekście, aby zmieniać kolory, dodawać pogrubienie/kursywę i inne. To narzędzie generuje te tagi za Ciebie.",
};

export default translations;
