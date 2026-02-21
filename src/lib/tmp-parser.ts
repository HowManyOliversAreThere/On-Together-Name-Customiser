/**
 * Parser for TextMeshPro (TMP) rich text name values from PlayerData.txt.
 *
 * New format (per-letter bold/italic + chat formatting):
 *   </color><color=#C1><b>F</b></color><color=#C2>u</color>...<color=#COLON><color=#MSG><b><i>
 *
 * Legacy format (wrapping bold/italic):
 *   </color><b><color=#C1>F</color><color=#C2>u</color>...<color=#COLON><color=#MSG></b>
 *
 * The parser extracts:
 * - Individual coloured letters with per-letter bold/italic
 * - Trailing unclosed `<b>` / `<i>` tags as chat formatting
 * - Trailing unclosed `<color=#HEX>` tags as colonColour / messageColour
 *
 * Returns `null` when the input is blank, contains unrecognised tag formats,
 * or otherwise can't be meaningfully previewed.
 */

export interface ParsedTmpName {
  letters: { char: string; colour: string; bold: boolean; italic: boolean }[];
  chatBold: boolean;
  chatItalic: boolean;
  colonColour: string | null;
  messageColour: string | null;
}

/** Hex colour pattern used by TMP: #RRGGBB or #RRGGBBAA */
const HEX_COLOUR = "#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?";

/**
 * Parse a TMP rich text name value into structured preview data.
 *
 * Returns `null` when the input can't be reliably previewed (blank, contains
 * unrecognised tags, malformed markup, named colours like `<color="red">`,
 * etc.).
 */
export function parseTmpName(input: string): ParsedTmpName | null {
  if (!input || !input.trim()) return null;

  // --- Phase 1: strip the leading </color> that closes the game's auto-tag ---
  let s = input;
  if (s.startsWith("</color>")) {
    s = s.slice("</color>".length);
  }

  // --- Phase 2: detect and strip legacy formatting wrappers (<b>, <i>) ---
  // Old format wrapped the entire content in <b>...</b> and/or <i>...</i>
  let legacyBold = false;
  let legacyItalic = false;
  let changed = true;
  while (changed) {
    changed = false;
    const boldMatch = s.match(/^<b>([\s\S]*)<\/b>$/i);
    if (boldMatch) {
      legacyBold = true;
      s = boldMatch[1];
      changed = true;
    }
    const italicMatch = s.match(/^<i>([\s\S]*)<\/i>$/i);
    if (italicMatch) {
      legacyItalic = true;
      s = italicMatch[1];
      changed = true;
    }
  }

  // --- Phase 3: extract colour-tagged letters and trailing unclosed tags ---
  const closedTagRegex = new RegExp(
    `<color=(${HEX_COLOUR})>([\\s\\S]*?)</color>`,
    "gi"
  );
  const unclosedTagRegex = new RegExp(`<color=(${HEX_COLOUR})>`, "gi");

  const letters: {
    char: string;
    colour: string;
    bold: boolean;
    italic: boolean;
  }[] = [];
  const trailingUnclosed: string[] = [];

  // Track what parts of the string are consumed by recognised tags.
  // Anything left over that isn't whitespace means we have unrecognised content.
  type Span = { start: number; end: number };
  const consumed: Span[] = [];

  // First pass: closed colour tags → letters (with per-letter bold/italic)
  let m;
  while ((m = closedTagRegex.exec(s)) !== null) {
    const colour = m[1];
    let text = m[2];

    // Detect per-letter bold/italic wrappers inside the colour tag content
    let perBold = false;
    let perItalic = false;

    // Check for <b>...</b> and <i>...</i> wrappers (any nesting order)
    let innerChanged = true;
    while (innerChanged) {
      innerChanged = false;
      const innerBold = text.match(/^<b>([\s\S]*)<\/b>$/i);
      if (innerBold) {
        perBold = true;
        text = innerBold[1];
        innerChanged = true;
      }
      const innerItalic = text.match(/^<i>([\s\S]*)<\/i>$/i);
      if (innerItalic) {
        perItalic = true;
        text = innerItalic[1];
        innerChanged = true;
      }
    }

    for (const char of text) {
      letters.push({
        char,
        colour,
        bold: perBold || legacyBold,
        italic: perItalic || legacyItalic,
      });
    }
    consumed.push({ start: m.index, end: m.index + m[0].length });
  }

  // Second pass: unclosed colour tags → colon/message colour
  // Only match those NOT already consumed by closed tags
  while ((m = unclosedTagRegex.exec(s)) !== null) {
    const alreadyConsumed = consumed.some(
      (span) => m!.index >= span.start && m!.index < span.end
    );
    if (!alreadyConsumed) {
      trailingUnclosed.push(m[1]);
      consumed.push({ start: m.index, end: m.index + m[0].length });
    }
  }

  // --- Phase 4: detect trailing unclosed <b> and <i> tags (chat formatting) ---
  let chatBold = legacyBold;
  let chatItalic = legacyItalic;
  const unclosedBoldRegex = /<b>/gi;
  const unclosedItalicRegex = /<i>/gi;

  while ((m = unclosedBoldRegex.exec(s)) !== null) {
    const alreadyConsumed = consumed.some(
      (span) => m!.index >= span.start && m!.index < span.end
    );
    if (!alreadyConsumed) {
      chatBold = true;
      consumed.push({ start: m.index, end: m.index + m[0].length });
    }
  }

  while ((m = unclosedItalicRegex.exec(s)) !== null) {
    const alreadyConsumed = consumed.some(
      (span) => m!.index >= span.start && m!.index < span.end
    );
    if (!alreadyConsumed) {
      chatItalic = true;
      consumed.push({ start: m.index, end: m.index + m[0].length });
    }
  }

  // --- Phase 5: check for unrecognised leftover content ---
  // Sort consumed spans and check gaps for non-whitespace content
  consumed.sort((a, b) => a.start - b.start);
  let cursor = 0;
  for (const span of consumed) {
    const gap = s.slice(cursor, span.start);
    if (gap.replace(/\s/g, "").length > 0) {
      // Unrecognised content between tags — can't preview reliably
      return null;
    }
    cursor = span.end;
  }
  // Check trailing content after last consumed span
  const trailing = s.slice(cursor);
  if (trailing.replace(/\s/g, "").length > 0) {
    return null;
  }

  // --- Phase 6: must have at least some letters to preview ---
  if (letters.length === 0) {
    return null;
  }

  // --- Phase 7: assign colon and message colours ---
  let colonColour: string | null = null;
  let messageColour: string | null = null;

  if (trailingUnclosed.length >= 2) {
    colonColour = trailingUnclosed[trailingUnclosed.length - 2];
    messageColour = trailingUnclosed[trailingUnclosed.length - 1];
  } else if (trailingUnclosed.length === 1) {
    colonColour = trailingUnclosed[0];
  }

  return { letters, chatBold, chatItalic, colonColour, messageColour };
}
