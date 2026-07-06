import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Fisioterapia',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Fisioterapia",
    "Recuperación deportiva",
    "Recuperación neurológica",
    "Tecarterapia",
    "Punción seca y electropunción",
    "Diatermia",
    "Ondas de Choque",
    "Neuromodulación",
    "Otro"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      // Build WhatsApp message text
      const intro = `Hola, me gustaría solicitar una cita en FisioElisa.`;
      const details = `\n\n*Mis Datos:*\n- *Nombre:* ${formData.name}\n- *Teléfono:* ${formData.phone}\n- *Servicio:* ${formData.service}`;
      const messagePart = formData.message.trim() ? `\n- *Detalles/Consulta:* ${formData.message}` : '';
      const text = `${intro}${details}${messagePart}`;
      
      const whatsappUrl = `https://wa.me/34677768330?text=${encodeURIComponent(text)}`;
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contacto-seccion" className="py-20 bg-brand-bg relative scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Contacto</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary">Pide tu Cita o Consúltanos</h3>
          <p className="text-gray-500 max-w-lg mx-auto mt-4 text-sm md:text-base">
            Rellena los datos a continuación y envíanos tu consulta. Nos pondremos en contacto contigo de inmediato a través de WhatsApp.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Clinic Info */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-white flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-2xl font-bold text-brand-secondary mb-4">Información de la Clínica</h4>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Estamos encantados de atenderte. Ven a visitarnos o ponte en contacto con nosotros directamente a través de cualquiera de nuestros canales oficiales.
              </p>

              {/* Contact details list */}
              <div className="space-y-6">
                
                {/* Teléfono */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Teléfono Móvil</h5>
                    <a 
                      href="tel:+34677768330" 
                      className="text-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors block mt-0.5"
                    >
                      677 76 83 30
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dirección</h5>
                    <p className="text-brand-secondary font-medium mt-0.5 leading-snug">
                      Centro Comercial Las Redes. Portal 1, Local 27
                    </p>
                    <p className="text-sm text-gray-500">
                      11130 Chiclana de la Frontera (Cádiz)
                    </p>
                  </div>
                </div>

                {/* Correo Electrónico */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Correo Electrónico</h5>
                    <a 
                      href="mailto:elisamorillafisioterapia@gmail.com" 
                      className="text-sm sm:text-base font-medium text-brand-secondary hover:text-brand-primary transition-colors break-all block mt-0.5"
                    >
                      elisamorillafisioterapia@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Aesthetic badge / Map link */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-400">
              <CheckCircle className="text-brand-primary w-4 h-4 shrink-0" />
              <span>Atención personalizada e individualizada de 45 minutos.</span>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-100 shadow-md">
            <h4 className="text-2xl font-bold text-brand-secondary mb-2">Formulario de Reserva</h4>
            <p className="text-gray-400 text-xs mb-6">
              Todos los campos son obligatorios para poder procesar tu cita correctamente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nombre completo */}
              <div className="space-y-1.5">
                <label htmlFor="form-name" className="text-xs font-bold text-brand-secondary uppercase tracking-wider">
                  Nombre Completo
                </label>
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ej. María García"
                  className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-all bg-white"
                />
              </div>

              {/* Teléfono Móvil */}
              <div className="space-y-1.5">
                <label htmlFor="form-phone" className="text-xs font-bold text-brand-secondary uppercase tracking-wider">
                  Teléfono Móvil
                </label>
                <input
                  id="form-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ej. 600 000 000"
                  className="flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-all bg-white"
                />
              </div>

              {/* Servicio / Tratamiento */}
              <div className="space-y-1.5">
                <label htmlFor="form-service" className="text-xs font-bold text-brand-secondary uppercase tracking-wider">
                  Tratamiento que Solicita
                </label>
                <div className="relative">
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-all appearance-none cursor-pointer text-brand-text font-medium"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {/* Custom arrow decoration */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mensaje / Dolencia */}
              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-bold text-brand-secondary uppercase tracking-wider">
                  ¿Qué te ocurre? (Opcional)
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe brevemente tu molestia o dolor..."
                  className="flex min-h-[90px] w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] hover:bg-[#849171] active:scale-[0.99] shadow-lg shadow-brand-primary/20 disabled:opacity-50 disabled:pointer-events-none mt-2"
              >
                {isSubmitting ? 'Preparando WhatsApp...' : 'Enviar Consulta por WhatsApp'}
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-gray-400 mt-2">
                Al hacer clic, se generará el mensaje personalizado y se abrirá WhatsApp Web o la App para enviarlo de forma segura.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
