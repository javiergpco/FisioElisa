import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PricingSection } from './components/PricingSection';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { AIChatWidget } from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text selection:bg-brand-accent selection:text-brand-secondary">
      <Header />
      <main>
        <Hero />
        <Services />
        <PricingSection />
        <About />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
};

export default App;