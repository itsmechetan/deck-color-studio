import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Pitch",
  "Consulting",
  "Dashboard",
  "Portfolio",
  "Tech",
  "Sales",
  "Marketing",
  "Corporate",
  "Education",
  "Finance",
];

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="space-y-4">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search decks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11 h-12 rounded-xl bg-card/60 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all"
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "cursor-pointer px-4 py-1.5 text-sm font-normal transition-all duration-200 hover:scale-105",
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-glow"
                : "hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            )}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
