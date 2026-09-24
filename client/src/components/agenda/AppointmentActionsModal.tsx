import { X, Check, Clock, UserCheck, UserX, Ban, Edit2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const AppointmentActionsModal = ({ 
  appointment, 
  onClose, 
  onUpdateStatus 
}: { 
  appointment: any, 
  onClose: () => void, 
  onUpdateStatus: (id: number, status: string) => void 
}) => {
  if (!appointment) return null;

  const actions = [
    { label: 'Confirmar', status: 'Confirmada', icon: Check, color: 'text-blue-500 hover:bg-blue-500/10' },
    { label: 'Llegó (En espera)', status: 'En espera', icon: Clock, color: 'text-orange-500 hover:bg-orange-500/10' },
    { label: 'Atendida', status: 'Atendida', icon: UserCheck, color: 'text-green-500 hover:bg-green-500/10' },
    { label: 'No asistió', status: 'No asistió', icon: UserX, color: 'text-zinc-400 hover:bg-zinc-800' },
    { label: 'Cancelar', status: 'Cancelada', icon: Ban, color: 'text-red-500 hover:bg-red-500/10' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface border border-border rounded-xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border bg-surfaceHover/30">
          <h2 className="text-lg font-bold text-text-primary">Acciones de Cita</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5">
          <div className="mb-5 pb-5 border-b border-border">
            <h3 className="font-bold text-text-primary text-xl mb-1">{appointment.client}</h3>
            <p className="text-sm text-text-secondary mb-3">{appointment.service} • {appointment.duration} min</p>
            <div className="flex items-center justify-between bg-background p-3 rounded-lg border border-border">
              <div>
                <p className="text-xs text-text-secondary">Fecha y Hora</p>
                <p className="text-sm font-semibold text-text-primary">{appointment.date} a las {appointment.startTime}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-text-secondary">Estado actual</p>
                <p className="text-sm font-bold text-primary">{appointment.status}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {actions.map(action => {
              const Icon = action.icon;
              return (
                <button
                  key={action.status}
                  onClick={() => {
                    onUpdateStatus(appointment.id, action.status);
                    onClose();
                  }}
                  disabled={appointment.status === action.status}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed",
                    action.color,
                    appointment.status === action.status ? "bg-surfaceHover border border-border opacity-50" : "border border-transparent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {action.label}
                </button>
              );
            })}
            
            <hr className="border-border my-2" />
            
            <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-semibold text-sm text-text-secondary hover:text-text-primary hover:bg-surface border border-border">
              <Edit2 className="w-4 h-4" />
              Editar o Reprogramar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentActionsModal;
