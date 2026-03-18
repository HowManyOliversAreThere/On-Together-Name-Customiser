const translations: Record<string, string> = {
  appTitle: "Styliseur de nom pour On-Together",
  appSubtitle:
    "Personnalisez les couleurs de votre nom dans On-Together : Virtual Co-Working",
  nameLabel: "Nom d'affichage",
  namePlaceholder: "Entrez votre nom...",
  letterStylingTitle: "Style des lettres",
  letterStylingHint:
    "Cliquez sur les lettres pour les sélectionner, puis appliquez une couleur ou un dégradé. Maj+Clic pour une plage, Ctrl/Cmd+Clic pour basculer.",
  selectAll: "Tout sélectionner",
  deselectAll: "Tout désélectionner",
  colourLabel: "Couleur",
  applyColour: "Appliquer la couleur",
  randomColour: "Aléatoire",
  gradientLabel: "Dégradé",
  gradientStart: "Début",
  gradientEnd: "Fin",
  swapGradient: "Inverser les couleurs",
  applyGradient: "Appliquer le dégradé",
  singleColourTitle: "Couleur unique",
  gradient2Title: "Dégradé 2 couleurs",
  gradient3Title: "Dégradé 3 couleurs",
  gradientMid: "Milieu",
  chatStylingTitle: "Style du chat",
  colonColourLabel: "Couleur des deux-points",
  colonColourHint:
    "La couleur des deux-points (:) affichés après votre nom dans le chat",
  messageColourLabel: "Couleur du message",
  messageColourHint: "La couleur de vos messages dans le chat",
  previewTitle: "Aperçu",
  previewSampleMessage: "Bonjour à tous !",
  previewBgLabel: "Arrière-plan :",
  previewBgDefault: "Par défaut",
  previewBgGrass: "Herbe",
  previewBgRoad: "Route",
  previewBgWater: "Eau",
  previewBgWood: "Bois",
  generatedCodeTitle: "Code généré",
  generatedCodeHint:
    'Copiez ceci et collez-le comme valeur de "Name" dans votre fichier PlayerData.txt',
  copyButton: "Copier",
  copiedButton: "Copié !",
  instructionsTitle: "Comment appliquer",
  instructionIntro:
    "Pour appliquer votre nom personnalisé, éditez le fichier PlayerData.txt :",
  step1: "Fermez complètement le jeu.",
  step2: "Naviguez vers le fichier PlayerData.txt situé à :",
  stepBackup:
    "Sauvegardez le fichier en le copiant (ex : PlayerData-backup.txt).",
  step3:
    'Ouvrez le fichier dans un éditeur de texte et trouvez le champ "Name". Il ressemble à ceci :',
  step3Example: '"Name":"VotreNomActuel"',
  step4:
    'Remplacez la valeur (par ex. YourCurrentName dans l\'exemple ci-dessus) par le code de la section "Code généré".',
  step5: "Enregistrez le fichier et lancez le jeu.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "Vous pouvez aussi utiliser le mod StatusManager et la commande /setname en jeu.",
  altMethodLink: "mod StatusManager",
  tipTitle: "Conseils",
  tip40Char:
    "Le champ de nom en jeu a une limite de 40 caractères, mais éditer PlayerData.txt permet de la contourner.",
  tipBackup:
    "Faites toujours une sauvegarde de votre PlayerData.txt avant de le modifier.",
  tipEscapeQuotes:
    'Si votre nom contient des guillemets, échappez-les avec un antislash (\\") dans le fichier JSON.',
  enterName: "Entrez un nom ci-dessus pour commencer",
  noLettersSelected:
    "Sélectionnez une ou plusieurs lettres pour définir leur couleur",
  languageLabel: "Langue",
  enableChatColours: "Activer les couleurs du chat",
  autoApplyTitle: "Application automatique",
  autoApplyDesc:
    "Glissez votre fichier PlayerData.txt ici et téléchargez la version modifiée avec votre nouveau nom appliqué. Sauvegardez d'abord votre PlayerData.txt existant, puis remplacez-le par le fichier téléchargé.",
  autoApplyPrivacy:
    "Tout fonctionne localement dans votre navigateur — vos données ne quittent jamais votre ordinateur.",
  manualMethodTitle: "Édition manuelle du fichier",
  fileApplyDropZone: "Déposez votre fichier PlayerData.txt ici",
  fileApplyDropHint: "ou cliquez pour parcourir",
  fileApplyNoCode:
    "Configurez d'abord les couleurs de votre nom, puis revenez ici.",
  fileApplyNoName:
    "Impossible de trouver le champ Name dans ce fichier. Assurez-vous qu'il s'agit d'un fichier PlayerData.txt valide.",
  fileApplyReadError: "Impossible de lire le fichier. Veuillez réessayer.",
  fileApplyLoaded: "Fichier chargé",
  fileApplyOldName: "Nom actuel",
  fileApplyDownload: "Télécharger le fichier modifié",
  fileApplyDownloaded: "Téléchargé !",
  fileApplyDownloadHint:
    "Remplacez votre PlayerData.txt original par le fichier téléchargé, puis lancez le jeu.",
  fileApplyReset: "Réinitialiser",
  footerFanCreation:
    "Ceci est une création de fan et n'est pas officiellement associé à On-Together ou GigaPuff.",
  footerInspired: "Inspiré par le",
  footerGuideLink: "Guide de Ranch",
  footerSourceCode: "Code source",
  fileApplyWaitingForName:
    "Configurez les couleurs de votre nom ci-dessus, puis revenez télécharger le fichier mis à jour.",
  boldLabel: "Gras",
  chatBoldLabel: "Gras du chat",
  italicLabel: "Italique",
  chatItalicLabel: "Italique du chat",
  nameLoadHint:
    "Vous pouvez charger votre nom d'affichage existant en déposant votre fichier PlayerData dans l'Applicateur automatique dans la section \"Comment appliquer\" ci-dessous.",
  nameOverrideTitle: "Remplacer le nom actuel ?",
  nameOverrideDesc:
    "Un nom est déjà saisi. Voulez-vous le remplacer par le nom de votre fichier PlayerData ?",
  nameOverrideConfirm: "Remplacer",
  nameOverrideCancel: "Garder l'actuel",
  footerKofi: "Soutenir sur Ko-fi",
  faqTitle: "Questions fréquentes",
  faqCharLimitQ: "Puis-je simplement utiliser le champ de nom en jeu ?",
  faqCharLimitA:
    "Le champ de nom en jeu est limité à 40 caractères, ce qui est très vite atteint dès que vous ajoutez des balises de couleur. Si votre code généré dépasse cette limite, vous devrez utiliser l'une des méthodes de la section \u00AB Comment appliquer \u00BB ci-dessus.",
  faqCantTypeQ:
    "J'essaie de taper mon nom dans le champ en jeu mais je ne peux saisir que quelques caractères !",
  faqCantTypeA:
    "Cela se produit lorsque des balises de style invisibles sont encore présentes dans le champ de texte \u2014 la touche Retour arrière ne suffit pas à les supprimer. Appuyez sur Ctrl+A (ou Cmd+A sur Mac) pour tout sélectionner, puis supprimez. Vous devriez maintenant pouvoir saisir les 40 caractères complets.",
  faqHowWorksQ: "Comment fonctionne ce style de nom ?",
  faqHowWorksA:
    "On-Together est développé avec Unity et utilise TextMeshPro pour le rendu du texte. TextMeshPro prend en charge les balises Rich Text (similaires au HTML) qui peuvent être intégrées au texte pour changer les couleurs, ajouter du gras/italique, etc. Cet outil génère ces balises pour vous.",
};

export default translations;
