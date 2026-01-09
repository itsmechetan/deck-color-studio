import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Deck, loadThemeColors, ThemeColors, getDefaultTheme } from "@/lib/decks";
import { Layers } from "lucide-react";
import { useEffect, useState } from "react";
import { loadSvgContent, loadColorMapping, recolorSvg, ColorMapping } from "@/lib/recolorSvg";

interface DeckCardProps {
  deck: Deck;
  index: number;
}

export function DeckCard({ deck, index }: DeckCardProps) {
  const [theme, setTheme] = useState<ThemeColors>(getDefaultTheme());
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [colorMapping, setColorMapping] = useState<ColorMapping | null>(null);

  useEffect(() => {
    loadThemeColors(deck.slug).then(setTheme);
    
    // Try to load SVG preview
    Promise.all([
      loadSvgContent(deck.slug, 1),
      loadColorMapping(deck.slug),
    ]).then(([svg, mapping]) => {
      if (svg && mapping) {
        setSvgContent(svg);
        setColorMapping(mapping);
      }
    });
  }, [deck.slug]);

  const recoloredSvg = svgContent && colorMapping
    ? recolorSvg(svgContent, theme, colorMapping)
    : null;

  return (
    <Link to={`/deck/${deck.slug}`}>
      <Card 
        className="group overflow-hidden border-border/50 bg-gradient-card shadow-soft card-hover opacity-0 animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="relative aspect-video overflow-hidden">
          {recoloredSvg ? (
            <div 
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              dangerouslySetInnerHTML={{ __html: recoloredSvg }}
            />
          ) : (
            <DeckThumbnail theme={theme} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium shadow-soft">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <span>{deck.slideCount} slides</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {deck.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {deck.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {deck.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function DeckThumbnail({ theme }: { theme: ThemeColors }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: theme.lt1 }}>
      <svg viewBox="0 0 320 180" className="w-full h-full">
        {/* Background */}
        <rect x="0" y="0" width="320" height="180" fill={theme.lt1} rx="4" />
        
        {/* Header bar */}
        <rect x="20" y="20" width="280" height="8" rx="4" fill={theme.accent1} opacity="0.15" />
        
        {/* Title placeholder */}
        <rect x="20" y="45" width="160" height="14" rx="3" fill={theme.accent1} />
        <rect x="20" y="65" width="100" height="8" rx="2" fill={theme.dk2} opacity="0.5" />
        
        {/* Chart/Graph area */}
        <rect x="20" y="90" width="130" height="70" rx="6" fill={theme.lt2} />
        
        {/* Bar chart inside */}
        <rect x="30" y="120" width="15" height="30" rx="2" fill={theme.accent1} />
        <rect x="50" y="110" width="15" height="40" rx="2" fill={theme.accent2} />
        <rect x="70" y="100" width="15" height="50" rx="2" fill={theme.accent3} />
        <rect x="90" y="115" width="15" height="35" rx="2" fill={theme.accent4} />
        <rect x="110" y="105" width="15" height="45" rx="2" fill={theme.accent5} />
        
        {/* Right side content blocks */}
        <rect x="170" y="90" width="130" height="30" rx="6" fill={theme.accent3} opacity="0.2" />
        <rect x="180" y="100" width="80" height="8" rx="2" fill={theme.dk2} opacity="0.4" />
        
        <rect x="170" y="130" width="130" height="30" rx="6" fill={theme.accent1} opacity="0.1" />
        <rect x="180" y="140" width="60" height="8" rx="2" fill={theme.dk2} opacity="0.4" />
        
        {/* Decorative circles */}
        <circle cx="280" r="15" cy="40" fill={theme.accent2} opacity="0.2" />
        <circle cx="295" r="8" cy="55" fill={theme.accent6} opacity="0.3" />
      </svg>
    </div>
  );
}
