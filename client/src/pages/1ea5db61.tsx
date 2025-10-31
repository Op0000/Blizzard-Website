import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Shield, Wrench, Sparkles, Info } from "lucide-react";
import logoImage from "@assets/Screenshot_20251030_184514_Discord_1761830127042.jpg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fixed target date - Set this to your actual launch date
    // This ensures the countdown is the same for everyone, always
    const targetDate = new Date("2025-11-15T00:00:00"); // Change this to your launch date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setSubscribeStatus("error");
      return;
    }

    try {
      // Send email to your backend
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribeStatus("success");
        setEmail("");
        setTimeout(() => setSubscribeStatus("idle"), 3000);
      } else {
        setSubscribeStatus("error");
        setTimeout(() => setSubscribeStatus("idle"), 3000);
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background shapes and decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orbs */}
        <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-cyan-500/20 to-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-tl from-primary/15 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-60 sm:w-80 h-60 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-40 right-1/4 w-20 sm:w-32 h-20 sm:h-32 border-2 border-primary/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-1/4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-cyan-400/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-20 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary/20 to-transparent rotate-12 animate-pulse" />
        
        {/* Discord-style decorative elements */}
        <div className="absolute top-60 left-20 opacity-10 hidden sm:block">
          <svg width="80" height="80" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 right-32 opacity-10 hidden sm:block">
          <svg width="60" height="60" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Particle effects */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Support button - fixed position, responsive */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <Link href="/support" data-testid="link-support">
          <Button 
            className="bg-primary/90 backdrop-blur-md hover:bg-primary text-white border border-primary-border shadow-lg shadow-primary/20 text-sm sm:text-base px-3 sm:px-4 py-2"
            data-testid="button-support"
          >
            <Info className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Support & Info</span>
            <span className="sm:hidden">Info</span>
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center max-w-4xl mx-auto w-full">
          {/* Logo with enhanced glow */}
          <div className="mb-6 sm:mb-8 relative inline-block">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-cyan-500/40 via-primary/40 to-cyan-600/40 animate-pulse" />
            <img 
              src={logoImage} 
              alt="Blizzard Bot Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative z-10 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              data-testid="img-logo"
            />
            {/* Rotating ring around logo */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-2 sm:inset-4 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>

          {/* Title with enhanced effects */}
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-primary to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            data-testid="text-title"
            style={{ 
              textShadow: '0 0 80px rgba(6, 182, 212, 0.3), 0 0 120px rgba(6, 182, 212, 0.2)'
            }}
          >
            Blizzard
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 mb-12 sm:mb-16 lg:mb-20 animate-pulse" data-testid="text-subtitle">
            Coming soon...
          </p>

          {/* Features Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent" data-testid="text-features-title">
              Features
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <Card 
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-sm border-2 border-primary/40 hover-elevate relative overflow-hidden group"
                data-testid="card-feature-moderation"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary mb-3 sm:mb-4 mx-auto relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-primary relative z-10" data-testid="text-feature-moderation">
                  Moderation
                </h3>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </Card>

              <Card 
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-sm border-2 border-primary/40 hover-elevate relative overflow-hidden group"
                data-testid="card-feature-utility"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Wrench className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary mb-3 sm:mb-4 mx-auto relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-primary relative z-10" data-testid="text-feature-utility">
                  Utility
                </h3>
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
              </Card>

              <Card 
                className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-sm border-2 border-primary/40 hover-elevate relative overflow-hidden group sm:col-span-1 col-span-1"
                data-testid="card-feature-more"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary mb-3 sm:mb-4 mx-auto relative z-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <h3 className="text-lg sm:text-xl font-semibold text-primary relative z-10" data-testid="text-feature-more">
                  And More
                </h3>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </Card>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent" data-testid="text-countdown-title">
              Launch Countdown
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 sm:mb-12">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border-2 border-primary/40 rounded-lg p-4 sm:p-6 relative overflow-hidden group" data-testid="countdown-days">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2 relative z-10" data-testid="text-countdown-days">
                  {timeLeft.days}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 relative z-10">Days</div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border-2 border-primary/40 rounded-lg p-4 sm:p-6 relative overflow-hidden group" data-testid="countdown-hours">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2 relative z-10" data-testid="text-countdown-hours">
                  {timeLeft.hours}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 relative z-10">Hours</div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl" />
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border-2 border-primary/40 rounded-lg p-4 sm:p-6 relative overflow-hidden group" data-testid="countdown-minutes">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2 relative z-10" data-testid="text-countdown-minutes">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 relative z-10">Minutes</div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border-2 border-primary/40 rounded-lg p-4 sm:p-6 relative overflow-hidden group" data-testid="countdown-seconds">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2 relative z-10" data-testid="text-countdown-seconds">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 relative z-10">Seconds</div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="max-w-md mx-auto relative px-4">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyan-400/20 to-primary/20 blur-2xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-md border-2 border-primary/40 rounded-lg p-4 sm:p-6">
                <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg" data-testid="text-subscribe-description">
                  Get alerts, news and sneak peeks
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    className="bg-black/50 border-primary/50 focus:border-primary text-white placeholder:text-gray-500 text-sm sm:text-base"
                    data-testid="input-email"
                  />
                  <Button 
                    onClick={handleSubscribe}
                    className="bg-primary hover:bg-primary text-black font-semibold border border-primary-border px-6 sm:px-8 shadow-lg shadow-primary/30 text-sm sm:text-base whitespace-nowrap"
                    data-testid="button-subscribe"
                  >
                    Subscribe
                  </Button>
                </div>
                
                {/* Status Messages */}
                {subscribeStatus === "success" && (
                  <p className="mt-3 text-green-400 text-sm text-center">✓ Successfully subscribed!</p>
                )}
                {subscribeStatus === "error" && (
                  <p className="mt-3 text-red-400 text-sm text-center">✗ Please enter a valid email</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
