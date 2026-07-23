import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { ValuePillars } from './components/home/ValuePillars';
import { HowItWorks } from './components/home/HowItWorks';
import { AudienceSplit } from './components/home/AudienceSplit';
import { FinalCTA } from './components/home/FinalCTA';
import './styles/global.css';

// Faz o scroll suave aos links internos da página
export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-bg text-textDark selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <ValuePillars />
        <HowItWorks />
        <AudienceSplit />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}