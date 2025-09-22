import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechFeaturesSection from "@/components/TechFeaturesSection";
import PricingSection from "@/components/PricingSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ImplementationSection from "@/components/ImplementationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add fade-in-up animation to sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ValuePropsSection />
      <UseCasesSection />
      <TechFeaturesSection />
      <SuccessStoriesSection />
      <PricingSection />
      <ImplementationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
