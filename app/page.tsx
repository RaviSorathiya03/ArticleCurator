"use client"
import HeroSection from "@/components/globals/hero-section"
import FeatureSection from "@/components/globals/feature-section"
import BenefitsSection from "@/components/globals/benefits-section"
import TestimonialSection from "@/components/globals/testimonial-section"
import CtaSection from "@/components/globals/cta-section"
import Footer from "@/components/globals/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-background to-background/80">
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

