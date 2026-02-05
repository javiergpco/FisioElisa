import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Llegué a la clínica sin apenas poder mover el hombro y gracias a la neuromodulación he recuperado la movilidad completa. ¡Increíble!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    name: "María García",
    role: "Paciente de Neurología",
  },
  {
    text: "Elisa es una profesional de diez. El trato es súper cercano y se nota que sabe lo que hace. Mi espalda está como nueva.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    name: "Carlos Ruiz",
    role: "Paciente de Fisioterapia",
  },
  {
    text: "Después de probar en varios sitios, aquí por fin dieron con la tecla de mi lesión de rodilla. La ecografía marcó la diferencia.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
    name: "Ana Pérez",
    role: "Deportista",
  },
  {
    text: "Ambiente relajante y tecnología puntera. La sesión de Winback fue mano de santo para mi contractura.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    name: "Javier Moreno",
    role: "Paciente de Dolor Crónico",
  },
  {
    text: "Atención personalizada de verdad. No te dejan solo con máquinas, están contigo toda la sesión. Muy recomendable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    name: "Laura Sánchez",
    role: "Paciente de Fisioterapia",
  },
  {
    text: "Llevé a mi madre tras un ictus y el progreso ha sido espectacular. Estamos eternamente agradecidos a Elisa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    name: "Pedro Díaz",
    role: "Familiar de Paciente",
  },
  {
    text: "La mejor clínica de Chiclana sin duda. Instalaciones modernas y un equipo humano insuperable.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop",
    name: "Sofía Martín",
    role: "Paciente Recurrente",
  },
  {
    text: "Resultados visibles desde la primera sesión de diatermia facial. Mi piel ha mejorado muchísimo.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    name: "Elena Torres",
    role: "Estética Avanzada",
  },
  {
    text: "Profesionalidad, puntualidad y limpieza. Se toman muy en serio las medidas de seguridad y el bienestar del paciente.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    name: "Miguel Ángel",
    role: "Paciente de Fisioterapia",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="p-6 md:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full group" key={i}>
                <p className="text-gray-600 leading-relaxed text-sm italic">"{text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-50">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-bg group-hover:ring-brand-primary transition-all"
                  />
                  <div className="flex flex-col">
                    <div className="font-bold text-brand-secondary text-sm">{name}</div>
                    <div className="text-xs text-brand-primary font-medium">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section id="testimonios" className="bg-brand-beige/95 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 z-10 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-white border border-brand-primary/20 text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              Testimonios
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Historias reales de recuperación. La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
};