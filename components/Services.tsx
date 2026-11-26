import React, { useState } from 'react';
import { Clock, Euro } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  duration?: string;
  price: string;
  highlights?: string[];
}

const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: "Fisioterapia",
    description: "Valoración y tratamiento personalizado mediante terapia manual y ejercicio terapéutico para aliviar el dolor musculoesquelético y restaurar la función.",
    image: "/images/service-1.webp",
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 2,
    title: "Recuperación deportiva",
    description: "Readaptación funcional específica para deportistas. Enfocada en la prevención de recaídas y la vuelta segura a la competición tras una lesión.",
    image: "/images/service-2.webp",
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 3,
    title: "Recuperación neurológica",
    description: "Tratamiento especializado para pacientes con daño cerebral adquirido o enfermedades neurodegenerativas (Ictus, Parkinson) para mejorar la autonomía.",
    image: "/images/service-3.webp",
    duration: "45 min",
    price: "Desde 45 €"
  },
  {
    id: 4,
    title: "Tecarterapia",
    description: "Tecnología avanzada (Winback) que acelera los mecanismos naturales de regeneración del tejido y alivia el dolor desde la primera sesión.",
    image: "/images/service-4.webp", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 5,
    title: "Punción seca y electropunción",
    description: "Técnicas invasivas ecoguíadas altamente efectivas para el tratamiento del síndrome de dolor miofascial, puntos gatillo y contracturas resistentes.",
    image: "/images/service-5.webp", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 6,
    title: "Diatermia",
    description: "Tratamientos estéticos faciales y corporales que mejoran la calidad de la piel, favorecen la producción de colágeno y la regeneración celular.",
    image: "/images/service-6.webp", 
    duration: "45 min",
    price: "Desde 50 €"
  },
  {
    id: 7,
    title: "Ondas de Choque",
    description: "Terapia acústica de alta energía ideal para tratar tendinopatías crónicas, fascitis plantar y disolver calcificaciones de forma no invasiva.",
    image: "/images/service-7.webp", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 8,
    title: "Neuromodulación",
    description: "Técnica avanzada que normaliza la función del sistema nervioso mediante estimulación eléctrica ecoguiada, tratando el dolor crónico de raíz.",
    image: "/images/service-8.webp", 
    duration: "45 min",
    price: "Desde 40 €"
  },
  {
    id: 9,
    title: "Presoterapia",
    description: "Botas Bootech de 8 cámaras de aire que se inflan y desinflan para aplicar presión por zonas. Ajustamos la presión y el objetivo de cada sesión a lo que necesitas.",
    image: "/images/service-9.webp",
    price: "20 € / sesión",
    highlights: ["Linfedema", "Lipedema", "Drenaje linfático", "Celulitis", "Descarga tras correr"]
  },
  {
    id: 10,
    title: "Sistema Superinductivo SIS",
    description: "Campo electromagnético de alta intensidad (BTL) que actúa sobre nervios y músculos sin contacto y sobre la ropa. Lo integramos en tu rehabilitación para aliviar el dolor y recuperar movilidad.",
    image: "/images/service-10.webp",
    price: "Desde 40 €",
    highlights: ["Alivio del dolor", "Movilización articular", "Miostimulación", "Espasticidad"]
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
          
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`${
                // Si la última fila queda con una sola tarjeta, la centramos
                index === SERVICES_DATA.length - 1 && SERVICES_DATA.length % 3 === 1 ? 'lg:col-start-2 ' : ''
              }group bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 flex flex-col`}
            >

              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
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

                {service.highlights && (
                  <ul className="flex flex-wrap gap-1.5 mb-6" aria-label={`Indicaciones de ${service.title}`}>
                    {service.highlights.map((item) => (
                      <li key={item} className="text-[11px] font-medium text-brand-secondary bg-brand-bg border border-brand-primary/20 px-2 py-0.5 rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-4 border-t border-gray-50">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 font-medium">
                    {service.duration && (
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded">
                        <Clock size={14} className="text-brand-primary" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded ml-auto">
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