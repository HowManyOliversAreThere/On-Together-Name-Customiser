const translations: Record<string, string> = {
  appTitle: "On-Together İsim Biçimlendirici",
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
  randomColour: "Rastgele",
  gradientLabel: "Gradyan",
  gradientStart: "Başlangıç",
  gradientEnd: "Bitiş",
  swapGradient: "Renkleri değiştir",
  applyGradient: "Gradyan Uygula",
  singleColourTitle: "Tek Renk",
  gradient2Title: "2 Renkli Gradyan",
  gradient3Title: "3 Renkli Gradyan",
  gradientMid: "Orta",
  chatStylingTitle: "Sohbet Stili",
  colonColourLabel: "İki Nokta Rengi",
  colonColourHint:
    "Sohbette adınızdan sonra gösterilen iki nokta (:) üst üste rengi",
  messageColourLabel: "Mesaj Rengi",
  messageColourHint: "Sohbet mesajlarınızın rengi",
  previewTitle: "Önizleme",
  previewSampleMessage: "Herkese merhaba!",
  previewBgLabel: "Arka plan:",
  previewBgDefault: "Varsayılan",
  previewBgGrass: "Çim",
  previewBgRoad: "Yol",
  previewBgWater: "Su",
  previewBgWood: "Ahşap",
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
  tipBackup: "Düzenlemeden önce her zaman PlayerData.txt'nizin yedeğini alın.",
  tipEscapeQuotes:
    'Adınız tırnak işaretleri içeriyorsa, JSON dosyasında ters eğik çizgi ile kaçırın (\\").',
  enterName: "Başlamak için yukarıya bir ad girin",
  noLettersSelected: "Renklerini ayarlamak için bir veya daha fazla harf seçin",
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
  faqTitle: "Sıkça Sorulan Sorular",
  faqCharLimitQ: "Oyun içindeki isim kutusunu doğrudan kullanabilir miyim?",
  faqCharLimitA:
    "Oyun içi isim alanı 40 karakterle sınırlıdır ve renk etiketleri eklemeye başlayınca bu çok hızlı tükenir. Oluşturulan kod bu sınırı aşıyorsa, yukarıdaki \u00ABNasıl Uygulanır\u00BB bölümündeki yöntemlerden birini kullanmanız gerekir.",
  faqCantTypeQ:
    "Oyun içi isim kutusuna ismimi yazmaya çalışıyorum ama yalnızca birkaç karakter yazabiliyorum!",
  faqCantTypeA:
    "Bu, metin kutusunda görünmez stil etiketlerinin kalmasından kaynaklanır \u2014 bunları yalnızca Backspace ile silemezsiniz. Ctrl+A (veya Mac'te Cmd+A) tuşlayarak hepsini seçin, ardından silin. Bundan sonra tekrar 40 karakterin tamamını yazabilmeniz gerekir.",
  faqHowWorksQ: "Bu isim stillendirmesi nasıl çalışıyor?",
  faqHowWorksA:
    "On-Together, Unity ile geliştirilmiştir ve metin oluşturma için TextMeshPro kullanır. TextMeshPro, metne gömülebilen Rich Text Etiketlerini (HTML'ye benzer) destekler; renk değiştirme, kalın/italik ekleme ve daha fazlasını sağlar. Bu araç bu etiketleri sizin için oluşturur.",
};

export default translations;
