import { useState } from 'react';
import { Users, Send, MessageCircle, Mail } from 'lucide-react';
import { cn } from '../../utils/cn';

const segments = [
  { id: 'nuevos', name: 'Nuevos', count: 45, desc: '1ra visita en los últimos 30 días' },
  { id: 'frecuentes', name: 'Frecuentes', count: 120, desc: '+3 visitas en últimos 6 meses' },
  { id: 'vip', name: 'VIP', count: 25, desc: 'Top 10% en gasto histórico' },
  { id: 'cumpleanos', name: 'Cumpleaños', count: 12, desc: 'Cumplen años este mes' },
  { id: 'inactivos', name: 'Sin visita', count: 85, desc: '+60 días sin agendar' },
];

export const Marketing = () => {
  const [selectedSegment, setSelectedSegment] = useState('cumpleanos');
  const [channel, setChannel] = useState<'whatsapp' | 'sms' | 'email'>('whatsapp');
  
  const currentSegment = segments.find(s => s.id === selectedSegment);

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Marketing</h1>
        <p className="text-text-secondary mt-1">Segmentación y campañas de reactivación.</p>
      </div>

      <div className="flex-1 overflow-y-auto pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Segmentos */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-text-primary mb-2">Segmentos Inteligentes</h2>
            {segments.map(seg => (
              <div 
                key={seg.id}
                onClick={() => setSelectedSegment(seg.id)}
                className={cn(
                  "p-4 rounded-xl border cursor-pointer transition-all",
                  selectedSegment === seg.id 
                    ? "bg-primary/10 border-primary shadow-lg shadow-primary/5" 
                    : "bg-surface border-border hover:border-primary/50"
                )}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={cn("font-bold", selectedSegment === seg.id ? "text-primary" : "text-text-primary")}>
                    {seg.name}
                  </h3>
                  <span className="flex items-center gap-1 text-sm font-bold bg-background px-2 py-0.5 rounded text-text-secondary border border-border">
                    <Users className="w-3.5 h-3.5" />
                    {seg.count}
                  </span>
                </div>
                <p className="text-xs text-text-secondary">{seg.desc}</p>
              </div>
            ))}
          </div>

          {/* Creador de Campañas */}
          <div className="lg:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col">
              <h2 className="text-xl font-bold text-text-primary mb-6">Nueva Campaña</h2>
              
              <div className="space-y-6 flex-1">
                <div>
                  <label className="block text-sm font-semibold text-text-secondary mb-2">Público Objetivo</label>
                  <div className="bg-background border border-border rounded-lg p-3 flex justify-between items-center">
                    <span className="font-bold text-text-primary">{currentSegment?.name}</span>
                    <span className="text-sm text-text-secondary">Se enviará a {currentSegment?.count} clientes</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-secondary mb-2">Canal de Envío</label>
                  <div className="grid grid-cols-3 gap-3">
                    <button 
                      onClick={() => setChannel('whatsapp')}
                      className={cn(
                        "py-3 rounded-lg flex items-center justify-center gap-2 border font-bold text-sm transition-colors",
                        channel === 'whatsapp' ? "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30" : "bg-background text-text-secondary border-border"
                      )}
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </button>
                    <button 
                      onClick={() => setChannel('sms')}
                      className={cn(
                        "py-3 rounded-lg flex items-center justify-center gap-2 border font-bold text-sm transition-colors",
                        channel === 'sms' ? "bg-blue-500/10 text-blue-500 border-blue-500/30" : "bg-background text-text-secondary border-border"
                      )}
                    >
                      <Send className="w-4 h-4" /> SMS
                    </button>
                    <button 
                      onClick={() => setChannel('email')}
                      className={cn(
                        "py-3 rounded-lg flex items-center justify-center gap-2 border font-bold text-sm transition-colors",
                        channel === 'email' ? "bg-primary/10 text-primary border-primary/30" : "bg-background text-text-secondary border-border"
                      )}
                    >
                      <Mail className="w-4 h-4" /> Email
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-secondary mb-2">Mensaje</label>
                  <textarea 
                    rows={5}
                    placeholder="Escribe tu mensaje aquí... Usa {nombre} para personalizar."
                    defaultValue={
                      selectedSegment === 'cumpleanos' 
                      ? "¡Feliz cumpleaños {nombre}! 🎂 Queremos celebrarlo contigo. Tienes un 20% de dscto en tu próximo corte esta semana."
                      : ""
                    }
                    className="w-full bg-background border border-border rounded-lg p-4 text-text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                  <p className="text-xs text-text-secondary mt-2">Personaliza con: {`{nombre}`}, {`{puntos}`}, {`{plan}`}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border flex justify-end gap-3">
                <button className="px-5 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:bg-surfaceHover transition-colors">
                  Guardar Borrador
                </button>
                <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover flex items-center gap-2 transition-colors">
                  <Send className="w-4 h-4" />
                  Enviar Campaña
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
