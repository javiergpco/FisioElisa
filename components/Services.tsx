import React from 'react';
import { Clock, Euro } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
}

const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Fisioterapia",
    description: "Valoración y tratamiento personalizado mediante terapia manual y ejercicio terapéutico para aliviar el dolor musculoesquelético y restaurar la función.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 2,
    title: "Recuperación deportiva",
    description: "Readaptación funcional específica para deportistas. Enfocada en la prevención de recaídas y la vuelta segura a la competición tras una lesión.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 3,
    title: "Recuperación neurológica",
    description: "Tratamiento especializado para pacientes con daño cerebral adquirido o enfermedades neurodegenerativas (Ictus, Parkinson) para mejorar la autonomía.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 4,
    title: "Tecarterapia",
    description: "Tecnología avanzada (Indiba) que acelera los mecanismos naturales de regeneración del tejido y alivia el dolor desde la primera sesión.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a25a8396?q=80&w=2070&auto=format&fit=crop", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 5,
    title: "Punción seca y electropunción",
    description: "Técnicas invasivas ecoguíadas altamente efectivas para el tratamiento del síndrome de dolor miofascial, puntos gatillo y contracturas resistentes.",
    image: "https://images.unsplash.com/photo-1628140417688-6c8430bd69a0?q=80&w=2070&auto=format&fit=crop", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 6,
    title: "Diatermia",
    description: "Tratamientos estéticos faciales y corporales que mejoran la calidad de la piel, favorecen la producción de colágeno y la regeneración celular.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop", 
    duration: "45 min",
    price: "Desde 50 €"
  },
  {
    id: 7,
    title: "Ondas de Choque",
    description: "Terapia acústica de alta energía ideal para tratar tendinopatías crónicas, fascitis plantar y disolver calcificaciones de forma no invasiva.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop", 
    duration: "45 min",
    price: "Desde 40 €"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-brand-beige/95 scroll-mt-28 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Tratamientos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary">Nuestros Servicios</h3>
        </div>

        {/* Grid Layout matching the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="group bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col">
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-medium text-brand-secondary mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50">
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded">
                      <Clock size={14} className="text-brand-primary" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded">
                      <Euro size={14} className="text-brand-primary" />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};