import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { DeckCard } from "@/components/DeckCard";
import { SearchFilter } from "@/components/SearchFilter";
import { decks } from "@/lib/decks";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDecks = useMemo(() => {
    return decks.filter((deck) => {
      const matchesSearch =
        deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" ||
        deck.tags.some(
          (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary opacity-0 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>Beautiful decks, your brand colors</span>
              </div>
              
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl opacity-0 animate-fade-in animation-delay-100">
                Customize any deck.
                <br />
                <span className="gradient-text">Download instantly.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in animation-delay-200">
                Pick a professional presentation, change the colors in real-time, 
                and download a perfect PowerPoint file in your brand colors.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8 sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-border/40">
          <div className="container">
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </section>

        {/* Deck Gallery */}
        <section className="py-12 pb-24">
          <div className="container">
            {filteredDecks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDecks.map((deck, index) => (
                  <DeckCard key={deck.slug} deck={deck} index={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Sparkles className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  No decks found
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ColorSlide. Built with love.
            </p>
            <p className="text-sm text-muted-foreground">
              Like unDraw, but for presentations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
