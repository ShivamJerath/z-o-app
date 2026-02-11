import TravelHero from "./components/TravelHero";
import WhyPartnerWithUs from "./components/WhyPartnerWithUs";
import IntegrateAndSell from "./components/IntegrateAndSell";
import HowItWorks from "../PersonalTraveller/components/HowItWorks";
import StartPartnershipJourney from "./components/StartPartnershipJourney";

export default function TravelPartnerPage() {
  return (
    <main>
      <TravelHero />
      <WhyPartnerWithUs />
      <HowItWorks />
      <IntegrateAndSell />
      <StartPartnershipJourney />
    </main>
  );
}
