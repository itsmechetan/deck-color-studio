import PptxGenJS from "pptxgenjs";
import { Deck, ThemeColors } from "./decks";
import { injectThemeColors } from "./injectThemeColors";

export async function generatePptx(
  deck: Deck,
  colors: ThemeColors
): Promise<void> {
  const pptx = new PptxGenJS();

  pptx.author = "ColorSlide";
  pptx.title = deck.title;
  pptx.subject = deck.description;
  pptx.company = "ColorSlide";

  // Slide 1: Title - uses theme colors via scheme references
  const slide1 = pptx.addSlide();
  slide1.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide1.addShape("rect", { x: 0, y: 0, w: "100%", h: 1.5, fill: { type: "solid", color: { type: "schemeColor", value: "accent1" } as any } });
  slide1.addText(deck.title, { x: 0.5, y: 2.5, w: 6, h: 1, fontSize: 44, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  slide1.addText(deck.description, { x: 0.5, y: 3.5, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: { type: "schemeColor", value: "dk1" } as any });
  slide1.addShape("rect", { x: 0.5, y: 4.2, w: 1.8, h: 0.45, fill: { type: "solid", color: { type: "schemeColor", value: "accent2" } as any } });

  // Slide 2: Agenda
  const slide2 = pptx.addSlide();
  slide2.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide2.addShape("rect", { x: 0, y: 0, w: 0.1, h: "100%", fill: { type: "solid", color: { type: "schemeColor", value: "accent1" } as any } });
  slide2.addText("Agenda", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  const agendaItems = ["Introduction", "Key Insights", "Data Analysis", "Recommendations", "Next Steps"];
  const accentSchemes = ["accent1", "accent2", "accent3", "accent4", "accent5"];
  agendaItems.forEach((item, i) => {
    slide2.addShape("rect", { x: 0.5, y: 1.5 + i * 0.8, w: 0.3, h: 0.3, fill: { type: "solid", color: { type: "schemeColor", value: accentSchemes[i] } as any } });
    slide2.addText(item, { x: 1, y: 1.5 + i * 0.8, w: 6, h: 0.5, fontSize: 18, fontFace: "Arial", color: { type: "schemeColor", value: "dk1" } as any });
  });

  // Slide 3: Chart with all 6 accent colors
  const slide3 = pptx.addSlide();
  slide3.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide3.addText("Key Metrics", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  const chartSchemes = ["accent1", "accent2", "accent3", "accent4", "accent5", "accent6"];
  const chartValues = [25, 40, 65, 85, 70, 55];
  chartValues.forEach((val, i) => {
    const height = (val / 100) * 3;
    slide3.addShape("rect", { x: 0.8 + i * 1.3, y: 4.5 - height, w: 0.9, h: height, fill: { type: "solid", color: { type: "schemeColor", value: chartSchemes[i] } as any } });
  });

  // Slide 4: Three Columns
  const slide4 = pptx.addSlide();
  slide4.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide4.addText("Our Approach", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  const columns = [
    { title: "Discovery", scheme: "accent1" },
    { title: "Strategy", scheme: "accent2" },
    { title: "Execution", scheme: "accent3" }
  ];
  columns.forEach((col, i) => {
    slide4.addShape("rect", { x: 0.5 + i * 3.1, y: 1.3, w: 2.9, h: 3.5, fill: { type: "solid", color: { type: "schemeColor", value: col.scheme } as any }, transparency: 92 } as any);
    slide4.addShape("ellipse", { x: 1.2 + i * 3.1, y: 1.6, w: 1.3, h: 1.3, fill: { type: "solid", color: { type: "schemeColor", value: col.scheme } as any }, transparency: 70 } as any);
    slide4.addText(col.title, { x: 0.7 + i * 3.1, y: 3.2, w: 2.5, h: 0.5, fontSize: 18, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "dk1" } as any, align: "center" });
  });

  // Slide 5: Quote
  const slide5 = pptx.addSlide();
  slide5.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide5.addShape("rect", { x: 0, y: 0, w: "100%", h: "100%", fill: { type: "solid", color: { type: "schemeColor", value: "accent1" } as any }, transparency: 97 } as any);
  slide5.addText("\"", { x: 0.5, y: 1, w: 1, h: 1.5, fontSize: 120, fontFace: "Georgia", color: { type: "schemeColor", value: "accent1" } as any });
  slide5.addText("Innovation distinguishes between a leader and a follower.", { x: 1.5, y: 2, w: 7, h: 1.5, fontSize: 28, fontFace: "Arial", italic: true, color: { type: "schemeColor", value: "dk1" } as any });
  slide5.addText("- Steve Jobs", { x: 1.7, y: 3.8, w: 3, h: 0.3, fontSize: 16, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });

  // Slide 6: Timeline with 5 accent colors
  const slide6 = pptx.addSlide();
  slide6.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide6.addText("Roadmap", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  slide6.addShape("rect", { x: 0.5, y: 2.8, w: 9, h: 0.05, fill: { type: "solid", color: { type: "schemeColor", value: "accent1" } as any }, transparency: 70 } as any);
  const timelineSchemes = ["accent1", "accent2", "accent3", "accent4", "accent5"];
  timelineSchemes.forEach((scheme, i) => {
    slide6.addShape("ellipse", { x: 0.8 + i * 1.9, y: 2.6, w: 0.4, h: 0.4, fill: { type: "solid", color: { type: "schemeColor", value: scheme } as any } });
    slide6.addShape("rect", { x: 0.5 + i * 1.9, y: i % 2 === 0 ? 1.4 : 3.2, w: 1.6, h: 0.8, fill: { type: "solid", color: { type: "schemeColor", value: scheme } as any }, transparency: 90 } as any);
    slide6.addText(`Phase ${i + 1}`, { x: 0.6 + i * 1.9, y: i % 2 === 0 ? 1.5 : 3.3, w: 1.4, h: 0.3, fontSize: 11, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: scheme } as any });
  });

  // Slide 7: Team with 4 accent colors
  const slide7 = pptx.addSlide();
  slide7.background = { color: { type: "schemeColor", value: "lt1" } as any };
  slide7.addText("Our Team", { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
  const teamMembers = [
    { name: "John Smith", role: "CEO", scheme: "accent1" },
    { name: "Sarah Lee", role: "CTO", scheme: "accent2" },
    { name: "Mike Chen", role: "CFO", scheme: "accent3" },
    { name: "Lisa Wang", role: "COO", scheme: "accent4" }
  ];
  teamMembers.forEach((member, i) => {
    slide7.addShape("rect", { x: 0.5 + i * 2.4, y: 1.3, w: 2.2, h: 3.2, fill: { type: "solid", color: { type: "schemeColor", value: member.scheme } as any }, transparency: 92 } as any);
    slide7.addShape("ellipse", { x: 1 + i * 2.4, y: 1.6, w: 1.2, h: 1.2, fill: { type: "solid", color: { type: "schemeColor", value: member.scheme } as any }, transparency: 80 } as any);
    slide7.addText(member.name, { x: 0.6 + i * 2.4, y: 3, w: 2, h: 0.4, fontSize: 14, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "dk1" } as any, align: "center" });
    slide7.addText(member.role, { x: 0.6 + i * 2.4, y: 3.4, w: 2, h: 0.3, fontSize: 12, fontFace: "Arial", color: { type: "schemeColor", value: member.scheme } as any, align: "center" });
  });

  // Slide 8: Thank You with hyperlink color
  const slide8 = pptx.addSlide();
  slide8.background = { color: { type: "schemeColor", value: "accent1" } as any };
  slide8.addShape("ellipse", { x: -1.5, y: -1.5, w: 4, h: 4, fill: { type: "solid", color: { type: "schemeColor", value: "lt1" } as any }, transparency: 95 } as any);
  slide8.addShape("ellipse", { x: 7, y: 3, w: 5, h: 5, fill: { type: "solid", color: { type: "schemeColor", value: "lt1" } as any }, transparency: 95 } as any);
  slide8.addText("Thank You", { x: 0, y: 2, w: "100%", h: 1, fontSize: 52, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "lt1" } as any, align: "center" });
  slide8.addText("Questions? Let's connect.", { x: 0, y: 3, w: "100%", h: 0.5, fontSize: 18, fontFace: "Arial", color: { type: "schemeColor", value: "lt1" } as any, align: "center" });
  slide8.addText("contact@company.com", { x: 0, y: 4.2, w: "100%", h: 0.4, fontSize: 14, fontFace: "Arial", color: { type: "schemeColor", value: "hlink" } as any, align: "center" });

  // Generate remaining slides
  for (let i = 8; i < deck.slideCount; i++) {
    const slide = pptx.addSlide();
    slide.background = { color: { type: "schemeColor", value: "lt1" } as any };
    slide.addText(`Slide ${i + 1}`, { x: 0.5, y: 0.5, w: 4, h: 0.6, fontSize: 32, fontFace: "Arial", bold: true, color: { type: "schemeColor", value: "accent1" } as any });
    const accentIndex = i % 6;
    slide.addShape("rect", { x: 0.5, y: 1.3, w: 9, h: 3.5, fill: { type: "solid", color: { type: "schemeColor", value: chartSchemes[accentIndex] } as any }, transparency: 92 } as any);
    slide.addText("Custom content area", { x: 0.5, y: 2.5, w: 9, h: 0.5, fontSize: 16, fontFace: "Arial", color: { type: "schemeColor", value: "dk2" } as any, align: "center" });
  }

  // Generate the PPTX as ArrayBuffer
  const buffer = await pptx.write({ outputType: "arraybuffer" }) as ArrayBuffer;
  
  // Inject custom theme colors into the PPTX
  const themeName = `${deck.title} - ColorSlide`;
  const modifiedBlob = await injectThemeColors(buffer, themeName, colors);
  
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
