import React from 'react';
import { Users, BookOpen, Stethoscope, ClipboardList, Zap, Magnet, Wind, Activity, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-brand-beige/95 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-stretch">
          
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

            <figure className="mt-8">
              <img
                src="/images/equipo.webp"
                alt="Equipo de Elisa Morilla Fisioterapia en la clínica de Chiclana"
                width={960}
                height={720}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm border border-white/50"
              />
              <figcaption className="text-xs text-gray-500 mt-3 text-center">
                Nuestro equipo, cerca de ti en cada sesión.
              </figcaption>
            </figure>

          </div>

          {/* Right Side: Grid Features + Profile */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-[auto_auto_1fr] gap-4">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
              <Users className="w-8 h-8 text-brand-accent mb-3" />
              <h3 className="font-bold text-brand-secondary text-sm mb-2">Atención 1 a 1</h3>
              <p className="text-xs text-brand-text">Sin esperas ni interrupciones. El tiempo completo de la sesión es solo para ti.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-white/50">
              <BookOpen className="w-8 h-8 text-brand-accent mb-3" />
              <h3 className="font-bold text-brand-secondary text-sm mb-2">Experiencia Clínica</h3>
              <p className="text-xs text-brand-text">Años de formación especializada en técnicas invasivas.</p>
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

            {/* Eslogan + lo que ofrece la clínica (ocupa el alto que queda junto a la foto del equipo) */}
            <div className="sm:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-white/50 flex flex-col relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex-1 flex flex-col justify-center relative">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">
                Fisioterapia en Chiclana
              </span>
              <p className="text-2xl md:text-3xl font-bold text-brand-secondary leading-snug mb-4">
                Manos expertas y la tecnología que tu recuperación necesita.
              </p>
              <p className="text-sm lg:text-base text-brand-text leading-relaxed mb-6">
                Cada sesión empieza escuchándote. Combinamos el trabajo manual con aparatología avanzada para tratar el dolor, recuperar la movilidad y que vuelvas a tu día a día cuanto antes.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Zap, label: 'Tecarterapia Winback' },
                  { icon: Magnet, label: 'Sistema Superinductivo SIS' },
                  { icon: Wind, label: 'Presoterapia Bootech' },
                  { icon: Activity, label: 'Técnicas ecoguiadas' },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-medium text-brand-secondary">
                    <span className="bg-brand-bg p-2 rounded-lg text-brand-primary shrink-0">
                      <Icon size={16} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
              </div>

              <div className="mb-6 flex items-center gap-3 rounded-xl bg-brand-bg border border-brand-primary/20 px-4 py-3 relative">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0" />
                <span className="text-sm text-brand-secondary">
                  <strong className="font-semibold">Primera valoración gratuita</strong> en todos los tratamientos.
                </span>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
                <span className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={14} className="text-brand-primary shrink-0" />
                  C.C. Las Redes · Chiclana de la Frontera
                </span>
                <button
                  onClick={() => document.getElementById('contacto-seccion')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#849171]"
                >
                  Pedir cita
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};