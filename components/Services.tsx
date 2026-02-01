import React from 'react';
import { Clock, Euro } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  image: string;
  duration: string;
  price: string;
}

const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Fisioterapia",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "Desde 30 €"
  },
  {
    id: 2,
    title: "Recuperación deportiva",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "Desde 35 €"
  },
  {
    id: 3,
    title: "Recuperación neurológica",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    duration: "45 min",
    price: "40 €"
  },
  {
    id: 4,
    title: "Tecarterapia",
    image: "https://images.unsplash.com/photo-1516549655169-df83a25a8396?q=80&w=2070&auto=format&fit=crop", // Using general physio leg image
    duration: "45 min",
    price: "Desde 35 €"
  },
  {
    id: 5,
    title: "Punción seca y electropunción",
    image: "https://images.unsplash.com/photo-1628140417688-6c8430bd69a0?q=80&w=2070&auto=format&fit=crop", // Needling conceptual
    duration: "45 min",
    price: "Desde 35 €"
  },
  {
    id: 6,
    title: "Diatermia",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop", // Facial/Neck therapy
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 7,
    title: "Ondas de Choque",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop", // Medical device
    duration: "45 min",
    price: "Desde 35 €"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-4 md:px-6">
        
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
                <h4 className="text-lg font-medium text-brand-secondary mb-6 line-clamp-2 min-h-[3.5rem]">
                  {service.title}
                </h4>

                <div className="mt-auto space-y-4">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <div className="flex items-center gap-1.5">
                      <Euro size={14} />
                      <span>{service.price}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="w-fit bg-[#555555] hover:bg-brand-primary text-white text-[10px] uppercase font-bold tracking-wider px-4 py-2.5 rounded-sm transition-colors duration-200">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};