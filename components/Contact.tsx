import React, { useState } from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Send, Check } from 'lucide-react';

interface ContactProps {
  onBack?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Fisioterapia General",
    "Neurología",
    "Deportiva",
    "Diatermia/Indiba",
    "Otro"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      // Construir mensaje de WhatsApp con los datos
      const text = `Hola, soy ${formData.name}. \n\nNecesito información sobre: ${formData.services.join(', ')}. \n\nMensaje: ${formData.message}`;
      const whatsappUrl = `https://wa.me/34677768330?text=${encodeURIComponent(text)}`;
      
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full bg-brand-bg/50 overflow-hidden font-sans">
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:h-screen lg:flex lg:items-center lg:justify-center">
        
        {/* --- GRID PRINCIPAL --- */}
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
          <div className="space-y-8 pt-20 lg:pt-0 animate-in slide-in-from-left-10 duration-700">
            
            {/* Botón Volver */}
            <button 
              onClick={() => onBack ? onBack() : window.location.reload()}
              className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </button>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-secondary tracking-tight mb-4">
                ¿Listo para recuperar <br/>
                <span className="text-brand-primary">tu bienestar?</span>
              </h1>
              <p className="text-xl text-gray-500 font-light">
                Hablemos. Tu recuperación empieza hoy.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 text-brand-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Email</p>
                  <a href="mailto:elisamorillafisioterapia@gmail.com" className="text-lg font-medium text-brand-secondary hover:text-brand-primary transition-colors">
                    elisamorillafisioterapia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 text-brand-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Teléfono</p>
                  <a href="tel:+34677768330" className="text-lg font-medium text-brand-secondary hover:text-brand-primary transition-colors">
                    677 76 83 30
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 text-brand-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Ubicación</p>
                  <p className="text-lg font-medium text-brand-secondary">
                    Run&Fit Chiclana
                  </p>
                  <p className="text-sm text-gray-500">C.C. El Camino, Carr. de las Lagunas</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: FORMULARIO (Estilo Shadcn Card) --- */}
          <div className="animate-in slide-in-from-right-10 duration-700 delay-100">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl p-6 md:p-8">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-secondary">Envíanos un mensaje</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Rellena el formulario y te contactaremos lo antes posible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none text-brand-secondary">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej. María García"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all disabled:opacity-50"
                  />
                </div>

                {/* Grid Email / Telefono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none text-brand-secondary">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="hola@ejemplo.com"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none text-brand-secondary">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="600 000 000"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                    />
                  </div>
                </div>

                {/* Selector de Servicios (Checkboxes estilizados) */}
                <div className="space-y-3">
                  <label className="text-sm font-medium leading-none text-brand-secondary">
                    ¿Qué necesitas?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceOptions.map((service) => {
                      const isSelected = formData.services.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`
                            relative flex items-center space-x-2 rounded-lg border px-4 py-3 shadow-sm outline-none transition-all
                            ${isSelected 
                              ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary' 
                              : 'border-gray-200 bg-white hover:bg-gray-50 hover:text-brand-text'
                            }
                          `}
                        >
                          <div className={`
                            flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors
                            ${isSelected 
                              ? 'bg-brand-primary border-brand-primary text-white' 
                              : 'border-gray-300'
                            }
                          `}>
                            {isSelected && <Check className="h-3 w-3" />}
                          </div>
                          <span className={`text-xs sm:text-sm font-medium ${isSelected ? 'text-brand-primary' : 'text-gray-600'}`}>
                            {service}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none text-brand-secondary">
                    Cuéntame brevemente tu dolencia...
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Me duele la espalda baja cuando..."
                    className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-brand-secondary px-4 py-3 text-sm font-medium text-white shadow hover:bg-brand-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar Solicitud <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-2">
                  Al enviar, se abrirá WhatsApp para finalizar la cita.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};