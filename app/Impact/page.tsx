import ImpactHero from "./components/ImpactHero";
import HowWeGiveBack from "./components/HowWeGiveBack";
import RealStoriesSection from "./components/RealStoriesSection";
import ImpactStatsSection from "./components/ImpactStatsSection";
import PartnerFeedback from "./components/PartnerFeedback";

export default function AboutPage() {
  return (
    <main>
      <ImpactHero />
      <HowWeGiveBack />
      <RealStoriesSection />
      <ImpactStatsSection />
      <PartnerFeedback />
    </main>
  );
}

