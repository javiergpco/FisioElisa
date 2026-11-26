import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

// Reseñas reales de 5 estrellas de Google Maps (Elisa Morilla Fisioterapia).
// Textos literales; en las largas se ha recortado con «(…)». Nombre + inicial del apellido.
const GOOGLE_REVIEWS_URL =
  "https://www.google.es/maps/place/Elisa+Morilla+Fisioterapia/@36.4295188,-6.1468111,17z/data=!3m1!4b1!4m6!3m5!1s0xd0c33d093ed4bd1:0xe67566f790fe8c14!8m2!3d36.4295188!4d-6.1442362!16s%2Fg%2F11l1d74p_4";

const testimonials = [
  {
    text: "Acudí a su consulta por unos problemas bastante molestos de tensión acumulada en la espalda y para tratarme una lesión en la pierna tras una caída. Desde la primera sesión el trato ha sido impecable, empático y súper cercano. (…) Tras un par de sesiones, la mejoría en la pierna ha sido notable y la tensión de la espalda ha disminuido muchísimo.",
    name: "Miriam E.",
    role: "Espalda y lesión de pierna",
  },
  {
    text: "Elisa es maravillosa, llevo ya un par de meses yendo cada dos semanas para mi bruxismo y que deciros que ya no puedo vivir sin ella. Como persona y profesional es muy cercana, aparte se nota que le gusta lo que hace.",
    name: "Paula M.",
    role: "Bruxismo",
  },
  {
    text: "¡Muy contento con Eli! Desde el primer momento el trato ha sido súper cercano y siempre ha puesto todas las facilidades para adaptarse a mis horarios. Además, cuenta con equipos de última generación y se nota que le gusta lo que hace. ¡Una profesional de diez, totalmente recomendable!",
    name: "Pablo G.",
    role: "Paciente",
  },
  {
    text: "Estoy encantada con la experiencia. Quiero destacar especialmente el trato tan cercano, amable y profesional de Alba, que te hace sentir cómoda y en buenas manos desde el primer momento. (…) Sin duda, ya tengo fisio de confianza para siempre. ❤️",
    name: "Laura N.",
    role: "Paciente",
  },
  {
    text: "A tan solo tres semanas de mi boda sufrí una lesión en el gemelo y en la pata de ganso, y gracias a sus magníficas manos, conocimientos y recursos pude disfrutar tanto de mi boda como de mi viaje sin ningún problema. (…) Recomiendo esta clínica al 100%.",
    name: "Julia E.",
    role: "Lesión de gemelo",
  },
  {
    text: "Fuimos mi pareja y yo y acabamos ambos muy satisfechos con el tratamiento, equipo y técnicas. Muchas gracias a Elisa y Alba, ambas son unas magníficas profesionales (…). Hasta tienen un escaner para poder ver qué tienes y descartar cualquier patología.",
    name: "Manuel",
    role: "Paciente",
  },
  {
    text: "El servicio de las dos profesionales es estupendo, tras mi lesión en el adductor he recibido un tratamiento con el que he mejorado muchísimo. Seguiré asistiendo a la clínica ya que estoy encantada con el trato y la amabilidad de Elisa y Alba.",
    name: "Ana María T.",
    role: "Lesión de aductor",
  },
  {
    text: "Muy recomendable. El trato del equipo es cercano y profesional, se nota la experiencia y las ganas de ayudar. Desde la primera sesión Elisa me explicó claramente el tratamiento y me sentí en buenas manos. Se agradece la atención personalizada en cada sesión.",
    name: "Mario P.",
    role: "Paciente",
  },
  {
    text: "¡Una experiencia de 10! Acudí a Elisa para una ecografía de revisión de los meniscos de mi rodilla y el trato fue inmejorable. Es una profesional cercana, atenta y muy cuidadosa, que se toma el tiempo necesario para explicarte todo con claridad y resolver cualquier duda.",
    name: "Antonio G.",
    role: "Ecografía de rodilla",
  },
  {
    text: "Voy desde hace tiempo a la clínica para tratar mi bruxismo. Desde que conocí a Elisa noté un cambio inmediato, descanso mucho mejor. Fue un gran acierto acudir a ella, una profesional de pies a cabeza. La recomiendo al 100%",
    name: "Alba N.",
    role: "Bruxismo",
  },
  {
    text: "Me ha encantado la experiencia. Todo ha sido perfecto: el trato, el ambiente y la calidad del masaje. Quiero destacar especialmente a Alba, la profesional que me atendió, por su amabilidad, su trato tan cercano y su profesionalidad.",
    name: "Paola Q.",
    role: "Masaje",
  },
  {
    text: "Elisa es una gran profesional, cercana y agradable. Se adapta totalmente a mi horario y destacó su puntualidad. Da mucha confianza y hace que te sientas cómodo desde el primer momento. Totalmente recomendable!",
    name: "Elvira C.",
    role: "Paciente",
  },
];

const FiveStars = ({ size }: { size: number }) => (
  <span className="flex gap-0.5" role="img" aria-label="5 de 5 estrellas">
    {[0, 1, 2, 3, 4].map((s) => (
      <Star key={s} size={size} className="text-yellow-400 fill-yellow-400" />
    ))}
  </span>
);

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
            {props.testimonials.map(({ text, name, role }, i) => (
              <div className="p-6 md:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full group" key={i}>
                <div className="mb-3">
                  <FiveStars size={14} />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm italic">"{text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-50">
                  <div
                    aria-hidden="true"
                    className="h-10 w-10 shrink-0 rounded-full bg-brand-primary/15 text-brand-secondary font-bold text-sm flex items-center justify-center ring-2 ring-brand-bg group-hover:ring-brand-primary transition-all"
                  >
                    {name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-brand-secondary text-sm">{name}</div>
                    <div className="text-xs text-brand-primary font-medium">{role} · Reseña de Google</div>
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
  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4, 8);
  const thirdColumn = testimonials.slice(8, 12);

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

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-white border border-gray-200 px-5 py-2.5 shadow-sm hover:shadow-md hover:border-brand-primary/40 transition-all"
          >
            <span className="text-lg font-bold text-brand-secondary">5,0</span>
            <FiveStars size={16} />
            <span className="text-sm text-gray-500">177 reseñas en Google</span>
            <ExternalLink size={14} className="text-gray-400 hidden sm:block" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          {/* Móvil: una sola columna con todas las reseñas */}
          <TestimonialsColumn testimonials={testimonials} className="md:hidden" duration={90} />
          <TestimonialsColumn testimonials={firstColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={40} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={35} />
        </div>
      </div>
    </section>
  );
};
