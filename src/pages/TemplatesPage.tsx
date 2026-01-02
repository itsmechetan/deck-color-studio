import { useState } from "react";
import { Header } from "@/components/Header";
import { Search, ChevronDown, Sparkles, Zap, LayoutGrid, X, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

const tabs = [
  { id: "inspiration", label: "Inspiration", icon: Sparkles, description: "Browse real-world examples" },
  { id: "template-slides", label: "Template Slides", icon: Zap, description: "Individual slide layouts" },
  { id: "full-deck", label: "Full Decks", icon: LayoutGrid, description: "Complete presentations" },
];

const filters = [
  { id: "companies", label: "Companies", options: ["McKinsey", "BCG", "Bain", "Deloitte", "PwC"] },
  { id: "slide-type", label: "Slide type", options: ["Chart", "Table", "Header", "Timeline"] },
  { id: "industry", label: "Industry", options: ["Tech", "Finance", "Healthcare", "Retail"] },
  { id: "use-case", label: "Use Case", options: ["Pitch", "Strategy", "Report", "Review"] },
];

const mockSlides = [
  {
    id: "1",
    title: "Who has successfully created impact with trust architectures and digital identity?",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slideType: "Header Vertical",
    typeColor: "bg-emerald-500",
    company: "McKinsey",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Interest rates and Federal Reserve policy remain the number one macro risk factor",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slideType: "Single Chart",
    typeColor: "bg-blue-500",
    company: "BCG",
    isFeatured: false,
  },
  {
    id: "3",
    title: "Finance & Insurance, Information & Telecommunications, and Mining remain dominant",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slideType: "Mixed Chart",
    typeColor: "bg-violet-500",
    company: "PwC/Strategy&",
    isFeatured: true,
  },
  {
    id: "4",
    title: "The Best of Both Worlds - Value based mobility product portfolio",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    slideType: "Table",
    typeColor: "bg-teal-500",
    company: "Deloitte",
    isFeatured: false,
  },
  {
    id: "5",
    title: "India is an entertainment-hungry nation - and growth in digital is driving new content",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    slideType: "Single Chart",
    typeColor: "bg-blue-500",
    company: "BCG",
    isFeatured: true,
  },
  {
    id: "6",
    title: "Australia has a dispersed network of port terminal facilities which drives low utilisation",
    thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop",
    slideType: "Mixed Chart",
    typeColor: "bg-violet-500",
    company: "McKinsey",
    isFeatured: false,
  },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState("inspiration");
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSlides = mockSlides.filter(slide => 
    !showFeatured || slide.isFeatured
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Adds context and visual hierarchy */}
      <section className="relative border-b border-border/50 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container py-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Slide <span className="gradient-text">Templates</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse thousands of professional slides from top consulting firms. 
            Find inspiration or download ready-to-use templates.
          </p>
        </div>
      </section>

      <main className="container py-8">
        {/* Tabs - Card-style for better affordance */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl border border-border bg-card shadow-sm">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-foreground text-background shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms` 
                  }}
                >
                  <Icon className={cn("h-4 w-4", isActive && "animate-pulse")} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar - Elevated with shadow for prominence */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search slides e.g: Technology, investor, heatmap etc."
              className="w-full h-14 pl-14 pr-12 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 focus:shadow-md transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Row - Better organized with Featured toggle */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
          {/* Featured Toggle - Prominent position */}
          <div className="flex items-center gap-3 pr-8 border-r border-border">
            <Switch
              checked={showFeatured}
              onCheckedChange={setShowFeatured}
              className="data-[state=checked]:bg-primary"
            />
            <span className="text-sm font-medium">Featured only</span>
          </div>

          {/* Filter Dropdowns */}
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-all"
            >
              {filter.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}

          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Clear all
          </button>
        </div>

        {/* Results Count - Contextual feedback */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredSlides.length}</span> slides
            {showFeatured && " (featured)"}
          </p>
        </div>

        {/* Slides Grid - Enhanced cards with hover states */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {slide.isFeatured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-medium backdrop-blur-sm">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </span>
                </div>
              )}

              {/* Thumbnail with Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay - Call to action */}
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-background text-foreground rounded-full font-medium text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-4 w-4" />
                    View Slide
                  </button>
                </div>
              </div>

              {/* Footer - Clean layout with badge and company */}
              <div className="flex items-center justify-between px-4 py-4 border-t border-border/50">
                <span
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm",
                    slide.typeColor
                  )}
                >
                  {slide.slideType}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {slide.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
