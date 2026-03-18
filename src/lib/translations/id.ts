const translations: Record<string, string> = {
  appTitle: "Penata Gaya Nama untuk On-Together",
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
  randomColour: "Acak",
  gradientLabel: "Gradien",
  gradientStart: "Mulai",
  gradientEnd: "Akhir",
  swapGradient: "Tukar warna",
  applyGradient: "Terapkan Gradien",
  singleColourTitle: "Warna Tunggal",
  gradient2Title: "Gradien 2 Warna",
  gradient3Title: "Gradien 3 Warna",
  gradientMid: "Tengah",
  chatStylingTitle: "Gaya Chat",
  colonColourLabel: "Warna Titik Dua",
  colonColourHint:
    "Warna titik dua (:) yang ditampilkan setelah nama Anda di chat",
  messageColourLabel: "Warna Pesan",
  messageColourHint: "Warna pesan chat Anda",
  previewTitle: "Pratinjau",
  previewSampleMessage: "Halo semuanya!",
  previewBgLabel: "Latar belakang:",
  previewBgDefault: "Default",
  previewBgGrass: "Rumput",
  previewBgRoad: "Jalan",
  previewBgWater: "Air",
  previewBgWood: "Kayu",
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
  stepBackup: "Buat cadangan file (misal salin sebagai PlayerData-backup.txt).",
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
  faqTitle: "Pertanyaan yang Sering Diajukan",
  faqCharLimitQ: "Bisakah saya langsung menggunakan kotak nama di dalam game?",
  faqCharLimitA:
    "Kolom nama dalam game dibatasi hingga 40 karakter, yang sangat cepat habis ketika Anda mulai menambahkan tag warna. Jika kode yang dihasilkan melebihi batas tersebut, Anda perlu menggunakan salah satu metode dari bagian \u00ABCara Menerapkan\u00BB di atas.",
  faqCantTypeQ:
    "Saya mencoba mengetik nama saya di kotak nama game tetapi hanya bisa mengetik beberapa karakter!",
  faqCantTypeA:
    "Ini terjadi ketika tag gaya yang tidak terlihat masih ada di kotak teks \u2014 Anda tidak bisa menghapusnya hanya dengan menekan backspace. Tekan Ctrl+A (atau Cmd+A di Mac) untuk memilih semua, lalu hapus. Setelah itu Anda seharusnya bisa mengetik 40 karakter penuh lagi.",
  faqHowWorksQ: "Bagaimana cara kerja penataan gaya nama ini?",
  faqHowWorksA:
    "On-Together dibangun dengan Unity dan menggunakan TextMeshPro untuk rendering teks. TextMeshPro mendukung Rich Text Tag (mirip HTML) yang dapat disisipkan dalam teks untuk mengubah warna, menambah tebal/miring, dan lainnya. Alat ini menghasilkan tag tersebut untuk Anda.",
};

export default translations;
