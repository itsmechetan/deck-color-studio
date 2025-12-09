import { useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SlideCarousel } from "@/components/SlideCarousel";
import { ColorSidebar } from "@/components/ColorSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getDeckBySlug, getDefaultColorsForDeck } from "@/lib/decks";
import { generatePptx } from "@/lib/generatePptx";
import { toast } from "@/hooks/use-toast";
import {
  Download,
  Palette,
  ChevronLeft,
  Loader2,
  Layers,
} from "lucide-react";

const DeckPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const deck = getDeckBySlug(slug || "");

  const [colors, setColors] = useState<Record<string, string>>(() =>
    deck ? getDefaultColorsForDeck(deck) : {}
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleColorChange = useCallback((key: string, color: string) => {
    setColors((prev) => ({ ...prev, [key]: color }));
  }, []);

  const handleRandomize = useCallback(() => {
    const randomColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const newColors: Record<string, string> = {};
    deck?.colors.forEach((color) => {
      if (color.key === "background") {
        newColors[color.key] = "#FFFFFF";
      } else if (color.key === "textDark") {
        newColors[color.key] = "#1A1A2E";
      } else if (color.key === "textLight") {
        newColors[color.key] = "#FFFFFF";
      } else {
        newColors[color.key] = randomColor();
      }
    });
    setColors(newColors);

    toast({
      title: "Colors randomized!",
      description: "Your palette has been updated with new colors.",
    });
  }, [deck]);

  const handleReset = useCallback(() => {
    if (deck) {
      setColors(getDefaultColorsForDeck(deck));
      toast({
        title: "Colors reset",
        description: "Your palette has been restored to default.",
      });
    }
  }, [deck]);

  const handleDownload = async () => {
    if (!deck) return;

    setIsDownloading(true);
    try {
      await generatePptx(deck, colors);
      toast({
        title: "Download started!",
        description: `${deck.title} is being downloaded.`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an error generating your presentation.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  if (!deck) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">
            Deck not found
          </h1>
          <p className="text-muted-foreground mb-8">
            The deck you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Gallery
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2">
                {deck.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Layers className="h-4 w-4" />
                  <span>{deck.slideCount} slides</span>
                </div>
                {deck.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full lg:w-auto"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  Download PowerPoint
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Carousel */}
          <div className="order-2 lg:order-1">
            <SlideCarousel
              slideCount={deck.slideCount}
              colors={colors}
              activeSlide={activeSlide}
              onSlideChange={setActiveSlide}
            />
          </div>

          {/* Sidebar - Desktop */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-soft">
              <ColorSidebar
                deck={deck}
                colors={colors}
                onColorChange={handleColorChange}
                onRandomize={handleRandomize}
                onReset={handleReset}
              />
            </div>
          </div>

          {/* Sidebar - Mobile (Bottom Sheet) */}
          <div className="order-1 lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="glass" size="lg" className="w-full">
                  <Palette className="h-5 w-5 mr-2" />
                  Customize Colors
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[80vh] rounded-t-3xl">
                <div className="pt-4">
                  <ColorSidebar
                    deck={deck}
                    colors={colors}
                    onColorChange={handleColorChange}
                    onRandomize={handleRandomize}
                    onReset={handleReset}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeckPage;
