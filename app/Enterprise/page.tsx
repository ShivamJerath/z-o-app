import EnterpriseHero from "./components/EnterpriseHero";
import WhyEnterprisesChooseZoiko from "./components/WhyEnterprisesChooseZoiko";
import PlugIntoSystems from "./components/PlugIntoSystems";
import ProvenAtScale from "./components/ProvenAtScale";
import ContactConsultation from "../home/ContactConsultation";
import EnterpriseFAQ from "./components/EnterpriseFAQ";

export default function EnterprisePage() {
  return (
    <main>
        <EnterpriseHero />
        <WhyEnterprisesChooseZoiko />
        <PlugIntoSystems />
        <ProvenAtScale />
        <ContactConsultation />
        <EnterpriseFAQ />
    </main>
  );
}

