const translations: Record<string, string> = {
  appTitle: "Estilizador de nombre para On-Together",
  appSubtitle:
    "Personaliza los colores de tu nombre en On-Together: Virtual Co-Working",
  nameLabel: "Nombre para mostrar",
  namePlaceholder: "Ingresa tu nombre...",
  letterStylingTitle: "Estilo de letras",
  letterStylingHint:
    "Haz clic en las letras para seleccionarlas, luego aplica un color o degradado. Shift+Clic para rango, Ctrl/Cmd+Clic para alternar.",
  selectAll: "Seleccionar todo",
  deselectAll: "Deseleccionar todo",
  colourLabel: "Color",
  applyColour: "Aplicar color",
  randomColour: "Aleatorio",
  gradientLabel: "Degradado",
  gradientStart: "Inicio",
  gradientEnd: "Final",
  swapGradient: "Intercambiar colores",
  applyGradient: "Aplicar degradado",
  singleColourTitle: "Color único",
  gradient2Title: "Degradado de 2 colores",
  gradient3Title: "Degradado de 3 colores",
  gradientMid: "Medio",
  chatStylingTitle: "Estilo del chat",
  colonColourLabel: "Color de los dos puntos",
  colonColourHint:
    "El color de los dos puntos (:) que aparecen después de tu nombre en el chat",
  messageColourLabel: "Color del mensaje",
  messageColourHint: "El color de tus mensajes en el chat",
  previewTitle: "Vista previa",
  previewSampleMessage: "¡Hola a todos!",
  previewBgLabel: "Fondo:",
  previewBgDefault: "Predeterminado",
  previewBgGrass: "Pasto",
  previewBgRoad: "Camino",
  previewBgWater: "Agua",
  previewBgWood: "Madera",
  generatedCodeTitle: "Código generado",
  generatedCodeHint:
    'Copia esto y pégalo como valor de "Name" en tu archivo PlayerData.txt',
  copyButton: "Copiar",
  copiedButton: "¡Copiado!",
  instructionsTitle: "Cómo aplicar",
  instructionIntro:
    "Para aplicar tu nombre personalizado, edita el archivo PlayerData.txt:",
  step1: "Cierra el juego completamente.",
  step2: "Navega al archivo PlayerData.txt ubicado en:",
  stepBackup:
    "Haz una copia de seguridad del archivo (ej. como PlayerData-backup.txt).",
  step3:
    'Abre el archivo en un editor de texto y encuentra el campo "Name". Se verá algo así:',
  step3Example: '"Name":"TuNombreActual"',
  step4:
    'Reemplaza el valor (p. ej. YourCurrentName en el ejemplo anterior) con el código de la sección "Código generado".',
  step5: "Guarda el archivo e inicia el juego.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "También puedes usar el mod StatusManager y el comando /setname en el juego.",
  altMethodLink: "mod StatusManager",
  tipTitle: "Consejos",
  tip40Char:
    "El campo de nombre en el juego tiene un límite de 40 caracteres, pero editar PlayerData.txt lo evita.",
  tipBackup:
    "Siempre haz una copia de seguridad de tu PlayerData.txt antes de editarlo.",
  tipEscapeQuotes:
    'Si tu nombre contiene comillas, escápalas con una barra invertida (\\") en el archivo JSON.',
  enterName: "Ingresa un nombre arriba para comenzar",
  noLettersSelected: "Selecciona una o más letras para establecer su color",
  languageLabel: "Idioma",
  enableChatColours: "Activar colores del chat",
  autoApplyTitle: "Aplicación automática",
  autoApplyDesc:
    "Arrastra tu archivo PlayerData.txt aquí y descarga la versión modificada con tu nuevo nombre aplicado. Haz una copia de seguridad de tu PlayerData.txt existente primero, luego reemplázalo con el archivo descargado.",
  autoApplyPrivacy:
    "Todo se ejecuta localmente en tu navegador — tus datos nunca salen de tu computadora.",
  manualMethodTitle: "Edición manual del archivo",
  fileApplyDropZone: "Suelta tu archivo PlayerData.txt aquí",
  fileApplyDropHint: "o haz clic para buscar",
  fileApplyNoCode:
    "Primero configura los colores de tu nombre y luego vuelve aquí.",
  fileApplyNoName:
    "No se pudo encontrar el campo Name en este archivo. Asegúrate de que sea un archivo PlayerData.txt válido.",
  fileApplyReadError:
    "No se pudo leer el archivo. Por favor, inténtalo de nuevo.",
  fileApplyLoaded: "Archivo cargado",
  fileApplyOldName: "Nombre actual",
  fileApplyDownload: "Descargar archivo modificado",
  fileApplyDownloaded: "¡Descargado!",
  fileApplyDownloadHint:
    "Reemplaza tu PlayerData.txt original con el archivo descargado y luego inicia el juego.",
  fileApplyReset: "Restablecer",
  footerFanCreation:
    "Esta es una creación de fans y no está oficialmente asociada con On-Together o GigaPuff.",
  footerInspired: "Inspirado por la",
  footerGuideLink: "Guía de Ranch",
  footerSourceCode: "Código fuente",
  fileApplyWaitingForName:
    "Configura los colores de tu nombre arriba y luego vuelve para descargar el archivo actualizado.",
  boldLabel: "Negrita",
  chatBoldLabel: "Negrita del chat",
  italicLabel: "Cursiva",
  chatItalicLabel: "Cursiva del chat",
  nameLoadHint:
    'Puedes cargar tu nombre de pantalla existente arrastrando tu archivo PlayerData al Aplicador automático en la sección "Cómo aplicar" a continuación.',
  nameOverrideTitle: "¿Reemplazar el nombre actual?",
  nameOverrideDesc:
    "Ya tienes un nombre ingresado. ¿Quieres reemplazarlo con el nombre de tu archivo PlayerData?",
  nameOverrideConfirm: "Reemplazar",
  nameOverrideCancel: "Mantener actual",
  footerKofi: "Apoyar en Ko-fi",
  faqTitle: "Preguntas frecuentes",
  faqCharLimitQ: "¿Puedo simplemente usar el campo de nombre del juego?",
  faqCharLimitA:
    "El campo de nombre del juego está limitado a 40 caracteres, que se agotan muy rápidamente cuando empiezas a añadir etiquetas de color. Si tu código generado supera ese límite, tendrás que usar uno de los métodos de la sección \u00ABCómo aplicar\u00BB de arriba.",
  faqCantTypeQ:
    "¡Estoy intentando escribir mi nombre en el campo del juego pero solo me deja escribir unos pocos caracteres!",
  faqCantTypeA:
    "Esto ocurre cuando quedan etiquetas de estilo invisibles en el campo de texto \u2014 no puedes eliminarlas solo con la tecla de retroceso. Pulsa Ctrl+A (o Cmd+A en Mac) para seleccionar todo y luego bórralo. Después deberías poder escribir los 40 caracteres completos.",
  faqHowWorksQ: "¿Cómo funciona este estilo de nombre?",
  faqHowWorksA:
    "On-Together está desarrollado con Unity y utiliza TextMeshPro para el renderizado de texto. TextMeshPro admite etiquetas Rich Text (similares a HTML) que pueden incrustarse en el texto para cambiar colores, añadir negrita/cursiva y más. Esta herramienta genera esas etiquetas por ti.",
  undoButton: "Deshacer",
  redoButton: "Rehacer",
};

export default translations;
