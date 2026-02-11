import {
  MessageSquareText,
  Cpu,
  Wrench,
  MessagesSquare,
  ListChecks,
  Users,
  PlayCircle,
} from "lucide-react";
import { AiOutlineRobot, AiOutlineCalendar } from "react-icons/ai";
import FAQSection from "./home/FAQSection";
import BlackFridayHero from "./home/BlackFridayHero";
import ConnectingHearts from "./home/ConnectingHearts";
import PlanFinder from "./home/PlanFinder";
import GlobalCoverage from "./home/GlobalCoverage";
import JourneyPromo from "./home/JourneyPromo";
import ContactConsultation from "./home/ContactConsultation";
import CustomerFeedback from "./home/CustomerFeedback";

/* ================= FEATURE PROPS TYPE ================= */
type FeatureProps = {
  icon: React.ElementType;
  text: string;
};

/* ================= PAGE ================= */
export default function HomePage() {
  return (
    <main>
      <BlackFridayHero />
      <ConnectingHearts />
      <PlanFinder />
      <GlobalCoverage />
      <JourneyPromo />
      <FAQSection />
      <ContactConsultation />
      <CustomerFeedback />
    </main>
  );
}

/* ================= FEATURE COMPONENT ================= */
function Feature({ icon: Icon, text }: FeatureProps) {
  return (
    <div>
      <div className="mx-auto w-20 h-20 bg-[#00718A] rounded-full flex items-center justify-center mb-6">
        <Icon className="w-9 h-9 text-white" />
      </div>
      <p className="text-[16px] text-gray-700 leading-relaxed max-w-[420px] mx-auto">
        {text}
      </p>
    </div>
  );
}
