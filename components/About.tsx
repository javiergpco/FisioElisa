import React from 'react';
import { Users, BookOpen, Stethoscope, ClipboardList } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-brand-beige/95 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Text + List */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-6 leading-tight">
              Por qué elegir nuestra clínica en Chiclana
            </h2>
            <p className="text-brand-text mb-8 leading-relaxed">
              En Clínica Elisa Morilla entendemos la fisioterapia como una combinación de arte manual y precisión tecnológica. No solo tratamos el síntoma, buscamos el origen de tu dolencia para prevenir recaídas.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-gray-100 p-4 rounded-xl flex gap-4 shadow-sm">
                <div className="bg-brand-bg p-2 rounded-lg h-fit text-brand-primary">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary text-sm">Diagnóstico Diferencial</h4>
                  <p className="text-xs text-gray-500 mt-1">Evaluación exhaustiva previa a cualquier tratamiento.</p>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-4 rounded-xl flex gap-4 shadow-sm">
                <div className="bg-brand-bg p-2 rounded-lg h-fit text-brand-primary">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary text-sm">Planes Personalizados</h4>
                  <p className="text-xs text-gray-500 mt-1">No hay dos pacientes iguales. Tu plan es único para tu ritmo de vida.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Grid Features + Profile */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
              <Users className="w-8 h-8 text-brand-accent mb-3" />
              <h3 className="font-bold text-brand-secondary text-sm mb-2">Atención 1 a 1</h3>
              <p className="text-xs text-brand-text">Sin esperas ni interrupciones. El tiempo completo de la sesión es solo para ti.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
              <BookOpen className="w-8 h-8 text-brand-accent mb-3" />
              <h3 className="font-bold text-brand-secondary text-sm mb-2">Experiencia Clínica</h3>
              <p className="text-xs text-brand-text">Años de formación especializada en técnicas invasivas y suelo pélvico.</p>
            </div>

            <div className="sm:col-span-2 bg-brand-secondary rounded-2xl p-6 text-white flex items-center gap-6 relative overflow-hidden shadow-lg">
               <div className="shrink-0 relative z-10">
                 <img 
                  src="/images/elisa-perfil.webp" 
                  alt="Elisa Morilla" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-brand-primary"
                 />
               </div>
               <div className="relative z-10">
                 <h4 className="font-bold text-lg">Elisa Morilla</h4>
                 <span className="text-brand-accent text-xs font-semibold uppercase tracking-wider mb-2 block">FISIOTERAPEUTA COLEGIADA</span>
                 <p className="text-xs text-gray-300 italic">"Mi compromiso es ofrecerte un diagnóstico preciso y un tratamiento eficaz basado en la evidencia científica."</p>
               </div>
               {/* Decoration */}
               <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};