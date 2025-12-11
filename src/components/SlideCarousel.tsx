import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SlidePreview } from "./SlidePreview";
import { ThemeColors } from "@/lib/decks";

interface SlideCarouselProps {
  slideCount: number;
  colors: ThemeColors;
  activeSlide: number;
  onSlideChange: (index: number) => void;
}

export function SlideCarousel({
  slideCount,
  colors,
  activeSlide,
  onSlideChange,
}: SlideCarouselProps) {
  const slides = Array.from({ length: slideCount }, (_, i) => i + 1);

  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          startIndex: activeSlide,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slideNumber) => (
            <CarouselItem key={slideNumber}>
              <SlidePreview
                slideNumber={slideNumber}
                colors={colors}
                isActive={slideNumber === activeSlide + 1}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-foreground/80 text-background px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
        {activeSlide + 1} / {slideCount}
      </div>
    </div>
  );
}
