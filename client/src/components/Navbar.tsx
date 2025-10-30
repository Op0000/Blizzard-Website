import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Snowflake } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md cursor-pointer">
              <div className="relative">
                <Snowflake className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 blur-lg bg-primary/30" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Blizzard
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link href="/" data-testid="link-nav-home">
              <Button variant="ghost" size="sm" data-testid="button-nav-home">
                Home
              </Button>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <Button variant="ghost" size="sm" data-testid="button-nav-about">
                About
              </Button>
            </Link>
          </div>

          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary text-primary-foreground border border-primary-border"
              data-testid="button-add-to-discord"
              onClick={() => console.log('Add to Discord clicked')}
            >
              Add to Discord
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" data-testid="link-mobile-home">
              <Button 
                variant="ghost" 
                className="w-full justify-start" 
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-home"
              >
                Home
              </Button>
            </Link>
            <Link href="/about" data-testid="link-mobile-about">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-about"
              >
                About
              </Button>
            </Link>
            <Button 
              className="w-full bg-primary hover:bg-primary text-primary-foreground border border-primary-border"
              data-testid="button-mobile-add-to-discord"
              onClick={() => {
                console.log('Add to Discord clicked');
                setIsMobileMenuOpen(false);
              }}
            >
              Add to Discord
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}