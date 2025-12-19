import JSZip from "jszip";
import { Deck, ThemeColors } from "./decks";
import { generateThemeXml } from "./generateThemeXml";

// Template path for the master PPTX with theme-aware elements
const TEMPLATE_PATH = "/templates/pitch-deck-template.pptx";

export async function generatePptx(
  deck: Deck,
  colors: ThemeColors
): Promise<void> {
  // Fetch the existing template
  const templateResponse = await fetch(TEMPLATE_PATH);
  if (!templateResponse.ok) {
    throw new Error("Failed to load PowerPoint template");
  }
  const templateBuffer = await templateResponse.arrayBuffer();
  
  // Load the template with JSZip
  const zip = await JSZip.loadAsync(templateBuffer);
  
  // Generate custom theme XML with user's colors
  const themeName = `${deck.title} - ColorSlide`;
  const themeXml = generateThemeXml(themeName, colors);
  
  // Replace the theme file in the PPTX
  zip.file("ppt/theme/theme1.xml", themeXml);
  
  // Generate the modified PPTX
  const modifiedBlob = await zip.generateAsync({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  });
  
  // Trigger download
  const fileName = `${deck.title} - ColorSlide.pptx`;
  const url = URL.createObjectURL(modifiedBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
