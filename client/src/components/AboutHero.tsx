export default function AboutHero() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background" data-testid="section-about-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent" data-testid="text-about-title">
          About Blizzard
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground" data-testid="text-about-subtitle">
          Building the future of Discord community management with cutting-edge AI technology
        </p>
      </div>
    </section>
  );
}