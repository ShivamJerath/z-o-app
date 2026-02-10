import PersonalTravellerHero from "./components/PersonalTravellerHero";
import HowItWorks from "./components/HowItWorks";
import PlanFinder from "../components/home/PlanFinder";
import PlansEuropeUK from "./components/PlansEuropeUK";
import WhyChooseZoikoOrbit from "./components/WhyChooseZoikoOrbit";
import DestinationSelector from "./components/DestinationSelector";
import LovedByTravelers from "./components/LovedByTravelers";
import FAQSection from "./components/FAQSection";
import ExperienceFuture from "./components/ExperienceFuture";

export default function AboutPage() {
  return (
    <main>
      <PersonalTravellerHero />
      <HowItWorks />
      <PlanFinder />
      <PlansEuropeUK />
      <WhyChooseZoikoOrbit />
      <DestinationSelector />
      <LovedByTravelers />
      <FAQSection />
      <ExperienceFuture />
    </main>
  );
}

