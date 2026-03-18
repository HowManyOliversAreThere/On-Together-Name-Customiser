const translations: Record<string, string> = {
  appTitle: "Стилізатор імені для On-Together",
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
  randomColour: "Випадковий",
  gradientLabel: "Градієнт",
  gradientStart: "Початок",
  gradientEnd: "Кінець",
  swapGradient: "Поміняти кольори",
  applyGradient: "Застосувати градієнт",
  singleColourTitle: "Один колір",
  gradient2Title: "2-колірний градієнт",
  gradient3Title: "3-колірний градієнт",
  gradientMid: "Середина",
  chatStylingTitle: "Стиль чату",
  colonColourLabel: "Колір двокрапки",
  colonColourHint: "Колір двокрапки (:) після вашого імені в чаті",
  messageColourLabel: "Колір повідомлення",
  messageColourHint: "Колір ваших повідомлень у чаті",
  previewTitle: "Попередній перегляд",
  previewSampleMessage: "Привіт усім!",
  previewBgLabel: "Фон:",
  previewBgDefault: "За замовчуванням",
  previewBgGrass: "Трава",
  previewBgRoad: "Дорога",
  previewBgWater: "Вода",
  previewBgWood: "Дерево",
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
  tipBackup: "Завжди робіть резервну копію PlayerData.txt перед редагуванням.",
  tipEscapeQuotes:
    "Якщо ім'я містить лапки, екрануйте їх зворотним слешем (\\\") у JSON-файлі.",
  enterName: "Введіть ім'я вище, щоб почати",
  noLettersSelected: "Виберіть одну або кілька літер для встановлення кольору",
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
  fileApplyNoCode: "Спочатку налаштуйте кольори імені, потім поверніться сюди.",
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
  faqTitle: "Часті питання",
  faqCharLimitQ: "Чи можна просто використати поле імені в грі?",
  faqCharLimitA:
    "Поле імені в грі обмежене 40 символами, які дуже швидко вичерпуються після додавання кольорових тегів. Якщо згенерований код перевищує цей ліміт, потрібно використати один із методів з розділу \u00ABЯк застосувати\u00BB вище.",
  faqCantTypeQ:
    "Я намагаюсь ввести своє ім'я в поле імені в грі, але можу ввести лише кілька символів!",
  faqCantTypeA:
    "Це трапляється, коли в текстовому полі залишаються невидимі теги стилю \u2014 їх не можна видалити просто клавішею Backspace. Натисніть Ctrl+A (або Cmd+A на Mac), щоб виділити все, потім видаліть. Після цього ви зможете ввести всі 40 символів знову.",
  faqHowWorksQ: "Як працює це стильоване імені?",
  faqHowWorksA:
    "On-Together розроблено на Unity і використовує TextMeshPro для рендерингу тексту. TextMeshPro підтримує Rich Text теги (подібні до HTML), які можна вбудовувати в текст для зміни кольорів, додавання жирного/курсиву тощо. Цей інструмент генерує ці теги для вас.",
};

export default translations;
