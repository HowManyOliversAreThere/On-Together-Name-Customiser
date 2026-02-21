export interface GenerateTagsOptions {
  name: string;
  letterColours: string[];
  letterBold?: boolean[];
  letterItalic?: boolean[];
  colonColour: string | null;
  messageColour: string | null;
  chatBold?: boolean;
  chatItalic?: boolean;
}

export function generateTags(options: GenerateTagsOptions): string {
  const {
    name,
    letterColours,
    letterBold = [],
    letterItalic = [],
    colonColour,
    messageColour,
    chatBold = false,
    chatItalic = false,
  } = options;
  if (!name) return "";

  // Start by closing the game's auto-applied colour tag
  let result = "</color>";

  // Group consecutive letters with the same colour+formatting for efficiency
  const groups: {
    colour: string;
    bold: boolean;
    italic: boolean;
    text: string;
  }[] = [];
  for (let i = 0; i < name.length; i++) {
    const colour = (letterColours[i] || "#FFFFFF").toUpperCase();
    const bold = letterBold[i] ?? false;
    const italic = letterItalic[i] ?? false;
    const last = groups.length > 0 ? groups[groups.length - 1] : null;
    if (
      last &&
      last.colour === colour &&
      last.bold === bold &&
      last.italic === italic
    ) {
      last.text += name[i];
    } else {
      groups.push({ colour, bold, italic, text: name[i] });
    }
  }

  const hasExtras = colonColour !== null || messageColour !== null;

  for (let i = 0; i < groups.length; i++) {
    const { colour, bold, italic, text } = groups[i];
    const isLast = i === groups.length - 1;

    result += `<color=${colour}>`;
    if (bold) result += "<b>";
    if (italic) result += "<i>";
    result += text;
    if (italic) result += "</i>";
    if (bold) result += "</b>";

    // Close every group except the last one (unless we have extras)
    // The game auto-closes the last tag, so we only need to close it
    // when we're adding message/colon colour tags after
    if (!isLast || hasExtras) {
      result += "</color>";
    }
  }

  // Add message colour (outer tag - stays open, colours the message text)
  if (messageColour) {
    result += `<color=${messageColour.toUpperCase()}>`;
  }

  // Add colon colour (inner tag - game's </color> closes this one)
  if (colonColour) {
    result += `<color=${colonColour.toUpperCase()}>`;
  }

  // Chat formatting — unclosed tags that affect colon + message text
  if (chatBold) result += "<b>";
  if (chatItalic) result += "<i>";

  return result;
}
