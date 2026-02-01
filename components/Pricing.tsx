import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="tarifas" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4">Tarifas Transparentes</h2>
          <p className="text-brand-text max-w-2xl mx-auto">Calidad premium sin sorpresas. Sesiones completas de tratamiento individualizado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Standard Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-secondary">Sesión Fisioterapia</h3>
              </div>
              <span className="text-3xl font-bold text-brand-primary">30€</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Valoración inicial', 'Terapia Manual', 'Ejercicio terapéutico'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="bg-brand-bg rounded-full p-1">
                    <Check className="w-3 h-3 text-brand-accent" />
                  </div>
                  <span className="text-brand-text text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full justify-center">Reservar Sesión</Button>
          </div>

          {/* Premium/Recommended Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-brand-primary relative transform md:-translate-y-2">
            <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMENDADO
            </div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-secondary">Sesión Avanzada</h3>
              </div>
              <span className="text-3xl font-bold text-brand-primary">35€</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['Todo lo de la sesión básica', 'Tecnología Indiba/Neuromodulación', 'Seguimiento personalizado'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                   <div className="bg-brand-primary rounded-full p-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-brand-secondary font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" className="w-full justify-center">Reservar Sesión VIP</Button>
          </div>

        </div>
      </div>
    </section>
  );
};