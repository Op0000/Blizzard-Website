import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <CTASection />
      <Footer />
    </div>
  );
}