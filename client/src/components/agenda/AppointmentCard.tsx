import { Clock, User } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AppointmentCardProps {
  appointment: any;
  onClick: (apt: any) => void;
  style?: React.CSSProperties;
}

const AppointmentCard = ({ appointment, onClick, style }: AppointmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmada': return 'bg-blue-500 text-white border-blue-600';
      case 'Pendiente': return 'bg-yellow-500 text-black border-yellow-600';
      case 'En espera': return 'bg-orange-500 text-white border-orange-600';
      case 'Atendida': return 'bg-green-500 text-white border-green-600';
      case 'Cancelada': return 'bg-red-500 text-white border-red-600 opacity-50';
      case 'No asistió': return 'bg-zinc-600 text-white border-zinc-700 opacity-75';
      default: return 'bg-surfaceHover text-text-primary border-border';
    }
  };

  return (
    <div 
      onClick={() => onClick(appointment)}
      style={style}
      className={cn(
        "absolute left-1 right-1 rounded-md border p-2 text-xs overflow-hidden cursor-pointer hover:brightness-110 transition-all shadow-sm z-10 flex flex-col gap-1",
        getStatusColor(appointment.status)
      )}
    >
      <div className="font-bold truncate">{appointment.client}</div>
      <div className="truncate opacity-90">{appointment.service}</div>
      
      <div className="mt-auto flex items-center justify-between opacity-80 text-[10px] font-medium">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {appointment.startTime}
        </span>
        <span className="truncate max-w-[50%] text-right">{appointment.status}</span>
      </div>
    </div>
  );
};

export default AppointmentCard;
