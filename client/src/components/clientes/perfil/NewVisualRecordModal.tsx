import { X, UploadCloud } from 'lucide-react';

const NewVisualRecordModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface border border-border rounded-xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border bg-surfaceHover/30">
          <h2 className="text-xl font-bold text-text-primary">Nuevo Registro Visual</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <form className="space-y-5">
            <div className="w-full h-48 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-background hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-surfaceHover flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-3">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-text-primary">Sube una fotografía</p>
              <p className="text-xs text-text-secondary mt-1">PNG, JPG hasta 5MB</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Servicio realizado</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors">
                <option>Corte + Barba</option>
                <option>Corte Clásico</option>
                <option>Perfilado de Barba</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Barbero</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors">
                <option>Miguel A.</option>
                <option>Juan P.</option>
                <option>David R.</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Notas / Observaciones</label>
              <textarea rows={2} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Detalles del corte para recordar..." />
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-border bg-surfaceHover/30 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-surface transition-colors">
            Cancelar
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover transition-colors">
            Guardar registro
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewVisualRecordModal;
