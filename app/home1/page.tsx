import StayConnectedHero from "./components/StayConnectedHero";
import PlanFinder from "../home/PlanFinder";
import InnovationSection from "./components/InnovationSection";
import EcosystemPartners from "./components/EcosystemPartners";
import GlobalCoverage from "../home/GlobalCoverage";
import TravelFutureSection from "./components/TravelFutureSection";
import CustomerFeedback from "../home/CustomerFeedback";
import TrustedLeadersSection from "./components/TrustedLeadersSection";

export default function HomePage() {
  return (
    <main>
      <StayConnectedHero />
      <PlanFinder />
      <InnovationSection />
      <EcosystemPartners />
      <GlobalCoverage />
      <TravelFutureSection />
      <CustomerFeedback />
      <TrustedLeadersSection />
    </main>
  );
}
