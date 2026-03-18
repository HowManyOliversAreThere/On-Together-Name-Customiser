const translations: Record<string, string> = {
  appTitle: "On-Together用ネームスタイラー",
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
  randomColour: "ランダム",
  gradientLabel: "グラデーション",
  gradientStart: "開始",
  gradientEnd: "終了",
  swapGradient: "色を入れ替え",
  applyGradient: "グラデーションを適用",
  singleColourTitle: "単色",
  gradient2Title: "2色グラデーション",
  gradient3Title: "3色グラデーション",
  gradientMid: "中間",
  chatStylingTitle: "チャットスタイル",
  colonColourLabel: "コロンの色",
  colonColourHint: "チャットで名前の後に表示されるコロン（:）の色",
  messageColourLabel: "メッセージの色",
  messageColourHint: "チャットメッセージの色",
  previewTitle: "プレビュー",
  previewSampleMessage: "みなさん、こんにちは！",
  previewBgLabel: "背景：",
  previewBgDefault: "デフォルト",
  previewBgGrass: "草",
  previewBgRoad: "道",
  previewBgWater: "水",
  previewBgWood: "木",
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
  faqTitle: "よくある質問",
  faqCharLimitQ: "ゲーム内の名前欄をそのまま使えますか？",
  faqCharLimitA:
    "ゲーム内の名前欄は40文字に制限されており、カラータグを追加し始めるとすぐに上限に達します。生成されたコードがその制限を超える場合は、上の「適用方法」セクションのいずれかの方法を使用する必要があります。",
  faqCantTypeQ:
    "ゲーム内の名前欄に名前を入力しようとすると、数文字しか入力できません！",
  faqCantTypeA:
    "これはテキストボックスに見えないスタイルタグが残っているために起こります。バックスペースだけでは削除できません。Ctrl+A（Macの場合はCmd+A）ですべてを選択し、削除してください。その後、40文字すべて入力できるようになります。",
  faqHowWorksQ: "この名前スタイリングはどのように機能しますか？",
  faqHowWorksA:
    "On-TogetherはUnityで構築されており、テキストレンダリングにTextMeshProを使用しています。TextMeshProはリッチテキストタグ（HTMLに似たもの）をサポートしており、テキストに埋め込んで色の変更、太字/斜体の追加などが可能です。このツールはこれらのタグを自動生成します。",
  undoButton: "元に戻す",
  redoButton: "やり直す",
};

export default translations;
