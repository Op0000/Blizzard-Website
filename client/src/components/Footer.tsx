import { Link } from "wouter";
import { Snowflake } from "lucide-react";
import { SiDiscord, SiTwitter, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8 bg-background" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Snowflake className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 blur-lg bg-primary/30" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Blizzard
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              AI-powered Discord bot for modern communities
            </p>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-discord"
                onClick={() => console.log('Discord clicked')}
              >
                <SiDiscord className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <SiTwitter className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-social-github"
                onClick={() => console.log('GitHub clicked')}
              >
                <SiGithub className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" data-testid="link-footer-home">
                <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/about" data-testid="link-footer-about">
                <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  About
                </div>
              </Link>
              <div 
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={() => console.log('Documentation clicked')}
                data-testid="link-footer-docs"
              >
                Documentation
              </div>
              <div 
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={() => console.log('Support clicked')}
                data-testid="link-footer-support"
              >
                Support
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-legal-title">Legal</h3>
            <div className="space-y-2">
              <div 
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={() => console.log('Privacy Policy clicked')}
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </div>
              <div 
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                onClick={() => console.log('Terms of Service clicked')}
                data-testid="link-footer-terms"
              >
                Terms of Service
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
          © {new Date().getFullYear()} Blizzard Discord Bot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}