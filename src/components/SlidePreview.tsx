import { cn } from "@/lib/utils";
import { ThemeColors } from "@/lib/decks";

interface SlidePreviewProps {
  slideNumber: number;
  colors: ThemeColors;
  isActive?: boolean;
}

export function SlidePreview({ slideNumber, colors, isActive }: SlidePreviewProps) {
  const layouts = [
    TitleSlide,
    ContentSlide,
    ChartSlide,
    ThreeColumnSlide,
    QuoteSlide,
    TimelineSlide,
    ComparisonSlide,
    TeamSlide,
    DataSlide,
    ClosingSlide,
  ];

  const LayoutComponent = layouts[(slideNumber - 1) % layouts.length];

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-xl overflow-hidden shadow-card transition-all duration-300",
        isActive && "ring-2 ring-primary ring-offset-4 ring-offset-background"
      )}
    >
      <LayoutComponent slideNumber={slideNumber} colors={colors} />
    </div>
  );
}

function TitleSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      <rect x="0" y="0" width="1920" height="200" fill={colors.accent1} opacity="0.1" />
      <circle cx="1700" cy="200" r="300" fill={colors.accent2} opacity="0.1" />
      <circle cx="1800" cy="100" r="150" fill={colors.accent3} opacity="0.15" />
      
      <rect x="120" y="400" width="800" height="60" rx="8" fill={colors.accent1} />
      <rect x="120" y="500" width="600" height="30" rx="6" fill={colors.dk1} opacity="0.5" />
      <rect x="120" y="550" width="400" height="20" rx="4" fill={colors.dk2} opacity="0.3" />
      
      <rect x="120" y="700" width="200" height="50" rx="25" fill={colors.accent2} />
      <rect x="350" y="700" width="200" height="50" rx="25" fill="transparent" stroke={colors.accent1} strokeWidth="2" />
      
      <rect x="1200" y="300" width="500" height="400" rx="20" fill={colors.lt2} />
      <rect x="1250" y="350" width="200" height="20" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1250" y="400" width="350" height="200" rx="10" fill={colors.accent1} opacity="0.3" />
    </svg>
  );
}

function ContentSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      <rect x="0" y="0" width="8" height="1080" fill={colors.accent1} />
      
      <rect x="120" y="80" width="400" height="40" rx="6" fill={colors.accent1} />
      <rect x="120" y="140" width="600" height="3" fill={colors.accent2} />
      
      <rect x="120" y="220" width="800" height="20" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="120" y="260" width="700" height="20" rx="4" fill={colors.dk2} opacity="0.5" />
      <rect x="120" y="300" width="750" height="20" rx="4" fill={colors.dk2} opacity="0.5" />
      
      <rect x="120" y="380" width="500" height="300" rx="16" fill={colors.accent3} opacity="0.15" />
      <rect x="160" y="420" width="200" height="16" rx="4" fill={colors.dk1} opacity="0.6" />
      <rect x="160" y="460" width="400" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="160" y="490" width="380" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="160" y="550" width="180" height="40" rx="20" fill={colors.accent1} />
      
      <rect x="680" y="380" width="500" height="300" rx="16" fill={colors.accent2} opacity="0.15" />
      <rect x="720" y="420" width="200" height="16" rx="4" fill={colors.dk1} opacity="0.6" />
      <rect x="720" y="460" width="400" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="720" y="490" width="380" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="720" y="550" width="180" height="40" rx="20" fill={colors.accent2} />
      
      <rect x="1240" y="200" width="560" height="500" rx="20" fill={colors.accent1} opacity="0.08" />
      <circle cx="1520" cy="450" r="150" fill={colors.accent4} opacity="0.3" />
    </svg>
  );
}

function ChartSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="350" height="35" rx="6" fill={colors.accent1} />
      <rect x="120" y="130" width="500" height="18" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="120" y="200" width="1000" height="600" rx="20" fill={colors.lt2} />
      
      {/* Bar chart */}
      <rect x="200" y="650" width="80" height="100" rx="8" fill={colors.accent1} />
      <rect x="320" y="550" width="80" height="200" rx="8" fill={colors.accent2} />
      <rect x="440" y="480" width="80" height="270" rx="8" fill={colors.accent3} />
      <rect x="560" y="400" width="80" height="350" rx="8" fill={colors.accent4} />
      <rect x="680" y="350" width="80" height="400" rx="8" fill={colors.accent5} />
      <rect x="800" y="300" width="80" height="450" rx="8" fill={colors.accent6} />
      <rect x="920" y="380" width="80" height="370" rx="8" fill={colors.accent1} opacity="0.7" />
      
      {/* Right side stats */}
      <rect x="1200" y="200" width="600" height="180" rx="16" fill={colors.accent1} opacity="0.1" />
      <rect x="1240" y="240" width="120" height="20" rx="4" fill={colors.accent1} />
      <rect x="1240" y="280" width="200" height="50" rx="6" fill={colors.dk1} opacity="0.7" />
      
      <rect x="1200" y="420" width="600" height="180" rx="16" fill={colors.accent2} opacity="0.1" />
      <rect x="1240" y="460" width="120" height="20" rx="4" fill={colors.accent2} />
      <rect x="1240" y="500" width="180" height="50" rx="6" fill={colors.dk1} opacity="0.7" />
      
      <rect x="1200" y="640" width="600" height="180" rx="16" fill={colors.accent5} opacity="0.1" />
      <rect x="1240" y="680" width="120" height="20" rx="4" fill={colors.accent5} />
      <rect x="1240" y="720" width="160" height="50" rx="6" fill={colors.dk1} opacity="0.7" />
    </svg>
  );
}

function ThreeColumnSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="300" height="35" rx="6" fill={colors.accent1} />
      
      {/* Three columns */}
      <rect x="120" y="180" width="530" height="700" rx="20" fill={colors.accent1} opacity="0.08" />
      <circle cx="385" cy="320" r="80" fill={colors.accent1} opacity="0.3" />
      <rect x="220" y="440" width="330" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="220" y="490" width="280" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="220" y="520" width="300" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="220" y="550" width="260" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="690" y="180" width="530" height="700" rx="20" fill={colors.accent2} opacity="0.08" />
      <circle cx="955" cy="320" r="80" fill={colors.accent2} opacity="0.3" />
      <rect x="790" y="440" width="330" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="790" y="490" width="280" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="790" y="520" width="300" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="790" y="550" width="260" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="1260" y="180" width="530" height="700" rx="20" fill={colors.accent3} opacity="0.08" />
      <circle cx="1525" cy="320" r="80" fill={colors.accent3} opacity="0.3" />
      <rect x="1360" y="440" width="330" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="1360" y="490" width="280" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1360" y="520" width="300" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1360" y="550" width="260" height="16" rx="4" fill={colors.dk2} opacity="0.4" />
    </svg>
  );
}

function QuoteSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      <rect x="0" y="0" width="1920" height="1080" fill={colors.accent1} opacity="0.03" />
      
      {/* Large quote marks */}
      <text x="200" y="350" fontSize="300" fill={colors.accent1} opacity="0.15" fontFamily="Georgia">"</text>
      <text x="1550" y="850" fontSize="300" fill={colors.accent1} opacity="0.15" fontFamily="Georgia">"</text>
      
      {/* Quote text */}
      <rect x="350" y="380" width="1200" height="40" rx="6" fill={colors.dk1} opacity="0.7" />
      <rect x="350" y="440" width="1100" height="40" rx="6" fill={colors.dk1} opacity="0.7" />
      <rect x="350" y="500" width="900" height="40" rx="6" fill={colors.dk1} opacity="0.7" />
      
      {/* Author */}
      <rect x="350" y="620" width="4" height="60" fill={colors.accent1} />
      <rect x="380" y="630" width="200" height="20" rx="4" fill={colors.accent1} />
      <rect x="380" y="660" width="150" height="14" rx="4" fill={colors.dk2} opacity="0.5" />
    </svg>
  );
}

function TimelineSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="250" height="35" rx="6" fill={colors.accent1} />
      
      {/* Timeline line */}
      <rect x="120" y="540" width="1680" height="4" fill={colors.accent1} opacity="0.3" />
      
      {/* Timeline points */}
      <circle cx="300" cy="542" r="20" fill={colors.accent1} />
      <rect x="200" y="350" width="200" height="140" rx="12" fill={colors.accent1} opacity="0.1" />
      <rect x="220" y="380" width="100" height="16" rx="4" fill={colors.accent1} />
      <rect x="220" y="410" width="160" height="12" rx="4" fill={colors.dk2} opacity="0.5" />
      
      <circle cx="660" cy="542" r="20" fill={colors.accent2} />
      <rect x="560" y="590" width="200" height="140" rx="12" fill={colors.accent2} opacity="0.1" />
      <rect x="580" y="620" width="100" height="16" rx="4" fill={colors.accent2} />
      <rect x="580" y="650" width="160" height="12" rx="4" fill={colors.dk2} opacity="0.5" />
      
      <circle cx="1020" cy="542" r="20" fill={colors.accent3} />
      <rect x="920" y="350" width="200" height="140" rx="12" fill={colors.accent3} opacity="0.1" />
      <rect x="940" y="380" width="100" height="16" rx="4" fill={colors.accent3} />
      <rect x="940" y="410" width="160" height="12" rx="4" fill={colors.dk2} opacity="0.5" />
      
      <circle cx="1380" cy="542" r="20" fill={colors.accent4} />
      <rect x="1280" y="590" width="200" height="140" rx="12" fill={colors.accent4} opacity="0.1" />
      <rect x="1300" y="620" width="100" height="16" rx="4" fill={colors.accent4} />
      <rect x="1300" y="650" width="160" height="12" rx="4" fill={colors.dk2} opacity="0.5" />
      
      <circle cx="1700" cy="542" r="20" fill={colors.accent5} />
      <rect x="1600" y="350" width="200" height="140" rx="12" fill={colors.accent5} opacity="0.1" />
      <rect x="1620" y="380" width="100" height="16" rx="4" fill={colors.accent5} />
      <rect x="1620" y="410" width="160" height="12" rx="4" fill={colors.dk2} opacity="0.5" />
    </svg>
  );
}

function ComparisonSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="300" height="35" rx="6" fill={colors.accent1} />
      
      {/* Left side */}
      <rect x="120" y="180" width="820" height="700" rx="20" fill={colors.accent1} opacity="0.08" />
      <rect x="180" y="220" width="200" height="28" rx="6" fill={colors.accent1} />
      
      <rect x="180" y="300" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="220" cy="330" r="15" fill={colors.accent5} />
      <rect x="260" y="315" width="300" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="180" y="380" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="220" cy="410" r="15" fill={colors.accent5} />
      <rect x="260" y="395" width="280" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="180" y="460" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="220" cy="490" r="15" fill={colors.accent5} />
      <rect x="260" y="475" width="320" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      {/* Divider */}
      <rect x="955" y="200" width="4" height="660" rx="2" fill={colors.accent1} opacity="0.2" />
      <text x="957" y="540" fontSize="40" fill={colors.accent1} fontWeight="bold" textAnchor="middle">VS</text>
      
      {/* Right side */}
      <rect x="980" y="180" width="820" height="700" rx="20" fill={colors.accent2} opacity="0.08" />
      <rect x="1040" y="220" width="200" height="28" rx="6" fill={colors.accent2} />
      
      <rect x="1040" y="300" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="1080" cy="330" r="15" fill={colors.accent3} />
      <rect x="1120" y="315" width="300" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="1040" y="380" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="1080" cy="410" r="15" fill={colors.accent3} />
      <rect x="1120" y="395" width="280" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="1040" y="460" width="700" height="60" rx="10" fill={colors.lt1} />
      <circle cx="1080" cy="490" r="15" fill={colors.accent3} />
      <rect x="1120" y="475" width="320" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
    </svg>
  );
}

function TeamSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="250" height="35" rx="6" fill={colors.accent1} />
      <rect x="120" y="130" width="400" height="18" rx="4" fill={colors.dk2} opacity="0.4" />
      
      {/* Team member cards */}
      <rect x="120" y="220" width="380" height="450" rx="20" fill={colors.accent1} opacity="0.08" />
      <circle cx="310" cy="360" r="80" fill={colors.accent1} opacity="0.2" />
      <rect x="200" y="480" width="220" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="230" y="520" width="160" height="16" rx="4" fill={colors.accent1} />
      <rect x="180" y="570" width="260" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="180" y="595" width="240" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="540" y="220" width="380" height="450" rx="20" fill={colors.accent2} opacity="0.08" />
      <circle cx="730" cy="360" r="80" fill={colors.accent2} opacity="0.2" />
      <rect x="620" y="480" width="220" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="650" y="520" width="160" height="16" rx="4" fill={colors.accent2} />
      <rect x="600" y="570" width="260" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="600" y="595" width="240" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="960" y="220" width="380" height="450" rx="20" fill={colors.accent3} opacity="0.08" />
      <circle cx="1150" cy="360" r="80" fill={colors.accent3} opacity="0.2" />
      <rect x="1040" y="480" width="220" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="1070" y="520" width="160" height="16" rx="4" fill={colors.accent3} />
      <rect x="1020" y="570" width="260" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1020" y="595" width="240" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      
      <rect x="1380" y="220" width="380" height="450" rx="20" fill={colors.accent4} opacity="0.08" />
      <circle cx="1570" cy="360" r="80" fill={colors.accent4} opacity="0.2" />
      <rect x="1460" y="480" width="220" height="24" rx="4" fill={colors.dk1} opacity="0.7" />
      <rect x="1490" y="520" width="160" height="16" rx="4" fill={colors.accent4} />
      <rect x="1440" y="570" width="260" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1440" y="595" width="240" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
    </svg>
  );
}

function DataSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.lt1} />
      
      <rect x="120" y="80" width="300" height="35" rx="6" fill={colors.accent1} />
      
      {/* Pie chart */}
      <circle cx="450" cy="540" r="250" fill={colors.accent1} opacity="0.8" />
      <path d="M 450 290 A 250 250 0 0 1 650 700 L 450 540 Z" fill={colors.accent2} />
      <path d="M 650 700 A 250 250 0 0 1 300 650 L 450 540 Z" fill={colors.accent3} />
      <path d="M 300 650 A 250 250 0 0 1 450 290 L 450 540 Z" fill={colors.accent4} />
      <circle cx="450" cy="540" r="100" fill={colors.lt1} />
      
      {/* Legend */}
      <rect x="800" y="350" width="24" height="24" rx="4" fill={colors.accent1} />
      <rect x="840" y="355" width="150" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="800" y="400" width="24" height="24" rx="4" fill={colors.accent2} />
      <rect x="840" y="405" width="120" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="800" y="450" width="24" height="24" rx="4" fill={colors.accent3} />
      <rect x="840" y="455" width="140" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      <rect x="800" y="500" width="24" height="24" rx="4" fill={colors.accent4} />
      <rect x="840" y="505" width="100" height="14" rx="4" fill={colors.dk1} opacity="0.6" />
      
      {/* Stats boxes */}
      <rect x="1100" y="200" width="350" height="180" rx="16" fill={colors.accent1} opacity="0.1" />
      <rect x="1140" y="240" width="80" height="16" rx="4" fill={colors.accent1} />
      <rect x="1140" y="280" width="150" height="50" rx="6" fill={colors.dk1} opacity="0.7" />
      <rect x="1140" y="340" width="200" height="12" rx="4" fill={colors.accent5} opacity="0.6" />
      
      <rect x="1480" y="200" width="350" height="180" rx="16" fill={colors.accent2} opacity="0.1" />
      <rect x="1520" y="240" width="80" height="16" rx="4" fill={colors.accent2} />
      <rect x="1520" y="280" width="130" height="50" rx="6" fill={colors.dk1} opacity="0.7" />
      <rect x="1520" y="340" width="180" height="12" rx="4" fill={colors.accent5} opacity="0.6" />
      
      <rect x="1100" y="420" width="730" height="250" rx="16" fill={colors.lt2} />
      <rect x="1140" y="460" width="200" height="20" rx="4" fill={colors.dk1} opacity="0.6" />
      <rect x="1140" y="500" width="600" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1140" y="530" width="580" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
      <rect x="1140" y="560" width="550" height="12" rx="4" fill={colors.dk2} opacity="0.4" />
    </svg>
  );
}

function ClosingSlide({ colors }: { slideNumber: number; colors: ThemeColors }) {
  return (
    <svg viewBox="0 0 1920 1080" className="w-full h-full">
      <rect width="1920" height="1080" fill={colors.accent1} />
      
      {/* Decorative elements */}
      <circle cx="200" cy="200" r="300" fill={colors.lt1} opacity="0.05" />
      <circle cx="1700" cy="900" r="400" fill={colors.lt1} opacity="0.05" />
      <circle cx="1600" cy="200" r="150" fill={colors.accent2} opacity="0.2" />
      <circle cx="300" cy="800" r="200" fill={colors.accent3} opacity="0.15" />
      
      {/* Main content */}
      <rect x="560" y="400" width="800" height="60" rx="8" fill={colors.lt1} />
      <rect x="660" y="500" width="600" height="30" rx="6" fill={colors.lt1} opacity="0.7" />
      
      {/* CTA buttons */}
      <rect x="660" y="600" width="250" height="60" rx="30" fill={colors.lt1} />
      <rect x="950" y="600" width="250" height="60" rx="30" fill="transparent" stroke={colors.lt1} strokeWidth="2" />
      
      {/* Contact info */}
      <rect x="710" y="750" width="500" height="20" rx="4" fill={colors.lt1} opacity="0.5" />
      <rect x="760" y="790" width="400" height="16" rx="4" fill={colors.lt1} opacity="0.3" />
      
      {/* Hyperlink indicator */}
      <rect x="860" y="830" width="200" height="14" rx="4" fill={colors.hlink} opacity="0.8" />
    </svg>
  );
}
