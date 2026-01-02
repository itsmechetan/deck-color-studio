import { useState } from "react";
import { Header } from "@/components/Header";
import { Search, ChevronDown, Circle, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "inspiration", label: "Inspiration", icon: Circle },
  { id: "template-slides", label: "Template Slides", icon: Zap },
  { id: "full-deck", label: "Full Deck Templates", icon: BarChart3 },
];

const filters = [
  { id: "companies", label: "Companies" },
  { id: "slide-type", label: "Slide type" },
  { id: "industry", label: "Industry" },
  { id: "use-case", label: "Use Case" },
];

const mockSlides = [
  {
    id: "1",
    title: "Who has successfully created impact with trust architectures and digital identity?",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slideType: "Header Vertical",
    typeColor: "bg-emerald-600",
    company: "McKinsey",
  },
  {
    id: "2",
    title: "Interest rates and Federal Reserve policy remain the number one macro risk factor",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    slideType: "Single Chart",
    typeColor: "bg-blue-600",
    company: "BCG",
  },
  {
    id: "3",
    title: "Finance & Insurance, Information & Telecommunications, and Mining remain dominant",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    slideType: "Mixed Chart",
    typeColor: "bg-violet-600",
    company: "PwC/Strategy&",
  },
  {
    id: "4",
    title: "The Best of Both Worlds - Value based mobility product portfolio",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    slideType: "Table",
    typeColor: "bg-teal-600",
    company: "Deloitte",
  },
  {
    id: "5",
    title: "India is an entertainment-hungry nation - and growth in digital is driving new content",
    thumbnail: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
    slideType: "Single Chart",
    typeColor: "bg-blue-600",
    company: "BCG",
  },
  {
    id: "6",
    title: "Australia has a dispersed network of port terminal facilities which drives low utilisation",
    thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=400&fit=crop",
    slideType: "Mixed Chart",
    typeColor: "bg-violet-600",
    company: "McKinsey",
  },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState("inspiration");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-border bg-card/50">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-foreground text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="h-4 w-4" fill={isActive ? "currentColor" : "none"} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search slides e.g: Technology, investor, heatmap etc."
              className="w-full h-14 pl-14 pr-6 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {filter.label}
              <ChevronDown className="h-4 w-4" />
            </button>
          ))}
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wide">
            Clear All
          </button>
        </div>

        {/* Slides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSlides.map((slide) => (
            <div
              key={slide.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-border/80 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3">
                <span
                  className={cn(
                    "px-3 py-1 rounded text-xs font-medium text-white",
                    slide.typeColor
                  )}
                >
                  {slide.slideType}
                </span>
                <span className="text-sm text-muted-foreground">
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
