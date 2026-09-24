import { X } from 'lucide-react';

const NewAppointmentModal = ({ 
  onClose, 
  initialBarberId, 
  initialTime, 
  barbers 
}: { 
  onClose: () => void, 
  initialBarberId?: number, 
  initialTime?: string,
  barbers: any[]
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface border border-border rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-border bg-surfaceHover/30">
          <h2 className="text-xl font-bold text-text-primary">Nueva Cita</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Cliente</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" placeholder="Buscar o ingresar nombre..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Servicio</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors">
                  <option>Corte Clásico</option>
                  <option>Corte + Barba</option>
                  <option>Barba Spa</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Barbero</label>
                <select defaultValue={initialBarberId} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors">
                  {barbers.map(b => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Fecha</label>
                <input type="date" defaultValue="2026-09-23" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Hora</label>
                <input type="time" defaultValue={initialTime} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-secondary">Duración (minutos)</label>
                <select defaultValue="45" className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors">
                  <option value="30">30 min</option>
                  <option value="45">45 min</option>
                  <option value="60">60 min</option>
                  <option value="90">90 min</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-text-secondary">Notas / Observaciones</label>
              <textarea rows={2} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Detalles a tener en cuenta..." />
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-border bg-surfaceHover/30 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-surface transition-colors">
            Cancelar
          </button>
          <button className="px-5 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover transition-colors">
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentModal;
