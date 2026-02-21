export type Language =
  | "en"
  | "fr"
  | "it"
  | "de"
  | "es"
  | "ar"
  | "id"
  | "ja"
  | "ko"
  | "pt-BR"
  | "pl"
  | "ru"
  | "zh-CN"
  | "th"
  | "zh-TW"
  | "tr"
  | "en-US"
  | "uk"
  | "vi";

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English (UK)",
  "en-US": "English (US)",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  es: "Español",
  "pt-BR": "Português (BR)",
  ru: "Русский",
  pl: "Polski",
  uk: "Українська",
  tr: "Türkçe",
  ar: "العربية",
  ja: "日本語",
  ko: "한국어",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  th: "ไทย",
  vi: "Tiếng Việt",
  id: "Bahasa Indonesia",
};

export const RTL_LANGUAGES: Language[] = ["ar"];

type Translations = Record<string, string>;

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: "On-Together Name Customiser",
    appSubtitle:
      "Customise your display name colours for On-Together: Virtual Co-Working",
    nameLabel: "Display Name",
    namePlaceholder: "Enter your display name...",
    letterStylingTitle: "Letter Styling",
    letterStylingHint:
      "Click letters to select them, then apply a colour or gradient. Use Shift+Click for range, Ctrl/Cmd+Click to toggle.",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    colourLabel: "Colour",
    applyColour: "Apply Colour",
    gradientLabel: "Gradient",
    gradientStart: "Start",
    gradientEnd: "End",
    applyGradient: "Apply Gradient",
    chatStylingTitle: "Chat Styling",
    colonColourLabel: "Colon Colour",
    colonColourHint:
      "The colour of the colon (:) shown after your name in chat",
    messageColourLabel: "Message Colour",
    messageColourHint: "The colour of your chat messages",
    previewTitle: "Preview",
    previewSampleMessage: "Hello everyone!",
    generatedCodeTitle: "Generated Code",
    generatedCodeHint:
      'Copy this and paste it as the value of "Name" in your PlayerData.txt file',
    copyButton: "Copy",
    copiedButton: "Copied!",
    instructionsTitle: "How to Apply",
    instructionIntro:
      "To apply your custom name, edit the PlayerData.txt file:",
    step1: "Close the game completely.",
    step2: "Navigate to the PlayerData.txt file located at:",
    stepBackup:
      "Back up the file by copying it (e.g. to PlayerData-backup.txt).",
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
    noLettersSelected: "Select one or more letters to set their colour",
    languageLabel: "Language",
    enableChatColours: "Enable chat colours",
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
      "Set your name colours above, then come back to download the updated file.",
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
  },

  "en-US": {
    appTitle: "On-Together Name Customizer",
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
    gradientLabel: "Gradient",
    gradientStart: "Start",
    gradientEnd: "End",
    applyGradient: "Apply Gradient",
    chatStylingTitle: "Chat Styling",
    colonColourLabel: "Colon Color",
    colonColourHint: "The color of the colon (:) shown after your name in chat",
    messageColourLabel: "Message Color",
    messageColourHint: "The color of your chat messages",
    previewTitle: "Preview",
    previewSampleMessage: "Hello everyone!",
    generatedCodeTitle: "Generated Code",
    generatedCodeHint:
      'Copy this and paste it as the value of "Name" in your PlayerData.txt file',
    copyButton: "Copy",
    copiedButton: "Copied!",
    instructionsTitle: "How to Apply",
    instructionIntro:
      "To apply your custom name, edit the PlayerData.txt file:",
    step1: "Close the game completely.",
    step2: "Navigate to the PlayerData.txt file located at:",
    stepBackup:
      "Back up the file by copying it (e.g. to PlayerData-backup.txt).",
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
  },

  ja: {
    appTitle: "On-Together 名前カスタマイザー",
    appSubtitle: "On-Together: Virtual Co-Working の表示名の色をカスタマイズ",
    nameLabel: "表示名",
    namePlaceholder: "表示名を入力...",
    letterStylingTitle: "文字のスタイル",
    letterStylingHint:
      "文字をクリックして選択し、色やグラデーションを適用。Shift+クリックで範囲選択、Ctrl/Cmd+クリックで個別切替。",
    selectAll: "すべて選択",
    deselectAll: "選択解除",
    colourLabel: "色",
    applyColour: "色を適用",
    gradientLabel: "グラデーション",
    gradientStart: "開始",
    gradientEnd: "終了",
    applyGradient: "グラデーションを適用",
    chatStylingTitle: "チャットスタイル",
    colonColourLabel: "コロンの色",
    colonColourHint: "チャットで名前の後に表示されるコロン（:）の色",
    messageColourLabel: "メッセージの色",
    messageColourHint: "チャットメッセージの色",
    previewTitle: "プレビュー",
    previewSampleMessage: "みなさん、こんにちは！",
    generatedCodeTitle: "生成コード",
    generatedCodeHint:
      "これをコピーしてPlayerData.txtの「Name」の値として貼り付け",
    copyButton: "コピー",
    copiedButton: "コピーしました！",
    instructionsTitle: "適用方法",
    instructionIntro:
      "カスタム名を適用するにはPlayerData.txtファイルを編集します：",
    step1: "ゲームを完全に終了します。",
    step2: "以下の場所にあるPlayerData.txtファイルに移動します：",
    stepBackup:
      "ファイルをコピーしてバックアップします（例：PlayerData-backup.txt）。",
    step3:
      "テキストエディタでファイルを開き、「Name」項目を見つけます。以下のようになっています：",
    step3Example: '"Name":"現在の名前"',
    step4:
      "値（例：上の例の YourCurrentName）を「生成されたコード」セクションのコードに置き換えます。",
    step5: "ファイルを保存してゲームを起動します。",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "StatusManagerモッドを使用して、ゲーム内で/setnameコマンドを使うこともできます。",
    altMethodLink: "StatusManagerモッド",
    tipTitle: "ヒント",
    tip40Char:
      "ゲーム内の名前欄は40文字制限がありますが、PlayerData.txtの編集でこれを回避できます。",
    tipBackup: "編集前にPlayerData.txtのバックアップを必ず取ってください。",
    tipEscapeQuotes:
      '名前に引用符が含まれる場合、JSONファイルではバックスラッシュでエスケープしてください（\\"）。',
    enterName: "上に名前を入力して開始",
    noLettersSelected: "1つ以上の文字を選択して色を設定",
    languageLabel: "言語",
    enableChatColours: "チャットの色を有効にする",
    autoApplyTitle: "自動適用",
    autoApplyDesc:
      "PlayerData.txtファイルをここにドラッグして、新しい名前が適用された修正版をダウンロードします。既存のPlayerData.txtをバックアップしてから、ダウンロードしたファイルと置き換えてください。",
    autoApplyPrivacy:
      "すべてブラウザ内でローカルに処理されます — データがコンピュータの外に出ることはありません。",
    manualMethodTitle: "手動ファイル編集",
    fileApplyDropZone: "PlayerData.txtファイルをここにドロップ",
    fileApplyDropHint: "またはクリックして参照",
    fileApplyNoCode: "まず名前の色を設定してから、ここに戻ってください。",
    fileApplyNoName:
      "このファイルにNameフィールドが見つかりません。有効なPlayerData.txtファイルか確認してください。",
    fileApplyReadError:
      "ファイルを読み取れませんでした。もう一度お試しください。",
    fileApplyLoaded: "ファイル読み込み完了",
    fileApplyOldName: "現在の名前",
    fileApplyDownload: "修正ファイルをダウンロード",
    fileApplyDownloaded: "ダウンロード完了！",
    fileApplyDownloadHint:
      "ダウンロードしたファイルで元のPlayerData.txtを置き換えて、ゲームを起動してください。",
    fileApplyReset: "リセット",
    footerFanCreation:
      "これはファン作品であり、On-TogetherやGigaPuffとは公式に関連していません。",
    footerInspired: "インスピレーション：",
    footerGuideLink: "Ranchのガイド",
    footerSourceCode: "ソースコード",
    fileApplyWaitingForName:
      "上で名前の色を設定してから、更新されたファイルをダウンロードしてください。",
    boldLabel: "太字",
    chatBoldLabel: "チャット太字",
    italicLabel: "斜体",
    chatItalicLabel: "チャット斜体",
    nameLoadHint:
      "PlayerDataファイルを下の「適用方法」セクションのオートアプリケーターにドロップして、既存の表示名を読み込めます。",
    nameOverrideTitle: "現在の名前を上書きしますか？",
    nameOverrideDesc:
      "既に名前が入力されています。PlayerDataファイルの名前で置き換えますか？",
    nameOverrideConfirm: "置き換え",
    nameOverrideCancel: "現在のまま",
    footerKofi: "Ko-fiで応援する",
  },

  ko: {
    appTitle: "On-Together 이름 커스터마이저",
    appSubtitle: "On-Together: Virtual Co-Working 표시 이름 색상 커스터마이즈",
    nameLabel: "표시 이름",
    namePlaceholder: "표시 이름을 입력하세요...",
    letterStylingTitle: "글자 스타일",
    letterStylingHint:
      "글자를 클릭하여 선택한 후 색상이나 그라데이션을 적용하세요. Shift+클릭으로 범위 선택, Ctrl/Cmd+클릭으로 토글.",
    selectAll: "모두 선택",
    deselectAll: "선택 해제",
    colourLabel: "색상",
    applyColour: "색상 적용",
    gradientLabel: "그라데이션",
    gradientStart: "시작",
    gradientEnd: "끝",
    applyGradient: "그라데이션 적용",
    chatStylingTitle: "채팅 스타일",
    colonColourLabel: "콜론 색상",
    colonColourHint: "채팅에서 이름 뒤에 표시되는 콜론(:)의 색상",
    messageColourLabel: "메시지 색상",
    messageColourHint: "채팅 메시지의 색상",
    previewTitle: "미리보기",
    previewSampleMessage: "안녕하세요!",
    generatedCodeTitle: "생성된 코드",
    generatedCodeHint:
      '이것을 복사하여 PlayerData.txt의 "Name" 값으로 붙여넣기',
    copyButton: "복사",
    copiedButton: "복사됨!",
    instructionsTitle: "적용 방법",
    instructionIntro:
      "커스텀 이름을 적용하려면 PlayerData.txt 파일을 편집하세요:",
    step1: "게임을 완전히 종료합니다.",
    step2: "다음 위치에 있는 PlayerData.txt 파일로 이동합니다:",
    stepBackup: "파일을 복사하여 백업합니다 (예: PlayerData-backup.txt).",
    step3:
      '텍스트 편집기에서 파일을 열고 "Name" 항목을 찾습니다. 다음과 같이 보일 것입니다:',
    step3Example: '"Name":"현재이름"',
    step4:
      '값(예: 위 예시의 YourCurrentName)을 "생성된 코드" 섹션의 코드로 교체합니다.',
    step5: "파일을 저장하고 게임을 시작합니다.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "StatusManager 모드를 사용하여 게임 내에서 /setname 명령을 사용할 수도 있습니다.",
    altMethodLink: "StatusManager 모드",
    tipTitle: "팁",
    tip40Char:
      "게임 내 이름 필드는 40자 제한이 있지만 PlayerData.txt 편집으로 우회할 수 있습니다.",
    tipBackup: "편집 전에 항상 PlayerData.txt를 백업하세요.",
    tipEscapeQuotes:
      '이름에 따옴표가 포함된 경우 JSON 파일에서 백슬래시로 이스케이프하세요(\\").',
    enterName: "위에 이름을 입력하여 시작",
    noLettersSelected: "하나 이상의 글자를 선택하여 색상을 설정하세요",
    languageLabel: "언어",
    enableChatColours: "채팅 색상 활성화",
    autoApplyTitle: "자동 적용",
    autoApplyDesc:
      "PlayerData.txt 파일을 여기에 드래그하여 새 이름이 적용된 수정된 버전을 다운로드하세요. 기존 PlayerData.txt를 먼저 백업한 다음 다운로드한 파일로 교체하세요.",
    autoApplyPrivacy:
      "모든 처리는 브라우저에서 로컬로 실행됩니다 — 데이터가 컴퓨터 밖으로 나가지 않습니다.",
    manualMethodTitle: "수동 파일 편집",
    fileApplyDropZone: "PlayerData.txt 파일을 여기에 드롭하세요",
    fileApplyDropHint: "또는 클릭하여 찾아보기",
    fileApplyNoCode: "먼저 이름 색상을 설정한 후 여기로 돌아오세요.",
    fileApplyNoName:
      "이 파일에서 Name 필드를 찾을 수 없습니다. 유효한 PlayerData.txt 파일인지 확인하세요.",
    fileApplyReadError: "파일을 읽을 수 없습니다. 다시 시도해 주세요.",
    fileApplyLoaded: "파일 로드됨",
    fileApplyOldName: "현재 이름",
    fileApplyDownload: "수정된 파일 다운로드",
    fileApplyDownloaded: "다운로드 완료!",
    fileApplyDownloadHint:
      "다운로드한 파일로 원본 PlayerData.txt를 교체한 후 게임을 실행하세요.",
    fileApplyReset: "초기화",
    footerFanCreation:
      "이것은 팬 창작물이며 On-Together 또는 GigaPuff와 공식적으로 관련이 없습니다.",
    footerInspired: "영감을 받은 곳:",
    footerGuideLink: "Ranch의 가이드",
    footerSourceCode: "소스 코드",
    fileApplyWaitingForName:
      "위에서 이름 색상을 설정한 후 업데이트된 파일을 다운로드하세요.",
    boldLabel: "굵게",
    chatBoldLabel: "채팅 굵게",
    italicLabel: "기울임",
    chatItalicLabel: "채팅 기울임",
    nameLoadHint:
      'PlayerData 파일을 아래 "적용 방법" 섹션의 자동 적용기에 끌어다 놓으면 기존 표시 이름을 불러올 수 있습니다.',
    nameOverrideTitle: "현재 이름을 바꾸시겠습니까?",
    nameOverrideDesc:
      "이미 이름이 입력되어 있습니다. PlayerData 파일의 이름으로 교체하시겠습니까?",
    nameOverrideConfirm: "교체",
    nameOverrideCancel: "현재 유지",
    footerKofi: "Ko-fi에서 후원하기",
  },

  "zh-CN": {
    appTitle: "On-Together 名称自定义工具",
    appSubtitle: "自定义你在 On-Together: Virtual Co-Working 中的显示名称颜色",
    nameLabel: "显示名称",
    namePlaceholder: "输入你的显示名称...",
    letterStylingTitle: "字母样式",
    letterStylingHint:
      "点击字母选择，然后应用颜色或渐变。Shift+点击选择范围，Ctrl/Cmd+点击切换选择。",
    selectAll: "全选",
    deselectAll: "取消选择",
    colourLabel: "颜色",
    applyColour: "应用颜色",
    gradientLabel: "渐变",
    gradientStart: "起始",
    gradientEnd: "结束",
    applyGradient: "应用渐变",
    chatStylingTitle: "聊天样式",
    colonColourLabel: "冒号颜色",
    colonColourHint: "聊天中显示在名称后面的冒号（:）的颜色",
    messageColourLabel: "消息颜色",
    messageColourHint: "你的聊天消息的颜色",
    previewTitle: "预览",
    previewSampleMessage: "大家好！",
    generatedCodeTitle: "生成代码",
    generatedCodeHint: '复制此代码并粘贴为PlayerData.txt中"Name"的值',
    copyButton: "复制",
    copiedButton: "已复制！",
    instructionsTitle: "如何应用",
    instructionIntro: "要应用自定义名称，需要编辑PlayerData.txt文件：",
    step1: "完全关闭游戏。",
    step2: "导航到以下路径的PlayerData.txt文件：",
    stepBackup: "备份文件（例如复制为PlayerData-backup.txt）。",
    step3: '用文本编辑器打开文件，找到"Name"字段。它看起来类似这样：',
    step3Example: '"Name":"你当前的名称"',
    step4:
      '将值（例如上面示例中的 YourCurrentName）替换为"生成的代码"部分中的代码。',
    step5: "保存文件并启动游戏。",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc: "你也可以使用StatusManager模组，在游戏内使用/setname命令。",
    altMethodLink: "StatusManager模组",
    tipTitle: "提示",
    tip40Char:
      "游戏内名称字段有40个字符的限制，但编辑PlayerData.txt可以绕过此限制。",
    tipBackup: "编辑前请务必备份你的PlayerData.txt。",
    tipEscapeQuotes: '如果名称包含引号，请在JSON文件中使用反斜杠转义（\\"）。',
    enterName: "在上方输入名称以开始",
    noLettersSelected: "选择一个或多个字母来设置颜色",
    languageLabel: "语言",
    enableChatColours: "启用聊天颜色",
    autoApplyTitle: "自动应用",
    autoApplyDesc:
      "将您的 PlayerData.txt 文件拖到此处，下载已应用新名称的修改版本。请先备份现有的 PlayerData.txt，然后用下载的文件替换它。",
    autoApplyPrivacy:
      "所有处理均在浏览器本地运行——您的数据不会离开您的计算机。",
    manualMethodTitle: "手动编辑文件",
    fileApplyDropZone: "将 PlayerData.txt 文件拖到此处",
    fileApplyDropHint: "或点击浏览",
    fileApplyNoCode: "请先配置您的名称颜色，然后再回到这里。",
    fileApplyNoName:
      "在此文件中找不到 Name 字段。请确保它是有效的 PlayerData.txt 文件。",
    fileApplyReadError: "无法读取文件，请重试。",
    fileApplyLoaded: "文件已载入",
    fileApplyOldName: "当前名称",
    fileApplyDownload: "下载修改后的文件",
    fileApplyDownloaded: "已下载！",
    fileApplyDownloadHint:
      "用下载的文件替换原始的 PlayerData.txt，然后启动游戏。",
    fileApplyReset: "重置",
    footerFanCreation: "这是粉丝作品，与 On-Together 或 GigaPuff 无官方关联。",
    footerInspired: "灵感来自",
    footerGuideLink: "Ranch 的指南",
    footerSourceCode: "源代码",
    fileApplyWaitingForName: "请在上方设置名称颜色，然后回来下载更新的文件。",
    boldLabel: "粗体",
    chatBoldLabel: "聊天粗体",
    italicLabel: "斜体",
    chatItalicLabel: "聊天斜体",
    nameLoadHint:
      "您可以将 PlayerData 文件拖放到下方“如何应用”部分的自动应用器中来加载您现有的显示名称。",
    nameOverrideTitle: "覆盖当前名称？",
    nameOverrideDesc: "您已输入名称。是否要用 PlayerData 文件中的名称替换？",
    nameOverrideConfirm: "替换",
    nameOverrideCancel: "保留当前",
    footerKofi: "在 Ko-fi 上支持",
  },

  "zh-TW": {
    appTitle: "On-Together 名稱自訂工具",
    appSubtitle: "自訂你在 On-Together: Virtual Co-Working 中的顯示名稱顏色",
    nameLabel: "顯示名稱",
    namePlaceholder: "輸入你的顯示名稱...",
    letterStylingTitle: "字母樣式",
    letterStylingHint:
      "點擊字母選擇，然後套用顏色或漸層。Shift+點擊選擇範圍，Ctrl/Cmd+點擊切換選擇。",
    selectAll: "全選",
    deselectAll: "取消選擇",
    colourLabel: "顏色",
    applyColour: "套用顏色",
    gradientLabel: "漸層",
    gradientStart: "起始",
    gradientEnd: "結束",
    applyGradient: "套用漸層",
    chatStylingTitle: "聊天樣式",
    colonColourLabel: "冒號顏色",
    colonColourHint: "聊天中顯示在名稱後面的冒號（:）的顏色",
    messageColourLabel: "訊息顏色",
    messageColourHint: "你的聊天訊息的顏色",
    previewTitle: "預覽",
    previewSampleMessage: "大家好！",
    generatedCodeTitle: "產生的代碼",
    generatedCodeHint: "複製此代碼並貼上為PlayerData.txt中「Name」的值",
    copyButton: "複製",
    copiedButton: "已複製！",
    instructionsTitle: "如何套用",
    instructionIntro: "要套用自訂名稱，需要編輯PlayerData.txt檔案：",
    step1: "完全關閉遊戲。",
    step2: "導航到以下路徑的PlayerData.txt檔案：",
    stepBackup: "備份檔案（例如複製為PlayerData-backup.txt）。",
    step3: "用文字編輯器開啟檔案，找到「Name」欄位。它看起來類似這樣：",
    step3Example: '"Name":"你目前的名稱"',
    step4:
      "將值（例如上方範例中的 YourCurrentName）替換為「產生的代碼」部分中的代碼。",
    step5: "儲存檔案並啟動遊戲。",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc: "你也可以使用StatusManager模組，在遊戲內使用/setname指令。",
    altMethodLink: "StatusManager模組",
    tipTitle: "提示",
    tip40Char:
      "遊戲內名稱欄位有40個字元的限制，但編輯PlayerData.txt可以繞過此限制。",
    tipBackup: "編輯前請務必備份你的PlayerData.txt。",
    tipEscapeQuotes: '如果名稱包含引號，請在JSON檔案中使用反斜線轉義（\\"）。',
    enterName: "在上方輸入名稱以開始",
    noLettersSelected: "選擇一個或多個字母來設定顏色",
    languageLabel: "語言",
    enableChatColours: "啟用聊天顏色",
    autoApplyTitle: "自動套用",
    autoApplyDesc:
      "將您的 PlayerData.txt 檔案拖到此處，下載已套用新名稱的修改版本。請先備份現有的 PlayerData.txt，然後用下載的檔案替換它。",
    autoApplyPrivacy: "所有處理均在瀏覽器本地執行——您的資料不會離開您的電腦。",
    manualMethodTitle: "手動編輯檔案",
    fileApplyDropZone: "將 PlayerData.txt 檔案拖到此處",
    fileApplyDropHint: "或點擊瀏覽",
    fileApplyNoCode: "請先設定您的名稱顏色，然後再回到這裡。",
    fileApplyNoName:
      "在此檔案中找不到 Name 欄位。請確保它是有效的 PlayerData.txt 檔案。",
    fileApplyReadError: "無法讀取檔案，請重試。",
    fileApplyLoaded: "檔案已載入",
    fileApplyOldName: "目前名稱",
    fileApplyDownload: "下載修改後的檔案",
    fileApplyDownloaded: "已下載！",
    fileApplyDownloadHint:
      "用下載的檔案取代原始的 PlayerData.txt，然後啟動遊戲。",
    fileApplyReset: "重設",
    footerFanCreation: "這是粉絲作品，與 On-Together 或 GigaPuff 無官方關聯。",
    footerInspired: "靈感來自",
    footerGuideLink: "Ranch 的指南",
    footerSourceCode: "原始碼",
    fileApplyWaitingForName: "請在上方設定名稱顏色，然後回來下載更新的檔案。",
    boldLabel: "粗體",
    chatBoldLabel: "聊天粗體",
    italicLabel: "斜體",
    chatItalicLabel: "聊天斜體",
    nameLoadHint:
      "您可以將 PlayerData 檔案拖放到下方「如何套用」部分的自動套用器中來載入您現有的顯示名稱。",
    nameOverrideTitle: "覆蓋目前名稱？",
    nameOverrideDesc: "您已輸入名稱。是否要用 PlayerData 檔案中的名稱取代？",
    nameOverrideConfirm: "取代",
    nameOverrideCancel: "保留目前",
    footerKofi: "在 Ko-fi 上支持",
  },

  fr: {
    appTitle: "On-Together - Personnalisation du nom",
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
    gradientLabel: "Dégradé",
    gradientStart: "Début",
    gradientEnd: "Fin",
    applyGradient: "Appliquer le dégradé",
    chatStylingTitle: "Style du chat",
    colonColourLabel: "Couleur des deux-points",
    colonColourHint:
      "La couleur des deux-points (:) affichés après votre nom dans le chat",
    messageColourLabel: "Couleur du message",
    messageColourHint: "La couleur de vos messages dans le chat",
    previewTitle: "Aperçu",
    previewSampleMessage: "Bonjour à tous !",
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
  },

  de: {
    appTitle: "On-Together Namens-Anpasser",
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
    gradientLabel: "Verlauf",
    gradientStart: "Anfang",
    gradientEnd: "Ende",
    applyGradient: "Verlauf anwenden",
    chatStylingTitle: "Chat-Stil",
    colonColourLabel: "Doppelpunkt-Farbe",
    colonColourHint: "Die Farbe des Doppelpunkts (:) nach deinem Namen im Chat",
    messageColourLabel: "Nachrichtenfarbe",
    messageColourHint: "Die Farbe deiner Chat-Nachrichten",
    previewTitle: "Vorschau",
    previewSampleMessage: "Hallo zusammen!",
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
  },

  es: {
    appTitle: "On-Together - Personalizador de nombre",
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
    gradientLabel: "Degradado",
    gradientStart: "Inicio",
    gradientEnd: "Final",
    applyGradient: "Aplicar degradado",
    chatStylingTitle: "Estilo del chat",
    colonColourLabel: "Color de los dos puntos",
    colonColourHint:
      "El color de los dos puntos (:) que aparecen después de tu nombre en el chat",
    messageColourLabel: "Color del mensaje",
    messageColourHint: "El color de tus mensajes en el chat",
    previewTitle: "Vista previa",
    previewSampleMessage: "¡Hola a todos!",
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
  },

  "pt-BR": {
    appTitle: "On-Together - Personalizador de nome",
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
    gradientLabel: "Gradiente",
    gradientStart: "Início",
    gradientEnd: "Fim",
    applyGradient: "Aplicar gradiente",
    chatStylingTitle: "Estilo do chat",
    colonColourLabel: "Cor dos dois pontos",
    colonColourHint: "A cor dos dois pontos (:) exibidos após seu nome no chat",
    messageColourLabel: "Cor da mensagem",
    messageColourHint: "A cor das suas mensagens no chat",
    previewTitle: "Pré-visualização",
    previewSampleMessage: "Olá a todos!",
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
  },

  ru: {
    appTitle: "On-Together — Настройка имени",
    appSubtitle:
      "Настройте цвета отображаемого имени в On-Together: Virtual Co-Working",
    nameLabel: "Отображаемое имя",
    namePlaceholder: "Введите имя...",
    letterStylingTitle: "Стиль букв",
    letterStylingHint:
      "Нажмите на буквы для выбора, затем примените цвет или градиент. Shift+Клик для диапазона, Ctrl/Cmd+Клик для переключения.",
    selectAll: "Выбрать все",
    deselectAll: "Снять выделение",
    colourLabel: "Цвет",
    applyColour: "Применить цвет",
    gradientLabel: "Градиент",
    gradientStart: "Начало",
    gradientEnd: "Конец",
    applyGradient: "Применить градиент",
    chatStylingTitle: "Стиль чата",
    colonColourLabel: "Цвет двоеточия",
    colonColourHint: "Цвет двоеточия (:) после вашего имени в чате",
    messageColourLabel: "Цвет сообщения",
    messageColourHint: "Цвет ваших сообщений в чате",
    previewTitle: "Предпросмотр",
    previewSampleMessage: "Всем привет!",
    generatedCodeTitle: "Сгенерированный код",
    generatedCodeHint:
      'Скопируйте это и вставьте как значение "Name" в файле PlayerData.txt',
    copyButton: "Копировать",
    copiedButton: "Скопировано!",
    instructionsTitle: "Как применить",
    instructionIntro:
      "Чтобы применить своё имя, отредактируйте файл PlayerData.txt:",
    step1: "Полностью закройте игру.",
    step2: "Перейдите к файлу PlayerData.txt по адресу:",
    stepBackup:
      "Сделайте резервную копию файла (например, скопируйте как PlayerData-backup.txt).",
    step3:
      'Откройте файл в текстовом редакторе и найдите поле "Name". Оно выглядит примерно так:',
    step3Example: '"Name":"ВашеТекущееИмя"',
    step4:
      'Замените значение (например, YourCurrentName в примере выше) на код из раздела "Сгенерированный код".',
    step5: "Сохраните файл и запустите игру.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "Вы также можете использовать мод StatusManager и команду /setname в игре.",
    altMethodLink: "мод StatusManager",
    tipTitle: "Советы",
    tip40Char:
      "Поле имени в игре ограничено 40 символами, но редактирование PlayerData.txt обходит это.",
    tipBackup:
      "Всегда делайте резервную копию PlayerData.txt перед редактированием.",
    tipEscapeQuotes:
      'Если имя содержит кавычки, экранируйте их обратным слэшем (\\") в JSON-файле.',
    enterName: "Введите имя выше, чтобы начать",
    noLettersSelected: "Выберите одну или несколько букв для установки цвета",
    languageLabel: "Язык",
    enableChatColours: "Включить цвета чата",
    autoApplyTitle: "Автоматическое применение",
    autoApplyDesc:
      "Перетащите файл PlayerData.txt сюда и скачайте изменённую версию с вашим новым именем. Сначала сделайте резервную копию существующего PlayerData.txt, затем замените его скачанным файлом.",
    autoApplyPrivacy:
      "Всё работает локально в вашем браузере — ваши данные никогда не покидают ваш компьютер.",
    manualMethodTitle: "Ручное редактирование файла",
    fileApplyDropZone: "Перетащите файл PlayerData.txt сюда",
    fileApplyDropHint: "или нажмите для выбора",
    fileApplyNoCode: "Сначала настройте цвета имени, затем вернитесь сюда.",
    fileApplyNoName:
      "Не удалось найти поле Name в этом файле. Убедитесь, что это действительный файл PlayerData.txt.",
    fileApplyReadError:
      "Не удалось прочитать файл. Пожалуйста, попробуйте снова.",
    fileApplyLoaded: "Файл загружен",
    fileApplyOldName: "Текущее имя",
    fileApplyDownload: "Скачать изменённый файл",
    fileApplyDownloaded: "Скачано!",
    fileApplyDownloadHint:
      "Замените оригинальный PlayerData.txt скачанным файлом и запустите игру.",
    fileApplyReset: "Сбросить",
    footerFanCreation:
      "Это фанатское творение, не связанное официально с On-Together или GigaPuff.",
    footerInspired: "Вдохновлено",
    footerGuideLink: "гайдом Ranch",
    footerSourceCode: "Исходный код",
    fileApplyWaitingForName:
      "Настройте цвета имени выше, затем вернитесь, чтобы скачать обновлённый файл.",
    boldLabel: "Жирный",
    chatBoldLabel: "Жирный в чате",
    italicLabel: "Курсив",
    chatItalicLabel: "Курсив в чате",
    nameLoadHint:
      'Вы можете загрузить своё текущее отображаемое имя, перетащив файл PlayerData в Авто-аппликатор в разделе "Как применить" ниже.',
    nameOverrideTitle: "Заменить текущее имя?",
    nameOverrideDesc:
      "У вас уже введено имя. Хотите заменить его именем из файла PlayerData?",
    nameOverrideConfirm: "Заменить",
    nameOverrideCancel: "Оставить текущее",
    footerKofi: "Поддержать на Ko-fi",
  },

  it: {
    appTitle: "On-Together - Personalizzatore del nome",
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
    gradientLabel: "Sfumatura",
    gradientStart: "Inizio",
    gradientEnd: "Fine",
    applyGradient: "Applica sfumatura",
    chatStylingTitle: "Stile della chat",
    colonColourLabel: "Colore dei due punti",
    colonColourHint:
      "Il colore dei due punti (:) mostrati dopo il tuo nome nella chat",
    messageColourLabel: "Colore del messaggio",
    messageColourHint: "Il colore dei tuoi messaggi nella chat",
    previewTitle: "Anteprima",
    previewSampleMessage: "Ciao a tutti!",
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
    noLettersSelected:
      "Seleziona una o più lettere per impostare il loro colore",
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
  },

  tr: {
    appTitle: "On-Together Ad Özelleştirici",
    appSubtitle:
      "On-Together: Virtual Co-Working'deki görünen adınızın renklerini özelleştirin",
    nameLabel: "Görünen Ad",
    namePlaceholder: "Adınızı girin...",
    letterStylingTitle: "Harf Stili",
    letterStylingHint:
      "Harflere tıklayarak seçin, sonra renk veya gradyan uygulayın. Shift+Tık aralık seçimi, Ctrl/Cmd+Tık değiştirme.",
    selectAll: "Tümünü Seç",
    deselectAll: "Seçimi Kaldır",
    colourLabel: "Renk",
    applyColour: "Renk Uygula",
    gradientLabel: "Gradyan",
    gradientStart: "Başlangıç",
    gradientEnd: "Bitiş",
    applyGradient: "Gradyan Uygula",
    chatStylingTitle: "Sohbet Stili",
    colonColourLabel: "İki Nokta Rengi",
    colonColourHint:
      "Sohbette adınızdan sonra gösterilen iki nokta (:) üst üste rengi",
    messageColourLabel: "Mesaj Rengi",
    messageColourHint: "Sohbet mesajlarınızın rengi",
    previewTitle: "Önizleme",
    previewSampleMessage: "Herkese merhaba!",
    generatedCodeTitle: "Oluşturulan Kod",
    generatedCodeHint:
      'Bunu kopyalayıp PlayerData.txt dosyanızdaki "Name" değeri olarak yapıştırın',
    copyButton: "Kopyala",
    copiedButton: "Kopyalandı!",
    instructionsTitle: "Nasıl Uygulanır",
    instructionIntro:
      "Özel adınızı uygulamak için PlayerData.txt dosyasını düzenleyin:",
    step1: "Oyunu tamamen kapatın.",
    step2: "Şu konumdaki PlayerData.txt dosyasına gidin:",
    stepBackup:
      "Dosyanın yedeğini alın (ör. PlayerData-backup.txt olarak kopyalayın).",
    step3:
      'Dosyayı bir metin düzenleyicide açın ve "Name" alanını bulun. Şuna benzer görünecektir:',
    step3Example: '"Name":"MevcutAdınız"',
    step4:
      'Değeri (ör. yukarıdaki örnekteki YourCurrentName) "Oluşturulan Kod" bölümündeki kodla değiştirin.',
    step5: "Dosyayı kaydedin ve oyunu başlatın.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "StatusManager modunu kullanarak oyun içinde /setname komutunu da kullanabilirsiniz.",
    altMethodLink: "StatusManager modu",
    tipTitle: "İpuçları",
    tip40Char:
      "Oyun içi ad alanının 40 karakter sınırı var, ancak PlayerData.txt'yi düzenlemek bunu atlar.",
    tipBackup:
      "Düzenlemeden önce her zaman PlayerData.txt'nizin yedeğini alın.",
    tipEscapeQuotes:
      'Adınız tırnak işaretleri içeriyorsa, JSON dosyasında ters eğik çizgi ile kaçırın (\\").',
    enterName: "Başlamak için yukarıya bir ad girin",
    noLettersSelected:
      "Renklerini ayarlamak için bir veya daha fazla harf seçin",
    languageLabel: "Dil",
    enableChatColours: "Sohbet renklerini etkinleştir",
    autoApplyTitle: "Otomatik Uygulama",
    autoApplyDesc:
      "PlayerData.txt dosyanızı buraya sürükleyin ve yeni adınız uygulanmış değiştirilmiş sürümü indirin. Önce mevcut PlayerData.txt dosyanızı yedekleyin, ardından indirilen dosyayla değiştirin.",
    autoApplyPrivacy:
      "Her şey tarayıcınızda yerel olarak çalışır — verileriniz asla bilgisayarınızdan çıkmaz.",
    manualMethodTitle: "Manuel Dosya Düzenleme",
    fileApplyDropZone: "PlayerData.txt dosyanızı buraya bırakın",
    fileApplyDropHint: "veya göz atmak için tıklayın",
    fileApplyNoCode:
      "Önce isim renklerinizi yapılandırın, sonra buraya geri dönün.",
    fileApplyNoName:
      "Bu dosyada Name alanı bulunamadı. Geçerli bir PlayerData.txt dosyası olduğundan emin olun.",
    fileApplyReadError: "Dosya okunamadı. Lütfen tekrar deneyin.",
    fileApplyLoaded: "Dosya yüklendi",
    fileApplyOldName: "Mevcut isim",
    fileApplyDownload: "Değiştirilmiş dosyayı indir",
    fileApplyDownloaded: "İndirildi!",
    fileApplyDownloadHint:
      "Orijinal PlayerData.txt dosyanızı indirilen dosyayla değiştirin ve oyunu başlatın.",
    fileApplyReset: "Sıfırla",
    footerFanCreation:
      "Bu bir hayran yapımıdır ve On-Together veya GigaPuff ile resmi olarak ilişkili değildir.",
    footerInspired: "İlham kaynağı:",
    footerGuideLink: "Ranch'in Rehberi",
    footerSourceCode: "Kaynak Kodu",
    fileApplyWaitingForName:
      "Yukarıda isim renklerinizi ayarlayın, sonra güncellenmiş dosyayı indirmek için geri dönün.",
    boldLabel: "Kalın",
    chatBoldLabel: "Sohbet Kalın",
    italicLabel: "İtalik",
    chatItalicLabel: "Sohbet İtalik",
    nameLoadHint:
      'Mevcut görünen adınızı PlayerData dosyanızı aşağıdaki "Nasıl Uygulanır" bölümündeki Otomatik Uygulayıcıya bırakarak yükleyebilirsiniz.',
    nameOverrideTitle: "Mevcut ad değiştirilsin mi?",
    nameOverrideDesc:
      "Zaten bir ad girilmiş. PlayerData dosyanızdaki adla değiştirmek ister misiniz?",
    nameOverrideConfirm: "Değiştir",
    nameOverrideCancel: "Mevcut olanı koru",
    footerKofi: "Ko-fi'de destekle",
  },

  pl: {
    appTitle: "On-Together — Personalizacja nazwy",
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
    gradientLabel: "Gradient",
    gradientStart: "Początek",
    gradientEnd: "Koniec",
    applyGradient: "Zastosuj gradient",
    chatStylingTitle: "Styl czatu",
    colonColourLabel: "Kolor dwukropka",
    colonColourHint: "Kolor dwukropka (:) wyświetlanego po nazwie w czacie",
    messageColourLabel: "Kolor wiadomości",
    messageColourHint: "Kolor twoich wiadomości na czacie",
    previewTitle: "Podgląd",
    previewSampleMessage: "Cześć wszystkim!",
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
  },

  uk: {
    appTitle: "On-Together — Налаштування імені",
    appSubtitle:
      "Налаштуйте кольори відображуваного імені в On-Together: Virtual Co-Working",
    nameLabel: "Відображуване ім'я",
    namePlaceholder: "Введіть ім'я...",
    letterStylingTitle: "Стиль літер",
    letterStylingHint:
      "Натисніть на літери для вибору, потім застосуйте колір або градієнт. Shift+Клік для діапазону, Ctrl/Cmd+Клік для перемикання.",
    selectAll: "Вибрати все",
    deselectAll: "Зняти виділення",
    colourLabel: "Колір",
    applyColour: "Застосувати колір",
    gradientLabel: "Градієнт",
    gradientStart: "Початок",
    gradientEnd: "Кінець",
    applyGradient: "Застосувати градієнт",
    chatStylingTitle: "Стиль чату",
    colonColourLabel: "Колір двокрапки",
    colonColourHint: "Колір двокрапки (:) після вашого імені в чаті",
    messageColourLabel: "Колір повідомлення",
    messageColourHint: "Колір ваших повідомлень у чаті",
    previewTitle: "Попередній перегляд",
    previewSampleMessage: "Привіт усім!",
    generatedCodeTitle: "Згенерований код",
    generatedCodeHint:
      'Скопіюйте це та вставте як значення "Name" у файлі PlayerData.txt',
    copyButton: "Копіювати",
    copiedButton: "Скопійовано!",
    instructionsTitle: "Як застосувати",
    instructionIntro:
      "Щоб застосувати власне ім'я, відредагуйте файл PlayerData.txt:",
    step1: "Повністю закрийте гру.",
    step2: "Перейдіть до файлу PlayerData.txt за адресою:",
    stepBackup:
      "Зробіть резервну копію файлу (наприклад, скопіюйте як PlayerData-backup.txt).",
    step3:
      'Відкрийте файл у текстовому редакторі та знайдіть поле "Name". Воно виглядає приблизно так:',
    step3Example: '"Name":"ВашеПоточнеІмя"',
    step4:
      'Замініть значення (наприклад, YourCurrentName у прикладі вище) на код з розділу "Згенерований код".',
    step5: "Збережіть файл та запустіть гру.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "Ви також можете використати мод StatusManager та команду /setname у грі.",
    altMethodLink: "мод StatusManager",
    tipTitle: "Поради",
    tip40Char:
      "Поле імені в грі обмежене 40 символами, але редагування PlayerData.txt обходить це.",
    tipBackup:
      "Завжди робіть резервну копію PlayerData.txt перед редагуванням.",
    tipEscapeQuotes:
      "Якщо ім'я містить лапки, екрануйте їх зворотним слешем (\\\") у JSON-файлі.",
    enterName: "Введіть ім'я вище, щоб почати",
    noLettersSelected:
      "Виберіть одну або кілька літер для встановлення кольору",
    languageLabel: "Мова",
    enableChatColours: "Увімкнути кольори чату",
    autoApplyTitle: "Автоматичне застосування",
    autoApplyDesc:
      "Перетягніть файл PlayerData.txt сюди та завантажте змінену версію з вашим новим ім'ям. Спочатку створіть резервну копію наявного PlayerData.txt, потім замініть його завантаженим файлом.",
    autoApplyPrivacy:
      "Усе працює локально у вашому браузері — ваші дані ніколи не залишають ваш комп'ютер.",
    manualMethodTitle: "Ручне редагування файлу",
    fileApplyDropZone: "Перетягніть файл PlayerData.txt сюди",
    fileApplyDropHint: "або натисніть для вибору",
    fileApplyNoCode:
      "Спочатку налаштуйте кольори імені, потім поверніться сюди.",
    fileApplyNoName:
      "Не вдалося знайти поле Name у цьому файлі. Переконайтеся, що це дійсний файл PlayerData.txt.",
    fileApplyReadError:
      "Не вдалося прочитати файл. Будь ласка, спробуйте ще раз.",
    fileApplyLoaded: "Файл завантажено",
    fileApplyOldName: "Поточне ім'я",
    fileApplyDownload: "Завантажити змінений файл",
    fileApplyDownloaded: "Завантажено!",
    fileApplyDownloadHint:
      "Замініть оригінальний PlayerData.txt завантаженим файлом та запустіть гру.",
    fileApplyReset: "Скинути",
    footerFanCreation:
      "Це фанатський проект, який не пов'язаний офіційно з On-Together або GigaPuff.",
    footerInspired: "Натхнення:",
    footerGuideLink: "гайд Ranch",
    footerSourceCode: "Вихідний код",
    fileApplyWaitingForName:
      "Налаштуйте кольори імені вище, потім поверніться, щоб завантажити оновлений файл.",
    boldLabel: "Жирний",
    chatBoldLabel: "Жирний у чаті",
    italicLabel: "Курсив",
    chatItalicLabel: "Курсив у чаті",
    nameLoadHint:
      'Ви можете завантажити своє поточне відображуване ім\'я, перетягнувши файл PlayerData в Авто-аплікатор у розділі "Як застосувати" нижче.',
    nameOverrideTitle: "Замінити поточне ім'я?",
    nameOverrideDesc:
      "У вас вже введено ім'я. Бажаєте замінити його іменем з файлу PlayerData?",
    nameOverrideConfirm: "Замінити",
    nameOverrideCancel: "Залишити поточне",
    footerKofi: "Підтримати на Ko-fi",
  },

  ar: {
    appTitle: "أداة تخصيص الاسم - On-Together",
    appSubtitle: "خصّص ألوان اسمك المعروض في On-Together: Virtual Co-Working",
    nameLabel: "الاسم المعروض",
    namePlaceholder: "أدخل اسمك...",
    letterStylingTitle: "نمط الحروف",
    letterStylingHint:
      "انقر على الحروف لتحديدها، ثم طبّق لوناً أو تدرجاً. Shift+نقر للنطاق، Ctrl/Cmd+نقر للتبديل.",
    selectAll: "تحديد الكل",
    deselectAll: "إلغاء التحديد",
    colourLabel: "اللون",
    applyColour: "تطبيق اللون",
    gradientLabel: "تدرج",
    gradientStart: "البداية",
    gradientEnd: "النهاية",
    applyGradient: "تطبيق التدرج",
    chatStylingTitle: "نمط الدردشة",
    colonColourLabel: "لون النقطتين",
    colonColourHint: "لون النقطتين (:) المعروضتين بعد اسمك في الدردشة",
    messageColourLabel: "لون الرسالة",
    messageColourHint: "لون رسائلك في الدردشة",
    previewTitle: "معاينة",
    previewSampleMessage: "مرحباً بالجميع!",
    generatedCodeTitle: "الكود المُنشأ",
    generatedCodeHint: 'انسخ هذا والصقه كقيمة "Name" في ملف PlayerData.txt',
    copyButton: "نسخ",
    copiedButton: "تم النسخ!",
    instructionsTitle: "كيفية التطبيق",
    instructionIntro: "لتطبيق اسمك المخصص، عدّل ملف PlayerData.txt:",
    step1: "أغلق اللعبة تماماً.",
    step2: "انتقل إلى ملف PlayerData.txt الموجود في:",
    stepBackup:
      "قم بعمل نسخة احتياطية من الملف (مثلاً انسخه كـ PlayerData-backup.txt).",
    step3: 'افتح الملف في محرر نصوص وابحث عن حقل "Name". سيبدو بهذا الشكل:',
    step3Example: '"Name":"اسمك_الحالي"',
    step4:
      'استبدل القيمة (مثلاً YourCurrentName في المثال أعلاه) بالكود من قسم "الكود المُنشأ".',
    step5: "احفظ الملف وابدأ اللعبة.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "يمكنك أيضاً استخدام مود StatusManager واستخدام أمر /setname في اللعبة.",
    altMethodLink: "مود StatusManager",
    tipTitle: "نصائح",
    tip40Char:
      "حقل الاسم في اللعبة محدود بـ 40 حرفاً، لكن تعديل PlayerData.txt يتجاوز هذا.",
    tipBackup: "احرص دائماً على نسخ PlayerData.txt احتياطياً قبل التعديل.",
    tipEscapeQuotes:
      'إذا كان اسمك يحتوي على علامات اقتباس، قم بتهريبها بشرطة مائلة عكسية (\\") في ملف JSON.',
    enterName: "أدخل اسماً أعلاه للبدء",
    noLettersSelected: "حدد حرفاً واحداً أو أكثر لتعيين لونه",
    languageLabel: "اللغة",
    enableChatColours: "تفعيل ألوان الدردشة",
    autoApplyTitle: "التطبيق التلقائي",
    autoApplyDesc:
      "اسحب ملف PlayerData.txt هنا وقم بتنزيل النسخة المعدلة مع اسمك الجديد. قم بعمل نسخة احتياطية من ملف PlayerData.txt الحالي أولاً، ثم استبدله بالملف الذي تم تنزيله.",
    autoApplyPrivacy:
      "كل شيء يعمل محلياً في متصفحك — بياناتك لا تغادر جهازك أبداً.",
    manualMethodTitle: "تحرير الملف يدوياً",
    fileApplyDropZone: "أفلت ملف PlayerData.txt هنا",
    fileApplyDropHint: "أو انقر للاستعراض",
    fileApplyNoCode: "قم بتكوين ألوان اسمك أولاً، ثم عد إلى هنا.",
    fileApplyNoName:
      "تعذر العثور على حقل Name في هذا الملف. تأكد من أنه ملف PlayerData.txt صالح.",
    fileApplyReadError: "تعذرت قراءة الملف. يرجى المحاولة مرة أخرى.",
    fileApplyLoaded: "تم تحميل الملف",
    fileApplyOldName: "الاسم الحالي",
    fileApplyDownload: "تنزيل الملف المعدل",
    fileApplyDownloaded: "تم التنزيل!",
    fileApplyDownloadHint:
      "استبدل ملف PlayerData.txt الأصلي بالملف الذي تم تنزيله، ثم ابدأ اللعبة.",
    fileApplyReset: "إعادة تعيين",
    footerFanCreation:
      "هذا إنشاء معجبين وليس مرتبطًا رسميًا بـ On-Together أو GigaPuff.",
    footerInspired: "مستوحى من",
    footerGuideLink: "دليل Ranch",
    footerSourceCode: "الكود المصدري",
    fileApplyWaitingForName:
      "قم بتعيين ألوان اسمك أعلاه، ثم عد لتنزيل الملف المحدث.",
    boldLabel: "غامق",
    chatBoldLabel: "غامق في الدردشة",
    italicLabel: "مائل",
    chatItalicLabel: "مائل في الدردشة",
    nameLoadHint:
      'يمكنك تحميل اسم العرض الحالي عن طريق إسقاط ملف PlayerData في المطبّق التلقائي في قسم "كيفية التطبيق" أدناه.',
    nameOverrideTitle: "استبدال الاسم الحالي؟",
    nameOverrideDesc:
      "لديك اسم مُدخل بالفعل. هل تريد استبداله بالاسم من ملف PlayerData؟",
    nameOverrideConfirm: "استبدال",
    nameOverrideCancel: "الإبقاء على الحالي",
    footerKofi: "ادعم على Ko-fi",
  },

  id: {
    appTitle: "On-Together Kustomisasi Nama",
    appSubtitle:
      "Kustomisasi warna nama tampilan Anda di On-Together: Virtual Co-Working",
    nameLabel: "Nama Tampilan",
    namePlaceholder: "Masukkan nama Anda...",
    letterStylingTitle: "Gaya Huruf",
    letterStylingHint:
      "Klik huruf untuk memilih, lalu terapkan warna atau gradien. Shift+Klik untuk rentang, Ctrl/Cmd+Klik untuk beralih.",
    selectAll: "Pilih Semua",
    deselectAll: "Batalkan Pilihan",
    colourLabel: "Warna",
    applyColour: "Terapkan Warna",
    gradientLabel: "Gradien",
    gradientStart: "Mulai",
    gradientEnd: "Akhir",
    applyGradient: "Terapkan Gradien",
    chatStylingTitle: "Gaya Chat",
    colonColourLabel: "Warna Titik Dua",
    colonColourHint:
      "Warna titik dua (:) yang ditampilkan setelah nama Anda di chat",
    messageColourLabel: "Warna Pesan",
    messageColourHint: "Warna pesan chat Anda",
    previewTitle: "Pratinjau",
    previewSampleMessage: "Halo semuanya!",
    generatedCodeTitle: "Kode yang Dihasilkan",
    generatedCodeHint:
      'Salin ini dan tempel sebagai nilai "Name" di file PlayerData.txt Anda',
    copyButton: "Salin",
    copiedButton: "Tersalin!",
    instructionsTitle: "Cara Menerapkan",
    instructionIntro:
      "Untuk menerapkan nama kustom Anda, edit file PlayerData.txt:",
    step1: "Tutup game sepenuhnya.",
    step2: "Buka lokasi file PlayerData.txt yang terletak di:",
    stepBackup:
      "Buat cadangan file (misal salin sebagai PlayerData-backup.txt).",
    step3:
      'Buka file di editor teks dan temukan kolom "Name". Tampilannya akan seperti ini:',
    step3Example: '"Name":"NamaAndaSaatIni"',
    step4:
      'Ganti nilainya (mis. YourCurrentName pada contoh di atas) dengan kode dari bagian "Kode yang Dihasilkan".',
    step5: "Simpan file dan mulai game.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "Anda juga bisa menggunakan mod StatusManager dan perintah /setname di dalam game.",
    altMethodLink: "mod StatusManager",
    tipTitle: "Tips",
    tip40Char:
      "Kolom nama di game memiliki batas 40 karakter, tetapi mengedit PlayerData.txt melewati ini.",
    tipBackup: "Selalu cadangkan PlayerData.txt Anda sebelum mengedit.",
    tipEscapeQuotes:
      'Jika nama Anda mengandung tanda kutip, escape dengan backslash (\\") di file JSON.',
    enterName: "Masukkan nama di atas untuk memulai",
    noLettersSelected: "Pilih satu atau lebih huruf untuk mengatur warnanya",
    languageLabel: "Bahasa",
    enableChatColours: "Aktifkan warna chat",
    autoApplyTitle: "Aplikasi Otomatis",
    autoApplyDesc:
      "Seret file PlayerData.txt Anda ke sini dan unduh versi yang dimodifikasi dengan nama baru Anda. Cadangkan file PlayerData.txt yang ada terlebih dahulu, lalu ganti dengan file yang diunduh.",
    autoApplyPrivacy:
      "Semuanya berjalan secara lokal di browser Anda — data Anda tidak pernah meninggalkan komputer Anda.",
    manualMethodTitle: "Pengeditan File Manual",
    fileApplyDropZone: "Lepaskan file PlayerData.txt Anda di sini",
    fileApplyDropHint: "atau klik untuk menelusuri",
    fileApplyNoCode:
      "Konfigurasikan warna nama Anda terlebih dahulu, lalu kembali ke sini.",
    fileApplyNoName:
      "Tidak dapat menemukan field Name di file ini. Pastikan ini adalah file PlayerData.txt yang valid.",
    fileApplyReadError: "Tidak dapat membaca file. Silakan coba lagi.",
    fileApplyLoaded: "File dimuat",
    fileApplyOldName: "Nama saat ini",
    fileApplyDownload: "Unduh file yang dimodifikasi",
    fileApplyDownloaded: "Terunduh!",
    fileApplyDownloadHint:
      "Ganti PlayerData.txt asli Anda dengan file yang diunduh, lalu mulai permainan.",
    fileApplyReset: "Reset",
    footerFanCreation:
      "Ini adalah kreasi penggemar dan tidak terkait secara resmi dengan On-Together atau GigaPuff.",
    footerInspired: "Terinspirasi oleh",
    footerGuideLink: "Panduan oleh Ranch",
    footerSourceCode: "Kode Sumber",
    fileApplyWaitingForName:
      "Atur warna nama Anda di atas, lalu kembali untuk mengunduh file yang diperbarui.",
    boldLabel: "Tebal",
    chatBoldLabel: "Tebal Chat",
    italicLabel: "Miring",
    chatItalicLabel: "Miring Chat",
    nameLoadHint:
      'Anda dapat memuat nama tampilan yang ada dengan menjatuhkan file PlayerData Anda ke Aplikator Otomatis di bagian "Cara Menerapkan" di bawah.',
    nameOverrideTitle: "Ganti nama saat ini?",
    nameOverrideDesc:
      "Anda sudah memasukkan nama. Apakah Anda ingin menggantinya dengan nama dari file PlayerData?",
    nameOverrideConfirm: "Ganti",
    nameOverrideCancel: "Pertahankan saat ini",
    footerKofi: "Dukung di Ko-fi",
  },

  th: {
    appTitle: "On-Together เครื่องมือปรับแต่งชื่อ",
    appSubtitle: "ปรับแต่งสีชื่อแสดงผลของคุณใน On-Together: Virtual Co-Working",
    nameLabel: "ชื่อที่แสดง",
    namePlaceholder: "ป้อนชื่อของคุณ...",
    letterStylingTitle: "สไตล์ตัวอักษร",
    letterStylingHint:
      "คลิกตัวอักษรเพื่อเลือก แล้วใช้สีหรือไล่สี Shift+คลิกเพื่อเลือกช่วง Ctrl/Cmd+คลิกเพื่อสลับ",
    selectAll: "เลือกทั้งหมด",
    deselectAll: "ยกเลิกการเลือก",
    colourLabel: "สี",
    applyColour: "ใช้สี",
    gradientLabel: "ไล่สี",
    gradientStart: "เริ่ม",
    gradientEnd: "สิ้นสุด",
    applyGradient: "ใช้ไล่สี",
    chatStylingTitle: "สไตล์แชท",
    colonColourLabel: "สีจุดคู่",
    colonColourHint: "สีของจุดคู่ (:) ที่แสดงหลังชื่อของคุณในแชท",
    messageColourLabel: "สีข้อความ",
    messageColourHint: "สีข้อความแชทของคุณ",
    previewTitle: "ตัวอย่าง",
    previewSampleMessage: "สวัสดีทุกคน!",
    generatedCodeTitle: "โค้ดที่สร้าง",
    generatedCodeHint: 'คัดลอกนี้และวางเป็นค่าของ "Name" ในไฟล์ PlayerData.txt',
    copyButton: "คัดลอก",
    copiedButton: "คัดลอกแล้ว!",
    instructionsTitle: "วิธีใช้งาน",
    instructionIntro: "เพื่อใช้ชื่อแบบกำหนดเอง ให้แก้ไขไฟล์ PlayerData.txt:",
    step1: "ปิดเกมทั้งหมด",
    step2: "ไปที่ไฟล์ PlayerData.txt ที่ตั้งอยู่ที่:",
    stepBackup: "สำรองไฟล์โดยคัดลอก (เช่น เป็น PlayerData-backup.txt)",
    step3:
      'เปิดไฟล์ในโปรแกรมแก้ไขข้อความและค้นหาฟิลด์ "Name" จะมีลักษณะดังนี้:',
    step3Example: '"Name":"ชื่อปัจจุบันของคุณ"',
    step4:
      'แทนที่ค่า (เช่น YourCurrentName ในตัวอย่างด้านบน) ด้วยโค้ดจากส่วน "โค้ดที่สร้าง"',
    step5: "บันทึกไฟล์และเริ่มเกม",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "คุณยังสามารถใช้ม็อด StatusManager และใช้คำสั่ง /setname ในเกม",
    altMethodLink: "ม็อด StatusManager",
    tipTitle: "เคล็ดลับ",
    tip40Char:
      "ช่องชื่อในเกมมีจำกัด 40 ตัวอักษร แต่การแก้ไข PlayerData.txt จะข้ามข้อจำกัดนี้",
    tipBackup: "สำรองไฟล์ PlayerData.txt ก่อนแก้ไขเสมอ",
    tipEscapeQuotes:
      'หากชื่อมีเครื่องหมายอัญประกาศ ให้ escape ด้วย backslash (\\") ในไฟล์ JSON',
    enterName: "ป้อนชื่อด้านบนเพื่อเริ่มต้น",
    noLettersSelected: "เลือกตัวอักษรหนึ่งตัวขึ้นไปเพื่อตั้งสี",
    languageLabel: "ภาษา",
    enableChatColours: "เปิดใช้สีแชท",
    autoApplyTitle: "ใช้งานอัตโนมัติ",
    autoApplyDesc:
      "ลากไฟล์ PlayerData.txt ของคุณมาที่นี่แล้วดาวน์โหลดเวอร์ชันที่แก้ไขพร้อมชื่อใหม่ของคุณ สำรองไฟล์ PlayerData.txt ที่มีอยู่ก่อน จากนั้นแทนที่ด้วยไฟล์ที่ดาวน์โหลด",
    autoApplyPrivacy:
      "ทุกอย่างทำงานในเครื่องผ่านเบราว์เซอร์ของคุณ — ข้อมูลของคุณจะไม่ออกจากคอมพิวเตอร์ของคุณ",
    manualMethodTitle: "แก้ไขไฟล์ด้วยตนเอง",
    fileApplyDropZone: "วางไฟล์ PlayerData.txt ของคุณที่นี่",
    fileApplyDropHint: "หรือคลิกเพื่อเรียกดู",
    fileApplyNoCode: "กำหนดสีชื่อของคุณก่อน แล้วกลับมาที่นี่",
    fileApplyNoName:
      "ไม่พบฟิลด์ Name ในไฟล์นี้ ตรวจสอบให้แน่ใจว่าเป็นไฟล์ PlayerData.txt ที่ถูกต้อง",
    fileApplyReadError: "ไม่สามารถอ่านไฟล์ได้ กรุณาลองอีกครั้ง",
    fileApplyLoaded: "โหลดไฟล์แล้ว",
    fileApplyOldName: "ชื่อปัจจุบัน",
    fileApplyDownload: "ดาวน์โหลดไฟล์ที่แก้ไข",
    fileApplyDownloaded: "ดาวน์โหลดแล้ว!",
    fileApplyDownloadHint:
      "แทนที่ PlayerData.txt ต้นฉบับด้วยไฟล์ที่ดาวน์โหลด จากนั้นเริ่มเกม",
    fileApplyReset: "รีเซ็ต",
    footerFanCreation:
      "นี่คือผลงานของแฟน ไม่ได้เกี่ยวข้องอย่างเป็นทางการกับ On-Together หรือ GigaPuff",
    footerInspired: "ได้รับแรงบันดาลใจจาก",
    footerGuideLink: "คู่มือโดย Ranch",
    footerSourceCode: "ซอร์สโค้ด",
    fileApplyWaitingForName:
      "ตั้งค่าสีชื่อของคุณด้านบน แล้วกลับมาดาวน์โหลดไฟล์ที่อัปเดต",
    boldLabel: "ตัวหนา",
    chatBoldLabel: "ตัวหนาแชท",
    italicLabel: "ตัวเอียง",
    chatItalicLabel: "ตัวเอียงแชท",
    nameLoadHint:
      'คุณสามารถโหลดชื่อที่แสดงปัจจุบันได้โดยลากไฟล์ PlayerData ไปยังตัวปรับใช้อัตโนมัติในส่วน "วิธีการใช้งาน" ด้านล่าง',
    nameOverrideTitle: "แทนที่ชื่อปัจจุบัน?",
    nameOverrideDesc:
      "คุณมีชื่อที่กรอกไว้แล้ว ต้องการแทนที่ด้วยชื่อจากไฟล์ PlayerData หรือไม่?",
    nameOverrideConfirm: "แทนที่",
    nameOverrideCancel: "เก็บปัจจุบัน",
    footerKofi: "สนับสนุนบน Ko-fi",
  },

  vi: {
    appTitle: "On-Together Tùy chỉnh Tên",
    appSubtitle:
      "Tùy chỉnh màu sắc tên hiển thị trong On-Together: Virtual Co-Working",
    nameLabel: "Tên hiển thị",
    namePlaceholder: "Nhập tên của bạn...",
    letterStylingTitle: "Kiểu chữ cái",
    letterStylingHint:
      "Nhấp vào chữ cái để chọn, sau đó áp dụng màu hoặc gradient. Shift+Nhấp cho phạm vi, Ctrl/Cmd+Nhấp để chuyển đổi.",
    selectAll: "Chọn tất cả",
    deselectAll: "Bỏ chọn",
    colourLabel: "Màu",
    applyColour: "Áp dụng màu",
    gradientLabel: "Gradient",
    gradientStart: "Bắt đầu",
    gradientEnd: "Kết thúc",
    applyGradient: "Áp dụng gradient",
    chatStylingTitle: "Kiểu chat",
    colonColourLabel: "Màu dấu hai chấm",
    colonColourHint: "Màu của dấu hai chấm (:) hiển thị sau tên bạn trong chat",
    messageColourLabel: "Màu tin nhắn",
    messageColourHint: "Màu tin nhắn chat của bạn",
    previewTitle: "Xem trước",
    previewSampleMessage: "Xin chào mọi người!",
    generatedCodeTitle: "Mã được tạo",
    generatedCodeHint:
      'Sao chép và dán làm giá trị "Name" trong tệp PlayerData.txt',
    copyButton: "Sao chép",
    copiedButton: "Đã sao chép!",
    instructionsTitle: "Cách áp dụng",
    instructionIntro: "Để áp dụng tên tùy chỉnh, chỉnh sửa tệp PlayerData.txt:",
    step1: "Đóng trò chơi hoàn toàn.",
    step2: "Đi tới tệp PlayerData.txt tại:",
    stepBackup:
      "Sao lưu tệp bằng cách sao chép (ví dụ: thành PlayerData-backup.txt).",
    step3:
      'Mở tệp trong trình soạn thảo văn bản và tìm trường "Name". Nó sẽ trông như thế này:',
    step3Example: '"Name":"TênHiệnTạiCủaBạn"',
    step4:
      'Thay thế giá trị (ví dụ: YourCurrentName trong ví dụ ở trên) bằng mã từ phần "Mã được tạo".',
    step5: "Lưu tệp và khởi động trò chơi.",
    windowsLabel: "Windows",
    macLabel: "Mac",
    altMethodTitle: "StatusManager Mod",
    altMethodDesc:
      "Bạn cũng có thể sử dụng mod StatusManager và dùng lệnh /setname trong trò chơi.",
    altMethodLink: "mod StatusManager",
    tipTitle: "Mẹo",
    tip40Char:
      "Trường tên trong trò chơi giới hạn 40 ký tự, nhưng chỉnh sửa PlayerData.txt bỏ qua giới hạn này.",
    tipBackup: "Luôn sao lưu PlayerData.txt trước khi chỉnh sửa.",
    tipEscapeQuotes:
      'Nếu tên chứa dấu ngoặc kép, hãy thoát chúng bằng dấu gạch chéo ngược (\\") trong tệp JSON.',
    enterName: "Nhập tên ở trên để bắt đầu",
    noLettersSelected: "Chọn một hoặc nhiều chữ cái để đặt màu",
    languageLabel: "Ngôn ngữ",
    enableChatColours: "Bật màu chat",
    autoApplyTitle: "Áp dụng tự động",
    autoApplyDesc:
      "Kéo file PlayerData.txt của bạn vào đây và tải xuống phiên bản đã sửa đổi với tên mới của bạn. Hãy sao lưu file PlayerData.txt hiện có trước, sau đó thay thế bằng file đã tải xuống.",
    autoApplyPrivacy:
      "Mọi thứ chạy cục bộ trong trình duyệt của bạn — dữ liệu của bạn không bao giờ rời khỏi máy tính.",
    manualMethodTitle: "Chỉnh sửa file thủ công",
    fileApplyDropZone: "Thả file PlayerData.txt của bạn vào đây",
    fileApplyDropHint: "hoặc nhấp để duyệt",
    fileApplyNoCode: "Hãy cấu hình màu tên của bạn trước, sau đó quay lại đây.",
    fileApplyNoName:
      "Không tìm thấy trường Name trong file này. Hãy đảm bảo đây là file PlayerData.txt hợp lệ.",
    fileApplyReadError: "Không thể đọc file. Vui lòng thử lại.",
    fileApplyLoaded: "Đã tải file",
    fileApplyOldName: "Tên hiện tại",
    fileApplyDownload: "Tải xuống file đã sửa đổi",
    fileApplyDownloaded: "Đã tải xuống!",
    fileApplyDownloadHint:
      "Thay thế PlayerData.txt gốc bằng file đã tải xuống, sau đó khởi động trò chơi.",
    fileApplyReset: "Đặt lại",
    footerFanCreation:
      "Đây là sáng tạo của người hâm mộ và không liên kết chính thức với On-Together hoặc GigaPuff.",
    footerInspired: "Lấy cảm hứng từ",
    footerGuideLink: "Hướng dẫn của Ranch",
    footerSourceCode: "Mã nguồn",
    fileApplyWaitingForName:
      "Đặt màu tên của bạn ở trên, sau đó quay lại để tải xuống file đã cập nhật.",
    boldLabel: "Đậm",
    chatBoldLabel: "Đậm trò chuyện",
    italicLabel: "Nghiêng",
    chatItalicLabel: "Nghiêng trò chuyện",
    nameLoadHint:
      'Bạn có thể tải tên hiển thị hiện tại bằng cách kéo thả tệp PlayerData vào Trình áp dụng tự động trong phần "Cách áp dụng" bên dưới.',
    nameOverrideTitle: "Ghi đè tên hiện tại?",
    nameOverrideDesc:
      "Bạn đã nhập tên. Bạn có muốn thay thế bằng tên từ file PlayerData không?",
    nameOverrideConfirm: "Thay thế",
    nameOverrideCancel: "Giữ hiện tại",
    footerKofi: "Hỗ trợ trên Ko-fi",
  },
};
