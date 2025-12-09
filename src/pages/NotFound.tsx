import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home, FileQuestion } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto">
          <div className="relative mb-8">
            <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center animate-float">
              <FileQuestion className="h-16 w-16 text-primary" />
            </div>
            <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-accent/20" />
            <div className="absolute -bottom-2 -left-6 h-12 w-12 rounded-full bg-secondary/30" />
          </div>
          
          <h1 className="font-display text-6xl font-bold gradient-text mb-4">
            404
          </h1>
          
          <h2 className="font-display text-2xl font-semibold mb-2">
            Page not found
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
