import React from 'react';
import { X } from 'lucide-react';

const NewClientModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface border border-border rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-border bg-surfaceHover/30">
          <h2 className="text-xl font-bold text-text-primary">Nuevo Cliente</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Nombre completo</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Ej. Carlos Mendoza" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Teléfono</label>
                <input type="tel" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="+51 987 654 321" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Correo electrónico (Opcional)</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="carlos@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Fecha de nacimiento (Opcional)</label>
                <input type="date" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            
            <hr className="border-border" />
            
            <h3 className="text-md font-bold text-text-primary">Notas iniciales</h3>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Observaciones o preferencias de estilo</label>
              <textarea rows={3} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none" placeholder="El cliente prefiere..." />
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-border bg-surfaceHover/30 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-surface transition-colors">
            Cancelar
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover transition-colors">
            Guardar cliente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewClientModal;
