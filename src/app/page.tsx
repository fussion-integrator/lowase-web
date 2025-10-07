import HeroSection from '@/components/landing/hero-section';
import StartupHero from '@/components/landing/startup-hero';
import FeaturesShowcase from '@/components/landing/features-showcase';
import ConsultantMarketplace from '@/components/landing/consultant-marketplace';
import PitchOptimizer from '@/components/landing/pitch-optimizer';
import VCReadinessQuiz from '@/components/landing/vc-readiness-quiz';
import SuccessStories from '@/components/landing/success-stories';
import CTASection from '@/components/landing/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesShowcase />
      <StartupHero />
      <ConsultantMarketplace />
      <PitchOptimizer />
      <VCReadinessQuiz />
      <SuccessStories />
      <CTASection />
    </>
  );
}