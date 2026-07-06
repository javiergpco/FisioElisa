import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-brand-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                 src="/images/logo-fisio.png" 
                 alt="Logo Clínica de Fisioterapia Elisa Morilla" 
                 className="h-20 md:h-[90px] w-auto object-contain brightness-0 invert"
               />
            </div>
            <p className="text-brand-beige text-sm leading-relaxed max-w-sm opacity-90">
              Centro de fisioterapia avanzada especializado en recuperación funcional y dolor crónico. Excelencia médica y trato humano en Chiclana de la Frontera.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fisioelisa_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/20 p-2 rounded-full hover:bg-brand-secondary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Location & Map */}
          <div className="space-y-6">
             <h4 className="text-brand-beige font-bold uppercase tracking-wider text-sm">Dónde Estamos</h4>
             <div className="flex gap-3 text-sm text-brand-beige opacity-90">
                <MapPin className="shrink-0 text-brand-beige" size={18} />
                <div>
                  <p>Centro Comercial Las Redes. Portal 1, Local 31</p>
                  <p>11130 Chiclana de la Frontera (Cádiz)</p>
                </div>
             </div>
             
             {/* Google Maps Iframe */}
             <div className="w-full h-40 bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-white/10">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.156050007301!2d-6.147440223455165!3d36.4296091723551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c3498807cf48b%3A0x113aa7c4b3a6d47e!2scentro%20comercial%20las%20redes!5e0!3m2!1ses!2ses!4v1783340154601!5m2!1ses!2ses" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Mapa Ubicación Clínica"
               ></iframe>
             </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-brand-beige font-bold uppercase tracking-wider text-sm">Contacto</h4>
            <div className="space-y-4">
              <a href="tel:+34677768330" className="flex items-center gap-3 text-brand-beige opacity-90 hover:opacity-100 transition-opacity">
                <Phone size={18} className="text-brand-beige" />
                <span>677 76 83 30</span>
              </a>
              <a href="mailto:elisamorillafisio@gmail.com" className="flex items-center gap-3 text-brand-beige opacity-90 hover:opacity-100 transition-opacity">
                <Mail size={18} className="text-brand-beige" />
                <span>elisamorillafisio@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-brand-beige opacity-90">
                <Clock size={18} className="text-brand-beige mt-1" />
                <div>
                  <p>Lun - Jue: 09:00 - 14:00 | 16:00 - 21:00</p>
                  <p>Vie: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-beige opacity-85">
          <p>© 2026 Clínica de Fisioterapia Elisa Morilla. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};