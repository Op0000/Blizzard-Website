import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card 
      className="p-6 bg-card/60 backdrop-blur-sm border border-primary/20 hover-elevate active-elevate-2 transition-all cursor-pointer group"
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative inline-block mb-4">
        <Icon className="w-12 h-12 text-primary relative z-10" />
        <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-primary/50 transition-all" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2" data-testid={`text-feature-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h3>
      
      <p className="text-muted-foreground" data-testid={`text-feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </Card>
  );
}