const translations: Record<string, string> = {
  appTitle: "Trình tạo kiểu tên cho On-Together",
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
  randomColour: "Ngẫu nhiên",
  gradientLabel: "Gradient",
  gradientStart: "Bắt đầu",
  gradientEnd: "Kết thúc",
  swapGradient: "Đổi màu",
  applyGradient: "Áp dụng gradient",
  singleColourTitle: "Màu đơn",
  gradient2Title: "Gradient 2 màu",
  gradient3Title: "Gradient 3 màu",
  gradientMid: "Giữa",
  chatStylingTitle: "Kiểu chat",
  colonColourLabel: "Màu dấu hai chấm",
  colonColourHint: "Màu của dấu hai chấm (:) hiển thị sau tên bạn trong chat",
  messageColourLabel: "Màu tin nhắn",
  messageColourHint: "Màu tin nhắn chat của bạn",
  previewTitle: "Xem trước",
  previewSampleMessage: "Xin chào mọi người!",
  previewBgLabel: "Nền:",
  previewBgDefault: "Mặc định",
  previewBgGrass: "Cỏ",
  previewBgRoad: "Đường",
  previewBgWater: "Nước",
  previewBgWood: "Gỗ",
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
  faqTitle: "Câu hỏi thường gặp",
  faqCharLimitQ: "Tôi có thể sử dụng trực tiếp ô tên trong game không?",
  faqCharLimitA:
    "Trường tên trong game giới hạn 40 ký tự, sẽ hết rất nhanh khi bạn bắt đầu thêm thẻ màu. Nếu mã được tạo vượt quá giới hạn đó, bạn cần sử dụng một trong các phương pháp từ phần \u00ABCách áp dụng\u00BB ở trên.",
  faqCantTypeQ:
    "Tôi đang cố gõ tên vào ô tên trong game nhưng chỉ gõ được vài ký tự!",
  faqCantTypeA:
    "Điều này xảy ra khi các thẻ kiểu dáng ẩn vẫn còn trong ô văn bản \u2014 bạn không thể xóa chúng bằng phím Backspace. Nhấn Ctrl+A (hoặc Cmd+A trên Mac) để chọn tất cả, sau đó xóa. Sau đó bạn sẽ có thể gõ đủ 40 ký tự một lần nữa.",
  faqHowWorksQ: "Kiểu dáng tên này hoạt động như thế nào?",
  faqHowWorksA:
    "On-Together được xây dựng bằng Unity và sử dụng TextMeshPro để hiển thị văn bản. TextMeshPro hỗ trợ Rich Text Tag (tương tự HTML) có thể nhúng vào văn bản để thay đổi màu sắc, thêm đậm/nghiêng và nhiều hơn. Công cụ này tạo các thẻ đó cho bạn.",
  undoButton: "Hoàn tác",
  redoButton: "Làm lại",
};

export default translations;
