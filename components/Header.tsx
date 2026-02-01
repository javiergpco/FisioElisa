import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Tarifas', href: '#tarifas' },
    { name: 'Tecnologías', href: '#tecnologias' },
    { name: 'Sobre FisioElisa', href: '#sobre-nosotros' },
  ];

  // Lógica de colores dinámica
  const textColorClass = isScrolled ? 'text-brand-text' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:text-brand-primary' : 'hover:text-brand-accent';
  const logoFilterClass = isScrolled ? '' : 'brightness-0 invert'; // Logotipo blanco al inicio

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="block cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }}>
             <img 
               src="/images/logo-fisio.webp" 
               alt="FisioElisa - Clínica de Fisioterapia" 
               className={`h-14 md:h-20 w-auto object-contain transition-all duration-300 ${logoFilterClass}`}
               width="200"
               height="80"
             />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${textColorClass} ${hoverColorClass}`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="py-2 px-5 text-sm">Pedir Cita</Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg shadow-lg border-t border-gray-200 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-brand-text py-2 border-b border-gray-100 hover:text-brand-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full justify-center">Pedir Cita</Button>
        </div>
      )}
    </header>
  );
};