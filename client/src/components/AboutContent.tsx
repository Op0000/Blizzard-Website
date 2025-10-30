import { Card } from "@/components/ui/card";
import { Brain, Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Blizzard leverages state-of-the-art artificial intelligence to provide smart moderation, content analysis, and automated responses. Our AI learns from your server's unique culture to deliver personalized assistance."
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Built with modern technology and optimized infrastructure, Blizzard responds instantly to commands and handles thousands of concurrent requests without breaking a sweat. Your community deserves speed."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "We take security seriously. Blizzard implements industry-leading security practices, end-to-end encryption, and regular security audits to protect your server and member data."
  },
  {
    icon: Globe,
    title: "Global Availability",
    description: "With servers across multiple continents and 99.9% uptime guarantee, Blizzard is always online and ready to serve your community, no matter where they are in the world."
  }
];

export default function AboutContent() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-about-content">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-testid="text-about-what-is-title">What is Blizzard?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p data-testid="text-about-paragraph-1">
              Blizzard is a next-generation Discord bot designed to revolutionize how communities interact and grow. Born from the need for smarter, more capable moderation and community management tools, Blizzard combines artificial intelligence with powerful automation to create the ultimate Discord companion.
            </p>
            <p data-testid="text-about-paragraph-2">
              Whether you're running a gaming server with thousands of members or a small community of friends, Blizzard adapts to your needs with customizable features, intelligent automation, and an intuitive interface that makes server management effortless.
            </p>
            <p data-testid="text-about-paragraph-3">
              Our mission is simple: empower server owners and moderators with the tools they need to build thriving, safe, and engaging communities without the headaches of manual moderation and repetitive tasks.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-about-why-title">Why Choose Blizzard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="p-6 bg-card/60 backdrop-blur-sm border border-primary/20 hover-elevate"
                data-testid={`card-about-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="relative inline-block mb-4">
                  <feature.icon className="w-10 h-10 text-primary relative z-10" />
                  <div className="absolute inset-0 blur-xl bg-primary/30" />
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-about-feature-title-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-about-feature-description-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6" data-testid="text-about-tech-title">Built with Modern Technology</h2>
          <p className="text-muted-foreground mb-6" data-testid="text-about-tech-description">
            Blizzard is built using cutting-edge technologies to ensure reliability, performance, and scalability:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Discord.js", "Node.js", "TypeScript", "Redis"].map((tech) => (
              <Card 
                key={tech}
                className="p-4 text-center bg-card/40 backdrop-blur-sm border border-primary/20 hover-elevate"
                data-testid={`card-tech-${tech.toLowerCase().replace(/\./g, '')}`}
              >
                <div className="font-semibold text-primary" data-testid={`text-tech-${tech.toLowerCase().replace(/\./g, '')}`}>
                  {tech}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}