import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PricingSection } from './components/PricingSection';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SobreElisa } from './components/SobreElisa';
import { Contact } from './components/Contact';
import { BackgroundBubbles } from './components/BackgroundBubbles';
import { TestimonialsSection } from './components/TestimonialsSection';

const App: React.FC = () => {
  // Estado para controlar qué página se muestra
  // Puede ser 'home', 'sobre-elisa' o 'contacto'
  const [pagina, setPagina] = useState<string>('home');

  // Función auxiliar para cambiar página
  const handleNavigate = (page: string) => {
    setPagina(page);
  };

  const renderContent = () => {
    switch (pagina) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <PricingSection />
            <TestimonialsSection />
            <About />
            <ContactSection />
          </>
        );
      case 'sobre-elisa':
        return (
          <SobreElisa 
            onBackToHome={() => setPagina('home')} 
            onNavigateToContact={() => {
              setPagina('home');
              setTimeout(() => {
                const element = document.getElementById('contacto-seccion');
                element?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        );
      case 'contacto':
        return <Contact onBack={() => setPagina('home')} />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <PricingSection />
            <TestimonialsSection />
            <About />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text selection:bg-brand-accent selection:text-brand-secondary flex flex-col relative">
      <BackgroundBubbles />
      
      {/* Navbar Persistente */}
      <Header onNavigate={handleNavigate} currentPage={pagina} />
      
      <main className="flex-grow relative z-10">
        {renderContent()}
      </main>

      {/* Footer y Widgets Persistentes */}
      <div className="relative z-20">
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;