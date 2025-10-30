import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Users, Crown, Code } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export default function Support() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionsRef.current[index]) {
          observer.unobserve(sectionsRef.current[index]!);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/15 to-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-primary/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Home button */}
      <div className="fixed top-6 right-6 z-50">
        <Link href="/" data-testid="link-home">
          <Button 
            className="bg-primary/90 backdrop-blur-md hover:bg-primary text-black font-semibold border border-primary-border shadow-lg shadow-primary/20"
            data-testid="button-home"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-primary to-cyan-600 bg-clip-text text-transparent"
            data-testid="text-title"
            style={{ 
              textShadow: '0 0 80px rgba(6, 182, 212, 0.3)'
            }}
          >
            Support & Info
          </h1>
        </div>
      </section>

      {/* Section 1: About */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 opacity-0"
        data-testid="section-about"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-md border-2 border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed" data-testid="text-about-description">
                Blizzard is a revolutionary Discord bot designed to transform your server experience with cutting-edge AI technology and powerful automation. Built for communities of all sizes, Blizzard combines intelligent moderation with versatile utility features to create safer, more engaging Discord environments. Whether you're managing a gaming clan, study group, or creative community, Blizzard adapts to your needs with customizable commands, smart content filtering, and seamless integration. Our advanced algorithms work tirelessly to maintain server quality while our intuitive tools empower moderators and delight members. Experience the future of Discord server management with Blizzard.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2: Discord Server */}
      <section 
        ref={(el) => sectionsRef.current[1] = el}
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 opacity-0"
        data-testid="section-discord"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-primary to-cyan-600 bg-clip-text text-transparent"
            data-testid="text-discord-title"
          >
            Join Discord Server
          </h2>
          
          <p className="text-xl text-gray-400 mb-8" data-testid="text-discord-description">
            Join Discord server for regular updates, support and info
          </p>

          <a 
            href="https://discord.gg/GMXcZD6H3F" 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="link-discord-join"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary text-black font-bold text-lg px-8 py-6 border border-primary-border shadow-lg shadow-primary/30 relative overflow-hidden group"
              data-testid="button-discord-join"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <SiDiscord className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10">Join Now</span>
            </Button>
          </a>
        </div>
      </section>

      {/* Section 3: Team */}
      <section 
        ref={(el) => sectionsRef.current[2] = el}
        className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 pb-32 opacity-0"
        data-testid="section-team"
      >
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-5xl sm:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-primary to-cyan-600 bg-clip-text text-transparent"
            data-testid="text-team-title"
          >
            Team Info
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aizen - Owner */}
            <Card 
              className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md border-2 border-primary/40 hover-elevate relative overflow-hidden group"
              data-testid="card-team-aizen"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Crown className="w-12 h-12 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2" data-testid="text-team-aizen-name">
                  Aizen
                </h3>
                <p className="text-gray-400 text-lg" data-testid="text-team-aizen-role">
                  Owner
                </p>
              </div>
            </Card>

            {/* Raghav - Lead Dev */}
            <Card 
              className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md border-2 border-primary/40 hover-elevate relative overflow-hidden group"
              data-testid="card-team-raghav"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-primary flex items-center justify-center shadow-lg shadow-cyan-400/30">
                    <Code className="w-12 h-12 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2" data-testid="text-team-raghav-name">
                  Raghav (UNG)
                </h3>
                <p className="text-gray-400 text-lg" data-testid="text-team-raghav-role">
                  Lead Developer
                </p>
                <p className="text-gray-500 text-sm mt-1" data-testid="text-team-raghav-role-2">
                  Senior Project Head
                </p>
              </div>
            </Card>

            {/* Zaya - Project Head */}
            <Card 
              className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md border-2 border-primary/40 hover-elevate relative overflow-hidden group"
              data-testid="card-team-zaya"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-lg shadow-primary/30">
                    <Users className="w-12 h-12 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2" data-testid="text-team-zaya-name">
                  Zaya
                </h3>
                <p className="text-gray-400 text-lg" data-testid="text-team-zaya-role">
                  Project Head
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}