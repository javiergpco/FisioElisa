import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-brand-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="/images/logo-fisio.webp" 
                 alt="Logo Clínica de Fisioterapia Elisa Morilla" 
                 className="h-16 md:h-[70px] w-auto object-contain bg-white rounded-lg p-2"
               />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Centro de fisioterapia avanzada especializado en recuperación funcional y dolor crónico. Excelencia médica y trato humano en Chiclana de la Frontera.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-black/20 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-black/20 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
             <h4 className="text-brand-accent font-bold uppercase tracking-wider text-sm">Dónde Estamos</h4>
             <div className="flex gap-3 text-sm text-gray-300">
                <MapPin className="shrink-0 text-brand-accent" size={18} />
                <div>
                  <p>C. de la Plaza, 123</p>
                  <p>11130 Chiclana de la Frontera, Cádiz</p>
                </div>
             </div>
             {/* Map Placeholder */}
             <div className="w-full h-32 bg-black/20 rounded-xl overflow-hidden relative group cursor-pointer">
               <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Mapa" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-brand-primary/90 text-white text-xs px-3 py-1 rounded-full">Ver en Mapa</span>
               </div>
             </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-brand-accent font-bold uppercase tracking-wider text-sm">Contacto</h4>
            <div className="space-y-4">
              <a href="tel:+34677768330" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} className="text-brand-accent" />
                <span>677 76 83 30</span>
              </a>
              <a href="mailto:elisamorillafisio@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} className="text-brand-accent" />
                <span>elisamorillafisio@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <Clock size={18} className="text-brand-accent mt-1" />
                <div>
                  <p>Lun - Jue: 09:00 - 14:00 | 16:00 - 21:00</p>
                  <p>Vie: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 Clínica de Fisioterapia Elisa Morilla. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Aviso Legal</a>
            <a href="#" className="hover:text-gray-300">Privacidad</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};