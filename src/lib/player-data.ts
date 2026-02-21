/**
 * Utilities for reading and writing the "Name" field in PlayerData.txt.
 *
 * The file is a single-line JSON blob.  The "Name" value is a JSON-encoded
 * string that may itself contain escaped quotes (e.g. `\"Tony\"`).
 *
 * We operate on the raw text rather than parsing / re-serialising the entire
 * JSON, because the game may store values that don't round-trip cleanly
 * through a generic JSON serialiser (e.g. float precision), and we must not
 * alter anything other than the name.
 */

/**
 * Extract the raw Name value (unescaped) from a PlayerData.txt string.
 *
 * Returns `null` when the field cannot be found.
 */
export function extractName(fileContent: string): string | null {
  // Match "Name" followed by optional whitespace, a colon, optional
  // whitespace, and a JSON string value. The JSON string is everything
  // between the outer quotes, allowing for escaped characters.
  const match = fileContent.match(/"Name"\s*:\s*"((?:[^"\\]|\\.)*)"/);
  if (!match) return null;
  // Un-escape the JSON string value
  return match[1].replace(/\\(.)/g, "$1");
}

/**
 * Replace the Name value in a PlayerData.txt string.
 *
 * `newName` is the *raw* value (the new tag string) — it will be
 * JSON-escaped before being written into the file content.
 *
 * Returns the modified file string, or `null` if the Name field wasn't found.
 */
export function replaceName(
  fileContent: string,
  newName: string
): string | null {
  // JSON-escape the new name: backslash-escape `"` and `\`
  const escaped = newName.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  // Use the same regex to locate the Name field and replace its value
  const regex = /"Name"\s*:\s*"(?:[^"\\]|\\.)*"/;
  if (!regex.test(fileContent)) return null;

  return fileContent.replace(regex, `"Name":"${escaped}"`);
}
