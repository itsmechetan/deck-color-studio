import { ThemeColors } from "./decks";

export interface ColorMapping {
  colorMappings: Record<string, keyof ThemeColors>;
}

export function recolorSvg(
  svgContent: string,
  colors: ThemeColors,
  mapping: ColorMapping
): string {
  let result = svgContent;

  for (const [originalColor, themeKey] of Object.entries(mapping.colorMappings)) {
    // Create case-insensitive regex for the color
    const regex = new RegExp(originalColor, "gi");
    const newColor = colors[themeKey];
    if (newColor) {
      result = result.replace(regex, newColor);
    }
  }

  return result;
}

export async function loadColorMapping(slug: string): Promise<ColorMapping | null> {
  try {
    const response = await fetch(`/decks/${slug}/colors.json`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export async function loadSvgContent(slug: string, slideNumber: number): Promise<string | null> {
  try {
    const paddedNumber = slideNumber.toString().padStart(2, "0");
    const response = await fetch(`/decks/${slug}/preview-${paddedNumber}.svg`);
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}
