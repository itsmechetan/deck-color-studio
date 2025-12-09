import { HexColorPicker, HexColorInput } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ label, color, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-16 h-8 p-0.5 border-2 border-border/50 hover:border-primary/50 transition-colors"
          >
            <div
              className="w-full h-full rounded-md shadow-inner transition-colors"
              style={{ backgroundColor: color }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4 space-y-3" align="end">
          <HexColorPicker color={color} onChange={onChange} />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">#</span>
            <HexColorInput
              color={color}
              onChange={onChange}
              className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm font-mono uppercase tracking-wider shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
