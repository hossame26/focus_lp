import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesStack from './components/FeaturesStack';
import InteractiveFeatures from './components/InteractiveFeatures';
import ThematicGrid from './components/ThematicGrid';
import PricingSection from './components/PricingSection';
import BridgeProof from './components/BridgeProof';


function App() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-white overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturesStack />
        <InteractiveFeatures />
        <ThematicGrid />
        <BridgeProof />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;