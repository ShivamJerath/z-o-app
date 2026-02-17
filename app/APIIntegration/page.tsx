import DeveloperPlatformSection from "./components/DeveloperPlatformSection";
import BuildWithUsSection from "./components/BuildWithUsSection";
import DeveloperArchitectureSection from "./components/DeveloperArchitectureSection";
import ApiBottom from "./components/ApiBottom";

export default function APIPage() {
  return (
    <main>
      <DeveloperPlatformSection />
      <BuildWithUsSection />
      <DeveloperArchitectureSection />
      <ApiBottom />
    </main>
  );
}
