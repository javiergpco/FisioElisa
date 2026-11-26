import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/fisioelisa_/';
import { Button } from './Button';

// Definimos la interfaz de las props para recibir la función de navegación
interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para manejar clicks en el menú
  const handleLinkClick = (page: string, anchorId?: string) => {
    setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto
    
    if (page === 'home') {
      onNavigate('home');
      // Si hay un ancla (#servicios), intentamos hacer scroll después de un pequeño delay
      // para asegurar que el componente Home se ha renderizado
      if (anchorId) {
        setTimeout(() => {
          const element = document.querySelector(anchorId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  // Definición de enlaces con su destino
  const navLinks = [
    { name: 'Servicios', page: 'home', anchor: '#servicios' },
    { name: 'Tarifas', page: 'home', anchor: '#tarifas' },
    { name: 'Sobre FisioElisa', page: 'sobre-elisa', anchor: undefined },
  ];

  // Estilos dinámicos: Si estamos en "Sobre Elisa" o "Contacto" o hemos hecho scroll, fondo sólido
  const forceSolidBg = currentPage === 'sobre-elisa' || currentPage === 'contacto';
  const showSolid = isScrolled || forceSolidBg;

  const textColorClass = showSolid ? 'text-brand-text' : 'text-white';
  const hoverColorClass = showSolid ? 'hover:text-brand-primary' : 'hover:text-brand-accent';
  const logoFilterClass = showSolid ? '' : 'brightness-0 invert';
  // Botón de Instagram: contorno blanco sobre la portada, color de marca con fondo sólido
  const instagramClass = showSolid
    ? 'border-brand-primary/40 text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary'
    : 'border-white/40 text-white hover:bg-white/15 hover:border-white';
  const bgClass = showSolid 
    ? 'bg-brand-bg/95 backdrop-blur-sm shadow-md py-1.5 md:py-1' 
    : 'bg-transparent py-5';

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="block cursor-pointer focus:outline-none"
          >
             <img 
               src="/images/logo-fisio.png" 
               alt="FisioElisa - Clínica de Fisioterapia" 
               className={`w-auto object-contain transition-all duration-500 ${
                 showSolid ? 'h-14 md:h-[76px]' : 'h-28 md:h-40'
               } ${logoFilterClass}`}
               width="240"
               height="112"
             />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.page, link.anchor)}
                className={`text-sm font-medium transition-colors focus:outline-none ${textColorClass} ${hoverColorClass} ${
                  currentPage === link.page && !link.anchor ? 'font-bold' : ''
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de FisioElisa (se abre en una pestaña nueva)"
              className={`inline-flex items-center gap-2 rounded-full border py-2 px-4 text-sm font-medium transition-colors ${instagramClass}`}
            >
              <Instagram size={16} />
              Instagram
            </a>
            <Button 
              variant="primary" 
              className="py-2 px-5 text-sm"
              onClick={() => handleLinkClick('contacto')}
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile: Instagram (fuera del desplegable) + hamburguesa */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de FisioElisa (se abre en una pestaña nueva)"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${instagramClass}`}
            >
              <Instagram size={20} />
            </a>
            <button 
              className={`p-2 transition-colors ${textColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg shadow-lg border-t border-gray-200 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleLinkClick(link.page, link.anchor)}
              className="text-base font-medium text-brand-text py-2 border-b border-gray-100 hover:text-brand-primary text-left"
            >
              {link.name}
            </button>
          ))}
          <Button 
            variant="primary" 
            className="w-full justify-center"
            onClick={() => handleLinkClick('contacto')}
          >
            Contacto
          </Button>
        </div>
      )}
    </header>
  );
};