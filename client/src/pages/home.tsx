import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Wrench, Sparkles } from "lucide-react";
import logoImage from "@assets/Screenshot_20251030_184514_Discord_1761830127042.jpg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    console.log('Subscribe clicked with email:', email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative inline-block">
            <img 
              src={logoImage} 
              alt="Blizzard Bot Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative z-10"
              data-testid="img-logo"
            />
            <div className="absolute inset-0 blur-2xl bg-primary/30" />
          </div>

          {/* Title */}
          <h1 
            className="text-6xl sm:text-8xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-primary to-cyan-600 bg-clip-text text-transparent"
            data-testid="text-title"
          >
            Blizzard
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl text-gray-400 mb-20" data-testid="text-subtitle">
            Coming soon...
          </p>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-primary" data-testid="text-features-title">
              Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card 
                className="p-8 bg-gray-900/50 backdrop-blur-sm border border-primary/30 hover-elevate"
                data-testid="card-feature-moderation"
              >
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-primary" data-testid="text-feature-moderation">
                  Moderation
                </h3>
              </Card>

              <Card 
                className="p-8 bg-gray-900/50 backdrop-blur-sm border border-primary/30 hover-elevate"
                data-testid="card-feature-utility"
              >
                <Wrench className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-primary" data-testid="text-feature-utility">
                  Utility
                </h3>
              </Card>

              <Card 
                className="p-8 bg-gray-900/50 backdrop-blur-sm border border-primary/30 hover-elevate"
                data-testid="card-feature-more"
              >
                <Sparkles className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-primary" data-testid="text-feature-more">
                  And More
                </h3>
              </Card>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-primary" data-testid="text-countdown-title">
              Launch Countdown
            </h2>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6" data-testid="countdown-days">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2" data-testid="text-countdown-days">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-gray-400">Days</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6" data-testid="countdown-hours">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2" data-testid="text-countdown-hours">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6" data-testid="countdown-minutes">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2" data-testid="text-countdown-minutes">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/30 rounded-lg p-6" data-testid="countdown-seconds">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2" data-testid="text-countdown-seconds">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="max-w-md mx-auto">
              <p className="text-gray-400 mb-6" data-testid="text-subscribe-description">
                Get alerts, news and sneak peeks
              </p>
              <div className="flex gap-3">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900/50 border-primary/30 focus:border-primary text-white placeholder:text-gray-500"
                  data-testid="input-email"
                />
                <Button 
                  onClick={handleSubscribe}
                  className="bg-primary hover:bg-primary text-white border border-primary-border px-8"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}