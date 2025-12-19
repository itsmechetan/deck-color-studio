import JSZip from "jszip";
import { ThemeColors } from "./decks";
import { generateThemeXml } from "./generateThemeXml";

export async function injectThemeColors(
  pptxBuffer: ArrayBuffer,
  themeName: string,
  colors: ThemeColors
): Promise<Blob> {
  const zip = await JSZip.loadAsync(pptxBuffer);
  
  // Generate custom theme1.xml with user colors
  const themeXml = generateThemeXml(themeName, colors);
  
  // Replace the theme file in the PPTX
  zip.file("ppt/theme/theme1.xml", themeXml);
  
  // Return the modified PPTX as a blob
  return await zip.generateAsync({ 
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  });
}
