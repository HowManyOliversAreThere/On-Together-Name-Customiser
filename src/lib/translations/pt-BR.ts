const translations: Record<string, string> = {
  appTitle: "Estilizador de nome para On-Together",
  appSubtitle:
    "Personalize as cores do seu nome no On-Together: Virtual Co-Working",
  nameLabel: "Nome de exibição",
  namePlaceholder: "Digite seu nome...",
  letterStylingTitle: "Estilo das letras",
  letterStylingHint:
    "Clique nas letras para selecioná-las, então aplique uma cor ou gradiente. Shift+Clique para intervalo, Ctrl/Cmd+Clique para alternar.",
  selectAll: "Selecionar tudo",
  deselectAll: "Desmarcar tudo",
  colourLabel: "Cor",
  applyColour: "Aplicar cor",
  randomColour: "Aleatório",
  gradientLabel: "Gradiente",
  gradientStart: "Início",
  gradientEnd: "Fim",
  swapGradient: "Trocar cores",
  applyGradient: "Aplicar gradiente",
  singleColourTitle: "Cor única",
  gradient2Title: "Gradiente de 2 cores",
  gradient3Title: "Gradiente de 3 cores",
  gradientMid: "Meio",
  chatStylingTitle: "Estilo do chat",
  colonColourLabel: "Cor dos dois pontos",
  colonColourHint: "A cor dos dois pontos (:) exibidos após seu nome no chat",
  messageColourLabel: "Cor da mensagem",
  messageColourHint: "A cor das suas mensagens no chat",
  previewTitle: "Pré-visualização",
  previewSampleMessage: "Olá a todos!",
  previewBgLabel: "Fundo:",
  previewBgDefault: "Padrão",
  previewBgGrass: "Grama",
  previewBgRoad: "Estrada",
  previewBgWater: "Água",
  previewBgWood: "Madeira",
  generatedCodeTitle: "Código gerado",
  generatedCodeHint:
    'Copie isso e cole como valor de "Name" no seu arquivo PlayerData.txt',
  copyButton: "Copiar",
  copiedButton: "Copiado!",
  instructionsTitle: "Como aplicar",
  instructionIntro:
    "Para aplicar seu nome personalizado, edite o arquivo PlayerData.txt:",
  step1: "Feche o jogo completamente.",
  step2: "Navegue até o arquivo PlayerData.txt localizado em:",
  stepBackup:
    "Faça uma cópia de segurança do arquivo (ex: PlayerData-backup.txt).",
  step3:
    'Abra o arquivo em um editor de texto e encontre o campo "Name". Ele se parecerá com isto:',
  step3Example: '"Name":"SeuNomeAtual"',
  step4:
    'Substitua o valor (ex.: YourCurrentName no exemplo acima) pelo código da seção "Código gerado".',
  step5: "Salve o arquivo e inicie o jogo.",
  windowsLabel: "Windows",
  macLabel: "Mac",
  altMethodTitle: "StatusManager Mod",
  altMethodDesc:
    "Você também pode usar o mod StatusManager e o comando /setname no jogo.",
  altMethodLink: "mod StatusManager",
  tipTitle: "Dicas",
  tip40Char:
    "O campo de nome no jogo tem um limite de 40 caracteres, mas editar o PlayerData.txt contorna isso.",
  tipBackup: "Sempre faça backup do seu PlayerData.txt antes de editar.",
  tipEscapeQuotes:
    'Se seu nome contém aspas, escape-as com uma barra invertida (\\") no arquivo JSON.',
  enterName: "Digite um nome acima para começar",
  noLettersSelected: "Selecione uma ou mais letras para definir sua cor",
  languageLabel: "Idioma",
  enableChatColours: "Ativar cores do chat",
  autoApplyTitle: "Aplicação automática",
  autoApplyDesc:
    "Arraste seu arquivo PlayerData.txt aqui e baixe a versão modificada com seu novo nome aplicado. Faça backup do seu PlayerData.txt existente primeiro, depois substitua-o pelo arquivo baixado.",
  autoApplyPrivacy:
    "Tudo é executado localmente no seu navegador — seus dados nunca saem do seu computador.",
  manualMethodTitle: "Edição manual do arquivo",
  fileApplyDropZone: "Solte seu arquivo PlayerData.txt aqui",
  fileApplyDropHint: "ou clique para procurar",
  fileApplyNoCode:
    "Configure as cores do seu nome primeiro e depois volte aqui.",
  fileApplyNoName:
    "Não foi possível encontrar o campo Name neste arquivo. Certifique-se de que é um arquivo PlayerData.txt válido.",
  fileApplyReadError:
    "Não foi possível ler o arquivo. Por favor, tente novamente.",
  fileApplyLoaded: "Arquivo carregado",
  fileApplyOldName: "Nome atual",
  fileApplyDownload: "Baixar arquivo modificado",
  fileApplyDownloaded: "Baixado!",
  fileApplyDownloadHint:
    "Substitua seu PlayerData.txt original pelo arquivo baixado e inicie o jogo.",
  fileApplyReset: "Redefinir",
  footerFanCreation:
    "Esta é uma criação de fã e não está oficialmente associada ao On-Together ou GigaPuff.",
  footerInspired: "Inspirado pelo",
  footerGuideLink: "Guia do Ranch",
  footerSourceCode: "Código-fonte",
  fileApplyWaitingForName:
    "Configure as cores do seu nome acima e depois volte para baixar o arquivo atualizado.",
  boldLabel: "Negrito",
  chatBoldLabel: "Negrito do chat",
  italicLabel: "Itálico",
  chatItalicLabel: "Itálico do chat",
  nameLoadHint:
    'Você pode carregar seu nome de exibição existente arrastando seu arquivo PlayerData para o Aplicador automático na seção "Como aplicar" abaixo.',
  nameOverrideTitle: "Substituir nome atual?",
  nameOverrideDesc:
    "Você já tem um nome digitado. Deseja substituí-lo pelo nome do seu arquivo PlayerData?",
  nameOverrideConfirm: "Substituir",
  nameOverrideCancel: "Manter atual",
  footerKofi: "Apoiar no Ko-fi",
  faqTitle: "Perguntas frequentes",
  faqCharLimitQ: "Posso simplesmente usar o campo de nome do jogo?",
  faqCharLimitA:
    "O campo de nome do jogo é limitado a 40 caracteres, que se esgotam muito rapidamente ao adicionar tags de cor. Se o código gerado exceder esse limite, você precisará usar um dos métodos da seção \u00ABComo aplicar\u00BB acima.",
  faqCantTypeQ:
    "Estou tentando digitar meu nome no campo do jogo, mas só consigo digitar alguns caracteres!",
  faqCantTypeA:
    "Isso acontece quando tags de estilo invisíveis permanecem na caixa de texto \u2014 pressionar backspace não as remove. Pressione Ctrl+A (ou Cmd+A no Mac) para selecionar tudo e depois apague. Você deverá conseguir digitar os 40 caracteres completos novamente.",
  faqHowWorksQ: "Como funciona essa estilização de nome?",
  faqHowWorksA:
    "On-Together é desenvolvido em Unity e usa o TextMeshPro para renderização de texto. O TextMeshPro suporta Rich Text Tags (semelhantes a HTML) que podem ser incorporadas no texto para alterar cores, adicionar negrito/itálico e mais. Esta ferramenta gera essas tags para você.",
  undoButton: "Desfazer",
  redoButton: "Refazer",
};

export default translations;
