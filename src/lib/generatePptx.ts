import PptxGenJS from "pptxgenjs";
import { Deck } from "./decks";

export async function generatePptx(
  deck: Deck,
  colors: Record<string, string>
): Promise<void> {
  const pptx = new PptxGenJS();

  pptx.author = "ColorSlide";
  pptx.title = deck.title;
  pptx.subject = deck.description;
  pptx.company = "ColorSlide";

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? hex.replace("#", "") : "000000";
  };

  const primary = hexToRgb(colors.primary || "#E85D4C");
  const secondary = hexToRgb(colors.secondary || "#2D9596");
  const accent1 = hexToRgb(colors.accent1 || "#FFB347");
  const accent2 = hexToRgb(colors.accent2 || "#87CEEB");
  const background = hexToRgb(colors.background || "#FFFFFF");
  const textDark = hexToRgb(colors.textDark || "#1A1A2E");
  const textLight = hexToRgb(colors.textLight || "#FFFFFF");
  const success = hexToRgb(colors.success || "#4CAF50");

  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.background = { color: background };
  slide1.addShape("rect", { x: 0, y: 0, w: "100%", h: 1.5, fill: { color: primary, transparency: 90 } });
  slide1.addText(deck.title, { x: 0.5, y: 2.5, w: 6, h: 1, fontSize: 44, fontFace: "Arial", bold: true, color: primary });
  slide1.addText(deck.description, { x: 0.5, y: 3.5, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: textDark });

  // Slide 2: Agenda
  const slide2 = pptx.addSlide();
  slide2.background = { color: background };
  slide2.addShape("rect", { x: 0, y: 0, w: 0.1, h: "100%", fill: { color: primary } });
  slide2.addText("Agenda", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
  ["Introduction", "Key Insights", "Data Analysis", "Recommendations", "Next Steps"].forEach((item, i) => {
    slide2.addShape("rect", { x: 0.5, y: 1.5 + i * 0.8, w: 0.3, h: 0.3, fill: { color: i % 2 === 0 ? primary : secondary } });
    slide2.addText(item, { x: 1, y: 1.5 + i * 0.8, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: textDark });
  });

  // Slide 3: Chart
  const slide3 = pptx.addSlide();
  slide3.background = { color: background };
  slide3.addText("Key Metrics", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
  [25, 40, 65, 85].forEach((val, i) => {
    const height = (val / 100) * 3;
    slide3.addShape("rect", { x: 1 + i * 1.5, y: 4.5 - height, w: 1, h: height, fill: { color: [primary, secondary, accent1, accent2][i] } });
  });

  // Slide 4: Three Columns
  const slide4 = pptx.addSlide();
  slide4.background = { color: background };
  slide4.addText("Our Approach", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
  [{ t: "Discovery", c: primary }, { t: "Strategy", c: secondary }, { t: "Execution", c: accent1 }].forEach((col, i) => {
    slide4.addShape("rect", { x: 0.5 + i * 3.1, y: 1.3, w: 2.9, h: 3.5, fill: { color: col.c, transparency: 92 } });
    slide4.addShape("ellipse", { x: 1.2 + i * 3.1, y: 1.6, w: 1.3, h: 1.3, fill: { color: col.c, transparency: 70 } });
    slide4.addText(col.t, { x: 0.7 + i * 3.1, y: 3.2, w: 2.5, h: 0.5, fontSize: 18, fontFace: "Arial", bold: true, color: textDark, align: "center" });
  });

  // Slide 5: Quote
  const slide5 = pptx.addSlide();
  slide5.background = { color: background };
  slide5.addText("\"", { x: 0.5, y: 1, w: 1, h: 1.5, fontSize: 120, fontFace: "Georgia", color: primary });
  slide5.addText("Innovation distinguishes between a leader and a follower.", { x: 1.5, y: 2, w: 7, h: 1.5, fontSize: 28, fontFace: "Arial", italic: true, color: textDark });
  slide5.addText("- Steve Jobs", { x: 1.7, y: 3.8, w: 3, h: 0.3, fontSize: 16, fontFace: "Arial", bold: true, color: primary });

  // Slide 6: Timeline
  const slide6 = pptx.addSlide();
  slide6.background = { color: background };
  slide6.addText("Roadmap", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
  slide6.addShape("rect", { x: 0.5, y: 2.8, w: 9, h: 0.05, fill: { color: primary, transparency: 70 } });
  [primary, secondary, accent1, success].forEach((c, i) => {
    slide6.addShape("ellipse", { x: 1 + i * 2.2, y: 2.6, w: 0.4, h: 0.4, fill: { color: c } });
  });

  // Slide 7: Team
  const slide7 = pptx.addSlide();
  slide7.background = { color: background };
  slide7.addText("Our Team", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
  [{ n: "John Smith", r: "CEO", c: primary }, { n: "Sarah Lee", r: "CTO", c: secondary }, { n: "Mike Chen", r: "CFO", c: accent1 }, { n: "Lisa Wang", r: "COO", c: accent2 }].forEach((m, i) => {
    slide7.addShape("rect", { x: 0.5 + i * 2.4, y: 1.3, w: 2.2, h: 3.2, fill: { color: m.c, transparency: 92 } });
    slide7.addShape("ellipse", { x: 1 + i * 2.4, y: 1.6, w: 1.2, h: 1.2, fill: { color: m.c, transparency: 80 } });
    slide7.addText(m.n, { x: 0.6 + i * 2.4, y: 3, w: 2, h: 0.4, fontSize: 14, fontFace: "Arial", bold: true, color: textDark, align: "center" });
    slide7.addText(m.r, { x: 0.6 + i * 2.4, y: 3.4, w: 2, h: 0.3, fontSize: 12, fontFace: "Arial", color: m.c, align: "center" });
  });

  // Slide 8: Thank You
  const slide8 = pptx.addSlide();
  slide8.background = { color: primary };
  slide8.addText("Thank You", { x: 0, y: 2, w: "100%", h: 1, fontSize: 52, fontFace: "Arial", bold: true, color: textLight, align: "center" });
  slide8.addText("Questions? Let's connect.", { x: 0, y: 3, w: "100%", h: 0.5, fontSize: 18, fontFace: "Arial", color: textLight, align: "center" });

  // Generate remaining slides
  for (let i = 8; i < deck.slideCount; i++) {
    const slide = pptx.addSlide();
    slide.background = { color: background };
    slide.addText(`Slide ${i + 1}`, { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: primary });
    slide.addShape("rect", { x: 0.5, y: 1.3, w: 9, h: 3.5, fill: { color: [primary, secondary, accent1, accent2][i % 4], transparency: 92 } });
  }

  const fileName = `${deck.title} - ColorSlide.pptx`;
  await pptx.writeFile({ fileName });
}
