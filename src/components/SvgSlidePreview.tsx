import { useEffect, useState } from "react";
import { ThemeColors } from "@/lib/decks";
import { recolorSvg, loadColorMapping, loadSvgContent, ColorMapping } from "@/lib/recolorSvg";
import { SlidePreview } from "./SlidePreview";

interface SvgSlidePreviewProps {
  slug: string;
  slideNumber: number;
  colors: ThemeColors;
  isActive?: boolean;
}

export function SvgSlidePreview({
  slug,
  slideNumber,
  colors,
  isActive,
}: SvgSlidePreviewProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [colorMapping, setColorMapping] = useState<ColorMapping | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Load SVG and color mapping on mount
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(false);

      const [svg, mapping] = await Promise.all([
        loadSvgContent(slug, slideNumber),
        loadColorMapping(slug),
      ]);

      if (cancelled) return;

      if (!svg || !mapping) {
        setError(true);
      } else {
        setSvgContent(svg);
        setColorMapping(mapping);
      }
      setLoading(false);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [slug, slideNumber]);

  // Recolor SVG when colors change
  const recoloredSvg = svgContent && colorMapping
    ? recolorSvg(svgContent, colors, colorMapping)
    : null;

  // Show loading state
  if (loading) {
    return (
      <div className="relative w-full aspect-[16/9] bg-muted rounded-lg flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading slide...</div>
      </div>
    );
  }

  // Fall back to generic preview if SVG not available
  if (error || !recoloredSvg) {
    return <SlidePreview slideNumber={slideNumber} colors={colors} isActive={isActive} />;
  }

  return (
    <div
      className={`relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        isActive ? "ring-2 ring-primary" : ""
      }`}
    >
      <div
        className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain"
        dangerouslySetInnerHTML={{ __html: recoloredSvg }}
      />
    </div>
  );
}
