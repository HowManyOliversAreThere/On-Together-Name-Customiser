const translations: Record<string, string> = {
  appTitle: "On-Together 네임 스타일러",
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
  randomColour: "랜덤",
  gradientLabel: "그라데이션",
  gradientStart: "시작",
  gradientEnd: "끝",
  swapGradient: "색상 바꾸기",
  applyGradient: "그라데이션 적용",
  singleColourTitle: "단색",
  gradient2Title: "2색 그라데이션",
  gradient3Title: "3색 그라데이션",
  gradientMid: "중간",
  chatStylingTitle: "채팅 스타일",
  colonColourLabel: "콜론 색상",
  colonColourHint: "채팅에서 이름 뒤에 표시되는 콜론(:)의 색상",
  messageColourLabel: "메시지 색상",
  messageColourHint: "채팅 메시지의 색상",
  previewTitle: "미리보기",
  previewSampleMessage: "안녕하세요!",
  previewBgLabel: "배경:",
  previewBgDefault: "기본",
  previewBgGrass: "잔디",
  previewBgRoad: "도로",
  previewBgWater: "물",
  previewBgWood: "나무",
  generatedCodeTitle: "생성된 코드",
  generatedCodeHint: '이것을 복사하여 PlayerData.txt의 "Name" 값으로 붙여넣기',
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
  faqTitle: "자주 묻는 질문",
  faqCharLimitQ: "게임 내 이름 입력란을 그냥 사용할 수 있나요?",
  faqCharLimitA:
    "게임 내 이름 필드는 40자로 제한되며, 색상 태그를 추가하기 시작하면 매우 빠르게 한도에 도달합니다. 생성된 코드가 해당 제한을 초과하면 위의 '적용 방법' 섹션에 있는 방법 중 하나를 사용해야 합니다.",
  faqCantTypeQ:
    "게임 내 이름 입력란에 이름을 입력하려고 하는데 몇 글자밖에 입력할 수 없어요!",
  faqCantTypeA:
    "이는 보이지 않는 스타일 태그가 텍스트 상자에 남아 있기 때문에 발생합니다. 백스페이스만으로는 제거할 수 없습니다. Ctrl+A (Mac에서는 Cmd+A)를 눌러 모두 선택한 다음 삭제하세요. 그러면 40자를 모두 입력할 수 있게 됩니다.",
  faqHowWorksQ: "이 이름 스타일링은 어떻게 작동하나요?",
  faqHowWorksA:
    "On-Together는 Unity로 제작되었으며 텍스트 렌더링에 TextMeshPro를 사용합니다. TextMeshPro는 텍스트에 삽입하여 색상 변경, 굵게/기울임 추가 등이 가능한 리치 텍스트 태그(HTML과 유사)를 지원합니다. 이 도구는 이러한 태그를 자동으로 생성합니다.",
};

export default translations;
