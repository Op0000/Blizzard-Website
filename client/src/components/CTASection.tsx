import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" data-testid="section-cta">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-cta-title">
          Ready to Transform Your Server?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8" data-testid="text-cta-subtitle">
          Join thousands of communities already using Blizzard. Setup takes less than 60 seconds.
        </p>

        <Button 
          size="lg"
          className="bg-primary hover:bg-primary text-primary-foreground border border-primary-border text-lg px-8"
          data-testid="button-cta-add-to-discord"
          onClick={() => console.log('Add to Discord clicked')}
        >
          Add to Discord
        </Button>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            ✓ Free Forever
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            ✓ Trusted by 50K+ Servers
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            ✓ 24/7 Uptime
          </span>
        </div>
      </div>
    </section>
  );
}