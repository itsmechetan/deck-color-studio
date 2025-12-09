import { ColorPicker } from "./ColorPicker";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shuffle, RotateCcw, Palette } from "lucide-react";
import { Deck } from "@/lib/decks";

interface ColorSidebarProps {
  deck: Deck;
  colors: Record<string, string>;
  onColorChange: (key: string, color: string) => void;
  onRandomize: () => void;
  onReset: () => void;
}

export function ColorSidebar({
  deck,
  colors,
  onColorChange,
  onRandomize,
  onReset,
}: ColorSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-glow">
          <Palette className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display font-semibold">Color Palette</h3>
          <p className="text-xs text-muted-foreground">Customize your deck</p>
        </div>
      </div>

      <Separator />

      <div className="space-y-1">
        {deck.colors.map((color) => (
          <ColorPicker
            key={color.key}
            label={color.name}
            color={colors[color.key] || color.default}
            onChange={(newColor) => onColorChange(color.key, newColor)}
          />
        ))}
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
