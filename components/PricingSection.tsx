import React, { useState } from 'react';
import { Check, MessageCircle, Sparkles, Activity, User, Zap, Target, Dumbbell, Brain } from 'lucide-react';

// Definición de tipos para los datos
type CategoryId = 'fisio' | 'neuro' | 'diatermia' | 'especializadas';

interface PricingOption {
  sessions: number;
  price: number;
  label?: string; // Para casos específicos como "Abdomen"
  basePriceRef?: number; // Precio base de 1 sesión para calcular ahorros (opcional)
}

interface Treatment {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  options: PricingOption[];
  icon: React.ReactNode;
  popular?: boolean;
}

// Datos oficiales
const PRICING_DATA: Treatment[] = [
  // FISIOTERAPIA
  {
    id: 'fisio-general',
    title: "Fisioterapia Avanzada",
    description: "Terapia manual combinada con tecnología según necesidad.",
    category: 'fisio',
    icon: <Activity className="w-6 h-6" />,
    popular: true,
    options: [
      { sessions: 1, price: 40 },
      { sessions: 2, price: 70, basePriceRef: 40 },
      { sessions: 5, price: 160, basePriceRef: 40 },
    ]
  },
  
  // NEUROLOGÍA
  {
    id: 'neuro',
    title: "Rehabilitación Neurológica",
    description: "Tratamiento especializado para patologías del sistema nervioso.",
    category: 'neuro',
    icon: <User className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 45 }
    ]
  },

  // TERAPIAS ESPECIALIZADAS (NUEVO)
  {
    id: 'recuperacion-deportiva',
    title: "Recuperación Deportiva",
    description: "Readaptación funcional tras lesiones para volver al rendimiento óptimo.",
    category: 'especializadas',
    icon: <Dumbbell className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 40 }
    ]
  },
  {
    id: 'neuromodulacion',
    title: "Neuromodulación",
    description: "Estimulación eléctrica ecoguiada para normalizar la función nerviosa.",
    category: 'especializadas',
    icon: <Brain className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 40 }
    ]
  },
  {
    id: 'tecarterapia',
    title: "Tecarterapia (Winback)",
    description: "Acelera los procesos naturales de reparación del tejido.",
    category: 'especializadas',
    icon: <Zap className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 40 }
    ]
  },
  {
    id: 'ondas-choque',
    title: "Ondas de Choque",
    description: "Tratamiento de elección para tendinopatías y calcificaciones.",
    category: 'especializadas',
    icon: <Activity className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 40 }
    ]
  },
  {
    id: 'puncion-seca',
    title: "Punción Seca y Electropunción",
    description: "Técnica invasiva para el tratamiento del dolor miofascial.",
    category: 'especializadas',
    icon: <Target className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 40 }
    ]
  },

  // DIATERMIA / ESTÉTICA
  {
    id: 'diatermia-facial',
    title: "Diatermia Facial",
    description: "Rejuvenecimiento y mejora de la calidad de la piel.",
    category: 'diatermia',
    icon: <Sparkles className="w-6 h-6" />,
    options: [
      { sessions: 1, price: 50 },
      { sessions: 5, price: 200, basePriceRef: 50 },
      { sessions: 10, price: 400, basePriceRef: 50 },
    ]
  },
  {
    id: 'diatermia-corporal',
    title: "Diatermia Corporal",
    description: "Tratamientos localizados reductores y reafirmantes.",
    category: 'diatermia',
    icon: <Sparkles className="w-6 h-6" />,
    options: [
      { sessions: 5, price: 250, label: "Abdomen" },
      { sessions: 5, price: 400, label: "Glúteos + Muslos" },
    ]
  }
];

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'fisio', label: 'Fisioterapia' },
  { id: 'especializadas', label: 'Terapias Especializadas' },
  { id: 'neuro', label: 'Neurología' },
  { id: 'diatermia', label: 'Estética y Diatermia' },
];

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('fisio');

  const filteredData = PRICING_DATA.filter(item => item.category === activeTab);

  const getWhatsAppLink = (treatment: string, price: string) => {
    const text = `Hola, me gustaría pedir cita para ${treatment} (${price}).`;
    return `https://wa.me/34677768330?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="tarifas" className="py-24 bg-brand-beige/95 relative overflow-hidden scroll-mt-28">
      {/* Background Decor (Static) - Bubbles are global now */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2">Tarifas 2026</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Invierte en tu Salud</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Selecciona la categoría para ver nuestros planes de tratamiento y bonos de ahorro.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-200 inline-flex flex-wrap justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'bg-brand-secondary text-white shadow-md transform scale-105'
                    : 'text-gray-500 hover:text-brand-secondary hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Flex Container (Centered) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {filteredData.map((treatment) => (
            <div 
              key={treatment.id} 
              className={`w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.33%-1rem)] bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                treatment.popular 
                  ? 'border-brand-primary shadow-xl shadow-brand-primary/10 ring-1 ring-brand-primary/20 scale-100 md:scale-105 z-10' 
                  : 'border-gray-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {treatment.popular && (
                <div className="bg-brand-primary text-white text-xs font-bold text-center py-1.5 uppercase tracking-wide">
                  Más Solicitado
                </div>
              )}

              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${treatment.popular ? 'bg-brand-primary/10 text-brand-primary' : 'bg-brand-bg text-brand-secondary'}`}>
                    {treatment.icon}
                  </div>
                  <h3 className="font-bold text-xl text-brand-secondary leading-tight">
                    {treatment.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-sm mb-8 min-h-[40px]">
                  {treatment.description}
                </p>

                {/* Pricing Options List */}
                <div className="space-y-4">
                  {treatment.options.map((opt, idx) => {
                    const savings = opt.basePriceRef && opt.sessions > 1 
                      ? (opt.basePriceRef * opt.sessions) - opt.price 
                      : 0;
                    
                    const pricePerSession = Math.round(opt.price / opt.sessions);

                    return (
                      <div key={idx} className="relative group">
                        <div className="border border-gray-100 rounded-xl p-4 bg-brand-bg/30 hover:bg-white hover:border-brand-primary/30 transition-colors">
                          
                          {/* Top Row: Label & Price */}
                          <div className="flex justify-between items-baseline mb-1">
                            <span className="font-semibold text-brand-secondary text-base">
                              {opt.label ? opt.label : (opt.sessions === 1 ? 'Sesión Individual' : `Bono ${opt.sessions} Sesiones`)}
                            </span>
                            <span className="text-2xl font-bold text-brand-primary">
                              {opt.price}€
                            </span>
                          </div>

                          {/* Bottom Row: Details & Savings */}
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-500">
                              {opt.sessions > 1 ? `Sale a ${pricePerSession}€ / sesión` : 'Precio final'}
                            </span>
                            
                            {savings > 0 && (
                              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium text-[10px] animate-pulse">
                                Ahorras {savings}€
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 pt-0 mt-auto">
                <a 
                  href={getWhatsAppLink(treatment.title, "Consultar")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold transition-all duration-200 ${
                    treatment.popular
                      ? 'bg-brand-primary text-white hover:bg-[#849171] shadow-lg shadow-brand-primary/25'
                      : 'bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir Cita
                </a>
                <p className="text-center text-[10px] text-gray-400 mt-3">
                  Reserva directa por WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-xs text-gray-500">
            <Check className="w-3 h-3 text-brand-primary" />
            <span>Todos los tratamientos incluyen valoración previa gratuita en la primera sesión.</span>
          </div>
        </div>

      </div>
    </section>
  );
};