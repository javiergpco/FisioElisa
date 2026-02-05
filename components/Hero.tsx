import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Target, 
  Crown, 
  Zap,
  Activity,
  Award,
  Stethoscope
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMÁGENES DEL CARRUSEL ---
const HERO_IMAGES = [
  "/images/hero-slide-1.webp",
  "/images/hero-slide-2.webp",
  "/images/hero-slide-3.webp",
  "/images/hero-slide-4.webp"
];

// --- MOCK BRANDS (Technologies & Insurers) ---
const PARTNERS = [
  { name: "Winback", icon: Zap },
  { name: "Ecografía", icon: Activity },
  { name: "Colegiados", icon: Award },
  { name: "Terapia Manual", icon: Stethoscope },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-brand-accent/80 font-medium sm:text-xs">{label}</span>
  </div>
);

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lógica del Carrusel Automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[700px] lg:h-screen bg-brand-secondary text-white overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* --- CARRUSEL DE FONDO (Z-0) --- */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Fondo Clínica FisioElisa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlay Oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Gradiente adicional para suavizar la unión con la siguiente sección */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/30 via-transparent to-brand-secondary/90 z-20"></div>
      </div>

      {/* --- CONTENIDO PRINCIPAL (Z-10) --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 md:pt-40 md:pb-24 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start w-full">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-4">
            
            {/* Heading */}
            <h1 
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[1]"
            >
              Fisioterapia <br />
              <span className="bg-gradient-to-br from-white via-white to-brand-accent bg-clip-text text-transparent">
                Avanzada
              </span><br />
              en Chiclana
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-gray-200 leading-relaxed font-light">
              Combinamos terapia manual experta con la tecnología más innovadora para acelerar tu recuperación. Tu bienestar es nuestra única meta.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#1f7a78] active:scale-[0.98] shadow-lg shadow-brand-primary/20">
                Pedir Cita Ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20">
                <Play className="w-4 h-4 fill-current" />
                Ver Tratamientos
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            
            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/20 ring-1 ring-brand-primary/30">
                    <Target className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">+1000</div>
                    <div className="text-sm text-brand-accent/80">Pacientes Recuperados</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Satisfacción del Paciente</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="+5" label="Años Exp" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="1 a 1" label="Atención" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="Tecnología" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-medium tracking-wide text-green-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ABIERTO AHORA
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[10px] font-medium tracking-wide text-yellow-300">
                    <Crown className="w-3 h-3 text-yellow-500" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div id="tecnologias" className="scroll-mt-28 animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-gray-400">Tecnologías y Colaboradores</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Triple list for seamless loop */}
                  {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((client, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      {/* Brand Icon */}
                      <client.icon className="h-6 w-6 text-white fill-current" />
                      {/* Brand Name */}
                      <span className="text-lg font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}