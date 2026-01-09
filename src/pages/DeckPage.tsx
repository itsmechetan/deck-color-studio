import { useState, useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SlideCarousel } from "@/components/SlideCarousel";
import { ColorSidebar } from "@/components/ColorSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getDeckBySlug, loadThemeColors, getDefaultTheme, ThemeColors } from "@/lib/decks";
import { generatePptx } from "@/lib/generatePptx";
import { generateThmx } from "@/lib/generateThmx";
import { toast } from "@/hooks/use-toast";
import {
  Download,
  Palette,
  ChevronLeft,
  Loader2,
  Layers,
  FileDown,
} from "lucide-react";

const DeckPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const deck = getDeckBySlug(slug || "");

  const [colors, setColors] = useState<ThemeColors>(getDefaultTheme());
  const [defaultColors, setDefaultColors] = useState<ThemeColors>(getDefaultTheme());
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloadingTheme, setIsDownloadingTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      loadThemeColors(slug).then((theme) => {
        setColors(theme);
        setDefaultColors(theme);
        setIsLoading(false);
      });
    }
  }, [slug]);

  const handleColorChange = useCallback((key: keyof ThemeColors, color: string) => {
    setColors((prev) => ({ ...prev, [key]: color }));
  }, []);

  const handleRandomize = useCallback(() => {
    const randomColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const newColors: ThemeColors = {
      dk1: "#1E293B",  // Keep dark text
      lt1: "#FFFFFF",  // Keep light background
      dk2: randomColor(),
      lt2: "#F5F5F5",  // Keep light secondary
      accent1: randomColor(),
      accent2: randomColor(),
      accent3: randomColor(),
      accent4: randomColor(),
      accent5: randomColor(),
      accent6: randomColor(),
      hlink: randomColor(),
      folHlink: randomColor(),
    };
    setColors(newColors);

    toast({
      title: "Colors randomized!",
      description: "Your palette has been updated with new colors.",
    });
  }, []);

  const handleReset = useCallback(() => {
    setColors(defaultColors);
    toast({
      title: "Colors reset",
      description: "Your palette has been restored to default.",
    });
  }, [defaultColors]);

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

  const handleDownloadTheme = async () => {
    if (!deck) return;

    setIsDownloadingTheme(true);
    try {
      await generateThmx(deck.title, colors);
      toast({
        title: "Theme downloaded!",
        description: `${deck.title} theme (.thmx) is ready.`,
      });
    } catch (error) {
      toast({
        title: "Theme download failed",
        description: "There was an error generating the theme file.",
        variant: "destructive",
      });
    } finally {
      setIsDownloadingTheme(false);
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

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                variant="hero"
                size="lg"
                onClick={handleDownload}
                disabled={isDownloading || isLoading}
                className="w-full sm:w-auto"
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
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadTheme}
                disabled={isDownloadingTheme || isLoading}
                className="w-full sm:w-auto"
              >
                {isDownloadingTheme ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileDown className="h-5 w-5" />
                    Export Theme (.thmx)
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 pb-24 lg:pb-0">
          {/* Carousel */}
          <div className="order-2 lg:order-1 min-w-0">
            {isLoading ? (
              <div className="aspect-video rounded-xl bg-muted animate-pulse" />
            ) : (
              <SlideCarousel
                slug={slug || ""}
                slideCount={deck.slideCount}
                colors={colors}
                activeSlide={activeSlide}
                onSlideChange={setActiveSlide}
              />
            )}
          </div>

          {/* Sidebar - Desktop */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-border/50 bg-gradient-card p-5 shadow-soft max-h-[calc(100vh-120px)] overflow-y-auto">
              <ColorSidebar
                colors={colors}
                defaultColors={defaultColors}
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
                  Customize Theme Colors
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl overflow-y-auto">
                <div className="pt-4">
                  <ColorSidebar
                    colors={colors}
                    defaultColors={defaultColors}
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
