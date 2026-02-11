import BusinessHero from "./components/BusinessHero";
import WhyEnterprisesChooseZoiko from "../Enterprise/components/WhyEnterprisesChooseZoiko";
import SolutionsBuiltForBusiness from "./components/SolutionsBuiltForBusiness";
import SeamlessIntegration from "./components/SeamlessIntegration";
import ContactConsultation from "../home/ContactConsultation";

export default function BEPage() {
  return (
    <main>
      <BusinessHero />
      <WhyEnterprisesChooseZoiko />
      <SolutionsBuiltForBusiness />
      <SeamlessIntegration />
      <ContactConsultation />
    </main>
  );
}
