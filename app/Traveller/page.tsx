import StayConnectedHero from "./components/StayConnectedHero";
import HowItWorks from "../PersonalTraveller/components/HowItWorks";
import WhyChooseZoikoOrbit from "../PersonalTraveller/components/WhyChooseZoikoOrbit";
import DestinationSelector from "../PersonalTraveller/components/DestinationSelector";
import CustomerFeedback from "../home/CustomerFeedback";
import FAQSection from "../PersonalTraveller/components/FAQSection";
import ExperienceFuture from "../PersonalTraveller/components/ExperienceFuture";

export default function TravellerPage() {
  return (
    <main>
      <StayConnectedHero />
      <HowItWorks />
      <WhyChooseZoikoOrbit />
      <DestinationSelector />
      <CustomerFeedback />
      <FAQSection />
        <ExperienceFuture />
      
    </main>
  );
}

