import { ColorPicker } from "./ColorPicker";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shuffle, RotateCcw, Palette } from "lucide-react";
import { ThemeColors, themeColorLabels, themeColorOrder } from "@/lib/decks";

interface ColorSidebarProps {
  colors: ThemeColors;
  defaultColors: ThemeColors;
  onColorChange: (key: keyof ThemeColors, color: string) => void;
  onRandomize: () => void;
  onReset: () => void;
}

export function ColorSidebar({
  colors,
  defaultColors,
  onColorChange,
  onRandomize,
  onReset,
}: ColorSidebarProps) {
  // Group colors by category
  const textBgColors = themeColorOrder.slice(0, 4);
  const accentColors = themeColorOrder.slice(4, 10);
  const linkColors = themeColorOrder.slice(10);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-glow">
          <Palette className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display font-semibold">Theme Colors</h3>
          <p className="text-xs text-muted-foreground">12 PowerPoint slots</p>
        </div>
      </div>

      <Separator />

      {/* Text & Background */}
      <div>
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Text & Background
        </h4>
        <div className="space-y-0.5">
          {textBgColors.map((key) => (
            <ColorPicker
              key={key}
              label={themeColorLabels[key]}
              color={colors[key]}
              onChange={(newColor) => onColorChange(key, newColor)}
            />
          ))}
        </div>
      </div>

      <Separator />

      {/* Accents */}
      <div>
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Accent Colors
        </h4>
        <div className="space-y-0.5">
          {accentColors.map((key) => (
            <ColorPicker
              key={key}
              label={themeColorLabels[key]}
              color={colors[key]}
              onChange={(newColor) => onColorChange(key, newColor)}
            />
          ))}
        </div>
      </div>

      <Separator />

      {/* Links */}
      <div>
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Link Colors
        </h4>
        <div className="space-y-0.5">
          {linkColors.map((key) => (
            <ColorPicker
              key={key}
              label={themeColorLabels[key]}
              color={colors[key]}
              onChange={(newColor) => onColorChange(key, newColor)}
            />
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full justify-start gap-3"
          onClick={onRandomize}
        >
          <Shuffle className="h-4 w-4" />
          Randomize Palette
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground"
          onClick={onReset}
        >
          <RotateCcw className="h-4 w-4" />
          Reset to Default
        </Button>
      </div>
    </div>
  );
}
