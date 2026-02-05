import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  ArrowLeft, 
  BookOpen, 
  Zap, 
  Activity, 
  Brain,
  Stethoscope,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from './Button';

interface SobreElisaProps {
  onBackToHome: () => void;
}

const COURSES = [
  "Máster en el Abordaje del Daño Cerebral Adquirido (CEU)",
  "Fisioterapia en disfunciones de Suelo Pélvico",
  "Rehabilitación Cardíaca en Patologías Cardíacas",
  "Fisioterapia en Lesiones de Tobillo y Rodilla",
  "Patologías Neurológicas de Hombro",
  "Tratamiento de lesiones Músculo-Esqueléticas",
  "Abordaje de la Fibromialgia",
  "Concepto Bobath en el adulto",
  "Fisioterapia en pacientes amputados de miembro inferior",
  "Análisis del movimiento y Punción Seca",
  "Atención en el síndrome de dolor miofascial",
  "Valoración analítica y funcional en fisioterapia",
  "Especialización en Fisioterapia Deportiva y Dermatofuncional",
  "Formación en cuidados paliativos y demencias (Alzheimer)"
];

const TECHNOLOGIES = [
  {
    title: "Winback Back3TX",
    desc: "La revolución de la Tecarterapia. Equipo avanzado que acelera la regeneración tisular y elimina el dolor de forma inmediata.",
    icon: <Zap className="w-8 h-8 text-brand-primary" />,
    bg: "bg-brand-primary/10"
  },
  {
    title: "Ecógrafo Vinno",
    desc: "Tecnología de imagen de alta resolución para un diagnóstico preciso y tratamientos invasivos ecoguiados con máxima seguridad.",
    icon: <Activity className="w-8 h-8 text-brand-accent" />,
    bg: "bg-brand-accent/10"
  },
  {
    title: "Neuromodulación",
    desc: "Reset del sistema nervioso y control avanzado del dolor.",
    icon: <Brain className="w-8 h-8 text-brand-secondary" />,
    bg: "bg-brand-secondary/10"
  }
];

export const SobreElisa: React.FC<SobreElisaProps> = ({ onBackToHome }) => {
  const [areCoursesVisible, setAreCoursesVisible] = useState(false);

  return (
    <div className="min-h-screen pt-28 bg-brand-beige/95 animate-in fade-in duration-500 relative">
      
      {/* --- Header & Perfil Principal --- */}
      <div className="container mx-auto px-4 md:px-6 mb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={onBackToHome}
            className="mb-8 flex items-center gap-2 text-brand-primary font-medium hover:underline transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </button>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            
            {/* Foto de Perfil */}
            <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brand-primary/20 blur-3xl transform scale-110"></div>
                <img 
                  src="/images/elisa-perfil.webp" 
                  alt="Elisa Morilla Fernández" 
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-[8px] border-brand-primary shadow-2xl"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 flex items-center justify-center animate-bounce duration-[3000ms]">
                  <GraduationCap className="w-8 h-8 text-brand-secondary" />
                </div>
              </div>
            </div>

            {/* Texto Biografía */}
            <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-3">
                  Elisa Morilla Fernández
                </h1>
                <h2 className="text-brand-primary font-bold uppercase tracking-wider text-sm md:text-base mb-1">
                  Graduada en Fisioterapia por la Universidad de Valencia
                </h2>
                <p className="text-gray-400 text-sm font-medium">Colegiada Nº 9982</p>
              </div>

              <div className="w-24 h-1.5 bg-brand-accent mx-auto md:mx-0 rounded-full"></div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Mi pasión es la recuperación funcional real. Soy <strong className="text-brand-secondary">Experta en Tratamientos Neurológicos</strong> y cuento con años de experiencia clínica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi enfoque se basa en la <strong className="text-brand-primary">atención personalizada 1 a 1</strong>, huyendo de las terapias masificadas. Combino la terapia manual experta con la última evidencia científica en <span className="underline decoration-brand-accent decoration-2 underline-offset-2">Neurorrehabilitación</span> y <span className="underline decoration-brand-accent decoration-2 underline-offset-2">Fisioterapia Deportiva</span>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={() => window.location.href='#contacto'} className="px-8 shadow-brand-primary/30">
                  Pedir Cita con Elisa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Sección de Formación (Desplegable) --- */}
      <section className="bg-white/80 backdrop-blur-sm py-12 border-y border-gray-100 relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center">
            <span className="bg-brand-bg text-brand-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-gray-200">
              Curriculum Vitae
            </span>
            <h3 className="text-3xl font-bold text-brand-secondary mt-4 mb-2">Formación Especializada</h3>
            <p className="text-gray-500 mb-8">Trayectoria académica y cursos de especialización.</p>
            
            <button
              onClick={() => setAreCoursesVisible(!areCoursesVisible)}
              className="group flex items-center gap-2 mx-auto bg-brand-primary hover:bg-brand-secondary text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              {areCoursesVisible ? 'Ocultar Formación' : 'Ver Formación Completa'}
              {areCoursesVisible ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>

          <AnimatePresence>
            {areCoursesVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COURSES.map((course, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-brand-bg/30 hover:bg-white hover:shadow-md hover:border-brand-primary/30 transition-all duration-300">
                      <div className="mt-1 shrink-0">
                        {idx === 0 ? (
                          <Award className="w-5 h-5 text-brand-primary" />
                        ) : (
                          <BookOpen className="w-5 h-5 text-brand-accent" />
                        )}
                      </div>
                      <span className={`text-sm font-medium ${idx === 0 ? 'text-brand-primary font-bold' : 'text-gray-700'}`}>
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                   <button 
                     onClick={() => setAreCoursesVisible(false)}
                     className="text-gray-400 text-sm hover:text-brand-primary underline decoration-dotted"
                   >
                     Cerrar listado
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* --- Sección de Tecnología & Instalaciones --- */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Columna Izquierda: Tarjetas Tecnología */}
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-secondary mb-4">Tecnología Avanzada</h3>
                <p className="text-gray-600 mb-8">
                  No solo utilizamos nuestras manos. Equipamos nuestra clínica con la aparatología más puntera del sector para acelerar tus tiempos de recuperación.
                </p>
              </div>

              <div className="space-y-4">
                {TECHNOLOGIES.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
                    <div className={`p-3 rounded-xl ${tech.bg}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-secondary text-lg">{tech.title}</h4>
                      <p className="text-sm text-gray-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Imágenes Instalaciones */}
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-lg h-48">
                  <img 
                    src="/images/hero-slide-1.webp" 
                    alt="Sala de Tratamiento Principal" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-white font-medium text-sm flex items-center gap-2">
                      <Stethoscope size={16} className="text-brand-accent" /> Sala Clínica Principal
                    </span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg h-40">
                  <img 
                    src="/images/hero-slide-2.webp" 
                    alt="Ecografía y Diagnóstico" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg h-40">
                  <img 
                    src="/images/hero-slide-3.webp" 
                    alt="Gimnasio Terapéutico" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <div className="bg-brand-secondary py-12 mt-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Tu salud en las mejores manos</h2>
          <div className="flex justify-center gap-4">
            <Button onClick={() => window.location.href='#contacto'} variant="primary" className="bg-brand-accent text-brand-secondary hover:bg-white hover:text-brand-primary">
              Reservar Cita
            </Button>
            <Button onClick={onBackToHome} variant="outline" className="border-white text-white hover:bg-white/10">
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};