import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { SlidePreview } from "./SlidePreview";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideCarouselProps {
  slideCount: number;
  colors: Record<string, string>;
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
    <div className="relative w-full group">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        initialSlide={activeSlide}
        className="w-full rounded-2xl overflow-hidden"
      >
        {slides.map((slideNumber) => (
          <SwiperSlide key={slideNumber}>
            <SlidePreview
              slideNumber={slideNumber}
              colors={colors}
              isActive={slideNumber === activeSlide + 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        variant="glass"
        size="icon"
        className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="glass"
        size="icon"
        className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity h-12 w-12 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-foreground/80 text-background px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
        {activeSlide + 1} / {slideCount}
      </div>
    </div>
  );
}
