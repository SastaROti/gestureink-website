import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gestures from './components/Gestures';
import Privacy from './components/Privacy';
import Download from './components/Download';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BootAnimation from './components/BootAnimation';
import LiveBackground from './components/LiveBackground';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && <BootAnimation onComplete={() => setBootComplete(true)} />}
      
      {bootComplete && (
        <div className="relative min-h-screen bg-[#08080C] text-[#F4F1FF] overflow-hidden">
          <LiveBackground />
          <div className="relative z-10">
            <Hero />
            <Features />
            <HowItWorks />
            <Gestures />
            <Privacy />
            <Download />
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
