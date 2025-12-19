import PptxGenJS from "pptxgenjs";
import JSZip from "jszip";
import { Deck, ThemeColors } from "./decks";
import { generateThemeXml } from "./generateThemeXml";

/**
 * Load a PPTX template and inject custom theme colors
 */
async function generateFromTemplate(
  deck: Deck,
  colors: ThemeColors
): Promise<Blob> {
  const templatePath = `/decks/${deck.slug}/template.pptx`;
  const response = await fetch(templatePath);
  if (!response.ok) {
    throw new Error(`Failed to load template: ${templatePath}`);
  }
  const templateBuffer = await response.arrayBuffer();
  
  const zip = await JSZip.loadAsync(templateBuffer);
  const themeName = `${deck.title} - ColorSlide`;
  const themeXml = generateThemeXml(themeName, colors);
  zip.file("ppt/theme/theme1.xml", themeXml);
  
  return await zip.generateAsync({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  });
}

/**
 * Generate a PPTX from scratch with theme-aware colors
 */
async function generateFromScratch(
  deck: Deck,
  colors: ThemeColors
): Promise<Blob> {
  const pptx = new PptxGenJS();
  pptx.author = "ColorSlide";
  pptx.title = deck.title;
  pptx.subject = deck.description;
  pptx.company = "ColorSlide";

  const hexToRgb = (hex: string) => hex.replace("#", "");

  const dk1 = hexToRgb(colors.dk1);
  const lt1 = hexToRgb(colors.lt1);
  const dk2 = hexToRgb(colors.dk2);
  const accent1 = hexToRgb(colors.accent1);
  const accent2 = hexToRgb(colors.accent2);
  const accent3 = hexToRgb(colors.accent3);
  const accent4 = hexToRgb(colors.accent4);
  const accent5 = hexToRgb(colors.accent5);
  const accent6 = hexToRgb(colors.accent6);
  const hlink = hexToRgb(colors.hlink);

  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.background = { color: lt1 };
  slide1.addShape("rect", { x: 0, y: 0, w: "100%", h: 1.5, fill: { color: accent1, transparency: 90 } });
  slide1.addText(deck.title, { x: 0.5, y: 2.5, w: 6, h: 1, fontSize: 44, fontFace: "Arial", bold: true, color: accent1 });
  slide1.addText(deck.description, { x: 0.5, y: 3.5, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: dk1 });
  slide1.addShape("rect", { x: 0.5, y: 4.2, w: 1.8, h: 0.45, fill: { color: accent2 } });

  // Slide 2: Agenda
  const slide2 = pptx.addSlide();
  slide2.background = { color: lt1 };
  slide2.addShape("rect", { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: accent1 } });
  slide2.addText("Agenda", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
  ["Introduction", "Key Insights", "Data Analysis", "Recommendations", "Next Steps"].forEach((item, i) => {
    const accentColors = [accent1, accent2, accent3, accent4, accent5];
    slide2.addShape("rect", { x: 0.5, y: 1.5 + i * 0.8, w: 0.3, h: 0.3, fill: { color: accentColors[i] } });
    slide2.addText(item, { x: 1, y: 1.5 + i * 0.8, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: dk1 });
  });

  // Slide 3: Chart
  const slide3 = pptx.addSlide();
  slide3.background = { color: lt1 };
  slide3.addText("Key Metrics", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
  const chartColors = [accent1, accent2, accent3, accent4, accent5, accent6];
  [25, 40, 65, 85, 70, 55].forEach((val, i) => {
    const height = (val / 100) * 3;
    slide3.addShape("rect", { x: 0.8 + i * 1.3, y: 4.5 - height, w: 0.9, h: height, fill: { color: chartColors[i] } });
  });

  // Slide 4: Three Columns
  const slide4 = pptx.addSlide();
  slide4.background = { color: lt1 };
  slide4.addText("Our Approach", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
  [{ t: "Discovery", c: accent1 }, { t: "Strategy", c: accent2 }, { t: "Execution", c: accent3 }].forEach((col, i) => {
    slide4.addShape("rect", { x: 0.5 + i * 3.1, y: 1.3, w: 2.9, h: 3.5, fill: { color: col.c, transparency: 92 } });
    slide4.addShape("ellipse", { x: 1.2 + i * 3.1, y: 1.6, w: 1.3, h: 1.3, fill: { color: col.c, transparency: 70 } });
    slide4.addText(col.t, { x: 0.7 + i * 3.1, y: 3.2, w: 2.5, h: 0.5, fontSize: 18, fontFace: "Arial", bold: true, color: dk1, align: "center" });
  });

  // Slide 5: Quote
  const slide5 = pptx.addSlide();
  slide5.background = { color: lt1 };
  slide5.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { color: accent1, transparency: 97 } });
  slide5.addText("\"", { x: 0.5, y: 1, w: 1, h: 1.5, fontSize: 120, fontFace: "Georgia", color: accent1 });
  slide5.addText("Innovation distinguishes between a leader and a follower.", { x: 1.5, y: 2, w: 7, h: 1.5, fontSize: 28, fontFace: "Arial", italic: true, color: dk1 });
  slide5.addText("- Steve Jobs", { x: 1.7, y: 3.8, w: 3, h: 0.3, fontSize: 16, fontFace: "Arial", bold: true, color: accent1 });

  // Slide 6: Timeline
  const slide6 = pptx.addSlide();
  slide6.background = { color: lt1 };
  slide6.addText("Roadmap", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
  slide6.addShape("rect", { x: 0.5, y: 2.8, w: 9, h: 0.05, fill: { color: accent1, transparency: 70 } });
  [accent1, accent2, accent3, accent4, accent5].forEach((c, i) => {
    slide6.addShape("ellipse", { x: 0.8 + i * 1.9, y: 2.6, w: 0.4, h: 0.4, fill: { color: c } });
    slide6.addShape("rect", { x: 0.5 + i * 1.9, y: i % 2 === 0 ? 1.4 : 3.2, w: 1.6, h: 0.8, fill: { color: c, transparency: 90 } });
    slide6.addText(`Phase ${i + 1}`, { x: 0.6 + i * 1.9, y: i % 2 === 0 ? 1.5 : 3.3, w: 1.4, h: 0.3, fontSize: 11, fontFace: "Arial", bold: true, color: c });
  });

  // Slide 7: Team
  const slide7 = pptx.addSlide();
  slide7.background = { color: lt1 };
  slide7.addText("Our Team", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
  [{ n: "John Smith", r: "CEO", c: accent1 }, { n: "Sarah Lee", r: "CTO", c: accent2 }, { n: "Mike Chen", r: "CFO", c: accent3 }, { n: "Lisa Wang", r: "COO", c: accent4 }].forEach((m, i) => {
    slide7.addShape("rect", { x: 0.5 + i * 2.4, y: 1.3, w: 2.2, h: 3.2, fill: { color: m.c, transparency: 92 } });
    slide7.addShape("ellipse", { x: 1 + i * 2.4, y: 1.6, w: 1.2, h: 1.2, fill: { color: m.c, transparency: 80 } });
    slide7.addText(m.n, { x: 0.6 + i * 2.4, y: 3, w: 2, h: 0.4, fontSize: 14, fontFace: "Arial", bold: true, color: dk1, align: "center" });
    slide7.addText(m.r, { x: 0.6 + i * 2.4, y: 3.4, w: 2, h: 0.3, fontSize: 12, fontFace: "Arial", color: m.c, align: "center" });
  });

  // Slide 8: Thank You
  const slide8 = pptx.addSlide();
  slide8.background = { color: accent1 };
  slide8.addShape("ellipse", { x: -1.5, y: -1.5, w: 4, h: 4, fill: { color: lt1, transparency: 95 } });
  slide8.addShape("ellipse", { x: 7, y: 3, w: 5, h: 5, fill: { color: lt1, transparency: 95 } });
  slide8.addText("Thank You", { x: 0, y: 2, w: "100%", h: 1, fontSize: 52, fontFace: "Arial", bold: true, color: lt1, align: "center" });
  slide8.addText("Questions? Let's connect.", { x: 0, y: 3, w: "100%", h: 0.5, fontSize: 18, fontFace: "Arial", color: lt1, align: "center" });
  slide8.addText("contact@company.com", { x: 0, y: 4.2, w: "100%", h: 0.4, fontSize: 14, fontFace: "Arial", color: hlink, align: "center" });

  // Additional slides
  for (let i = 8; i < deck.slideCount; i++) {
    const slide = pptx.addSlide();
    slide.background = { color: lt1 };
    slide.addText(`Slide ${i + 1}`, { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: accent1 });
    slide.addShape("rect", { x: 0.5, y: 1.3, w: 9, h: 3.5, fill: { color: chartColors[i % 6], transparency: 92 } });
    slide.addText("Custom content area", { x: 0.5, y: 2.5, w: 9, h: 0.5, fontSize: 16, fontFace: "Arial", color: dk2, align: "center" });
  }

  const buffer = await pptx.write({ outputType: "arraybuffer" }) as ArrayBuffer;
  
  // Inject theme colors
  const zip = await JSZip.loadAsync(buffer);
  const themeName = `${deck.title} - ColorSlide`;
  const themeXml = generateThemeXml(themeName, colors);
  zip.file("ppt/theme/theme1.xml", themeXml);
  
  return await zip.generateAsync({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  });
}

/**
 * Main export function - uses template if available, otherwise generates from scratch
 */
export async function generatePptx(
  deck: Deck,
  colors: ThemeColors
): Promise<void> {
  let blob: Blob;
  
  if (deck.hasTemplate) {
    blob = await generateFromTemplate(deck, colors);
  } else {
    blob = await generateFromScratch(deck, colors);
  }
  
  // Trigger download
  const fileName = `${deck.title} - ColorSlide.pptx`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
