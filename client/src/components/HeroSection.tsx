import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Futuristic_ice_technology_hero_13fde068.png";
import { Users, Server, Command } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
          data-testid="text-hero-title"
        >
          Supercharge Your Discord Server
        </h1>
        
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          data-testid="text-hero-subtitle"
        >
          Blizzard brings AI-powered moderation, entertainment, and utility to your community with cutting-edge features and seamless integration
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-primary/90 backdrop-blur-md hover:bg-primary text-primary-foreground border border-primary-border"
            data-testid="button-hero-add-to-discord"
            onClick={() => console.log('Add to Discord clicked')}
          >
            Add to Discord
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-background/30"
            data-testid="button-hero-explore-features"
            onClick={() => console.log('Explore Features clicked')}
          >
            Explore Features
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/40 backdrop-blur-md border border-primary/20 hover-elevate" data-testid="card-stat-servers">
            <Server className="w-8 h-8 text-primary mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary mb-1" data-testid="text-stat-servers">50K+</div>
            <div className="text-sm text-muted-foreground">Active Servers</div>
          </Card>
          <Card className="p-6 bg-card/40 backdrop-blur-md border border-primary/20 hover-elevate" data-testid="card-stat-users">
            <Users className="w-8 h-8 text-primary mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary mb-1" data-testid="text-stat-users">5M+</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </Card>
          <Card className="p-6 bg-card/40 backdrop-blur-md border border-primary/20 hover-elevate" data-testid="card-stat-commands">
            <Command className="w-8 h-8 text-primary mb-2 mx-auto" />
            <div className="text-3xl font-bold text-primary mb-1" data-testid="text-stat-commands">100+</div>
            <div className="text-sm text-muted-foreground">Commands</div>
          </Card>
        </div>
      </div>
    </section>
  );
}