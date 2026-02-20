export interface GenerateTagsOptions {
  name: string;
  letterColours: string[];
  colonColour: string | null;
  messageColour: string | null;
}

export function generateTags(options: GenerateTagsOptions): string {
  const { name, letterColours, colonColour, messageColour } = options;
  if (!name) return "";

  // Start by closing the game's auto-applied colour tag
  let result = "</color>";

  // Group consecutive letters with the same colour for efficiency
  const groups: { colour: string; text: string }[] = [];
  for (let i = 0; i < name.length; i++) {
    const colour = (letterColours[i] || "#FFFFFF").toUpperCase();
    if (groups.length > 0 && groups[groups.length - 1].colour === colour) {
      groups[groups.length - 1].text += name[i];
    } else {
      groups.push({ colour, text: name[i] });
    }
  }

  const hasExtras = colonColour !== null || messageColour !== null;

  for (let i = 0; i < groups.length; i++) {
    const { colour, text } = groups[i];
    const isLast = i === groups.length - 1;

    result += `<color=${colour}>${text}`;

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

  return result;
}
