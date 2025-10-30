import FeatureCard from "./FeatureCard";
import { Shield, Zap, Music, TrendingUp, MessageSquare, UserPlus, Ticket, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI Moderation",
    description: "Advanced AI-powered moderation keeps your server safe with intelligent spam detection and automated rule enforcement."
  },
  {
    icon: Zap,
    title: "Custom Commands",
    description: "Create powerful custom commands tailored to your server's needs with an intuitive command builder."
  },
  {
    icon: Music,
    title: "Music Player",
    description: "High-quality music streaming with playlist support, queue management, and seamless playback controls."
  },
  {
    icon: TrendingUp,
    title: "Leveling System",
    description: "Engage your community with customizable XP and leveling systems with role rewards and leaderboards."
  },
  {
    icon: MessageSquare,
    title: "Welcome Messages",
    description: "Greet new members with personalized welcome messages and auto-assign roles for a smooth onboarding."
  },
  {
    icon: UserPlus,
    title: "Auto-Roles",
    description: "Automatically assign roles based on reactions, levels, or custom triggers to organize your community."
  },
  {
    icon: Ticket,
    title: "Support Tickets",
    description: "Professional ticketing system for member support with categories, logging, and staff notifications."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Comprehensive server analytics and insights to track growth, engagement, and member activity."
  },
  {
    icon: Sparkles,
    title: "AI Assistant",
    description: "Powered by cutting-edge AI to answer questions, moderate discussions, and assist your community."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background" data-testid="section-features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid="text-features-title">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            Everything you need to build and manage a thriving Discord community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}