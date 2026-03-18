const translations: Record<string, string> = {
  appTitle: "Name Styler for On-Together",
  appSubtitle:
    "Customize your display name colors for On-Together: Virtual Co-Working",
  nameLabel: "Display Name",
  namePlaceholder: "Enter your display name...",
  letterStylingTitle: "Letter Styling",
  letterStylingHint:
    "Click letters to select them, then apply a color or gradient. Use Shift+Click for range, Ctrl/Cmd+Click to toggle.",
  selectAll: "Select All",
  deselectAll: "Deselect All",
  colourLabel: "Color",
  applyColour: "Apply Color",
  randomColour: "Random",
  gradientLabel: "Gradient",
  gradientStart: "Start",
  gradientEnd: "End",
  swapGradient: "Swap colors",
  applyGradient: "Apply Gradient",
  singleColourTitle: "Single Color",
  gradient2Title: "2-Point Gradient",
  gradient3Title: "3-Point Gradient",
  gradientMid: "Middle",
  chatStylingTitle: "Chat Styling",
  colonColourLabel: "Colon Color",
  colonColourHint: "The color of the colon (:) shown after your name in chat",
  messageColourLabel: "Message Color",
  messageColourHint: "The color of your chat messages",
  previewTitle: "Preview",
  previewSampleMessage: "Hello everyone!",
  previewBgLabel: "Background:",
  previewBgDefault: "Default",
  previewBgGrass: "Grass",
  previewBgRoad: "Road",
  previewBgWater: "Water",
  previewBgWood: "Wood",
  generatedCodeTitle: "Generated Code",
  generatedCodeHint:
    'Copy this and paste it as the value of "Name" in your PlayerData.txt file',
  copyButton: "Copy",
  copiedButton: "Copied!",
  instructionsTitle: "How to Apply",
  instructionIntro: "To apply your custom name, edit the PlayerData.txt file:",
  step1: "Close the game completely.",
  step2: "Navigate to the PlayerData.txt file located at:",
  stepBackup: "Back up the file by copying it (e.g. to PlayerData-backup.txt).",
  step3:
    'Open the file in a text editor and find the "Name" field. It will look something like this:',
  step3Example: '"Name":"YourCurrentName"',
  step4:
    'Replace the value (e.g. YourCurrentName in the example above) with the code from the "Generated Code" section.',
  step5: "Save the file and start the game.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "You can also use the StatusManager mod and the /setname command in-game.",
  altMethodLink: "StatusManager mod",
  tipTitle: "Tips",
  tip40Char:
    "The in-game name field has a 40-character limit, but editing PlayerData.txt bypasses this.",
  tipBackup: "Always back up your PlayerData.txt before editing.",
  tipEscapeQuotes:
    'If your name contains quotes, escape them with a backslash (\\") in the JSON file.',
  enterName: "Enter a name above to get started",
  noLettersSelected: "Select one or more letters to set their color",
  languageLabel: "Language",
  enableChatColours: "Enable chat colors",
  autoApplyTitle: "Auto Applicator",
  autoApplyDesc:
    "Drag your PlayerData.txt file here and download the modified version with your new name applied. Back up your existing PlayerData.txt first, then replace it with the downloaded file.",
  autoApplyPrivacy:
    "Everything runs locally in your browser — your data never leaves your computer.",
  manualMethodTitle: "Manual File Editing",
  fileApplyDropZone: "Drop your PlayerData.txt file here",
  fileApplyDropHint: "or click to browse",
  fileApplyNoCode: "Configure your name colours first, then come back here.",
  fileApplyNoName:
    "Could not find the Name field in this file. Make sure it's a valid PlayerData.txt file.",
  fileApplyReadError: "Could not read the file. Please try again.",
  fileApplyLoaded: "File loaded",
  fileApplyOldName: "Current name",
  fileApplyDownload: "Download Modified File",
  fileApplyDownloaded: "Downloaded!",
  fileApplyDownloadHint:
    "Replace your original PlayerData.txt with the downloaded file, then start the game.",
  fileApplyReset: "Reset",
  footerFanCreation:
    "This is a fan creation and is not officially associated with On-Together or GigaPuff.",
  footerInspired: "Inspired by the",
  footerGuideLink: "Guide by Ranch",
  footerSourceCode: "Source Code",
  fileApplyWaitingForName:
    "Set your name colors above, then come back to download the updated file.",
  boldLabel: "Bold",
  chatBoldLabel: "Chat Bold",
  italicLabel: "Italic",
  chatItalicLabel: "Chat Italic",
  nameLoadHint:
    'You can load your existing display name by dropping your PlayerData file into the Auto Applicator in the "How to Apply" section below.',
  nameOverrideTitle: "Override current name?",
  nameOverrideDesc:
    "You already have a name entered. Would you like to replace it with the name from your PlayerData file?",
  nameOverrideConfirm: "Replace",
  nameOverrideCancel: "Keep current",
  footerKofi: "Support on Ko-fi",
  faqTitle: "Frequently Asked Questions",
  faqCharLimitQ: "Can I just use the in-game name box?",
  faqCharLimitA:
    "The in-game name field is limited to 40 characters, which gets used up very quickly once you start adding color tags. If your generated code exceeds that limit, you'll need to use one of the methods from the How to Apply section above.",
  faqCantTypeQ:
    "I'm trying to type my name into the in-game name box but it will only let me type a few characters!",
  faqCantTypeA:
    "This happens when invisible style tags are still in the text box \u2014 you can't remove them by just pressing backspace. Press Ctrl+A (or Cmd+A on Mac) to select everything, then delete it all. You should now be able to type the full 40 characters again.",
  faqHowWorksQ: "How does this name styling work?",
  faqHowWorksA:
    "On-Together is built in Unity and uses TextMeshPro for its text rendering. TextMeshPro supports Rich Text Tags (similar to HTML) that can be embedded in text to change colors, add bold/italic, and more. This tool generates those tags for you.",
};

export default translations;
