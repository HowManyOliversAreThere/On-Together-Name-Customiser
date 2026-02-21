export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.substring(0, 2), 16),
    parseInt(clean.substring(2, 4), 16),
    parseInt(clean.substring(4, 6), 16),
  ];
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((v) =>
        Math.round(Math.max(0, Math.min(255, v)))
          .toString(16)
          .padStart(2, "0")
      )
      .join("")
  );
}

export function interpolateColour(
  colour1: string,
  colour2: string,
  t: number
): string {
  const [r1, g1, b1] = hexToRgb(colour1);
  const [r2, g2, b2] = hexToRgb(colour2);
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
}

export function generateGradient(
  startColour: string,
  endColour: string,
  steps: number
): string[] {
  if (steps <= 1) return [startColour];
  return Array.from({ length: steps }, (_, i) =>
    interpolateColour(startColour, endColour, i / (steps - 1))
  );
}

export function getContrastColour(hex: string): string {
  const [r, g, b] = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
