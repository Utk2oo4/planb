import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyPlanB from './components/WhyPlanB';
import CareerOpportunities from './components/CareerOpportunities';
import IsPlanBForYou from './components/IsPlanBForYou';
import HiringPartners from './components/HiringPartners';
import PlacementStats from './components/PlacementStats';
import Testimonials from './components/Testimonials';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyPlanB />
        <IsPlanBForYou />
        <CareerOpportunities />
        <HiringPartners />
        <PlacementStats />
        <Testimonials />
      </main>
    </>
  );
}
