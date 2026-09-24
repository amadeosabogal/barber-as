import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface AgendaHeaderProps {
  currentDate: Date;
  view: 'day' | 'week' | 'month';
  setView: (v: 'day' | 'week' | 'month') => void;
  onPrevDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
}

const AgendaHeader = ({ currentDate, view, setView, onPrevDay, onNextDay, onToday }: AgendaHeaderProps) => {
  const formattedDate = currentDate.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden">
          <button 
            onClick={onPrevDay}
            className="p-2 text-text-secondary hover:text-primary hover:bg-surfaceHover transition-colors border-r border-border"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={onToday}
            className="px-4 py-2 text-sm font-semibold text-text-primary hover:text-primary transition-colors"
          >
            Hoy
          </button>
          <button 
            onClick={onNextDay}
            className="p-2 text-text-secondary hover:text-primary hover:bg-surfaceHover transition-colors border-l border-border"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <h2 className="text-xl font-bold text-text-primary capitalize flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-primary" />
          {formattedDate}
        </h2>
      </div>

      <div className="flex items-center bg-surface border border-border rounded-lg p-1">
        {(['day', 'week', 'month'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-semibold transition-colors capitalize",
              view === v 
                ? "bg-primary text-background shadow-sm" 
                : "text-text-secondary hover:text-text-primary hover:bg-surfaceHover"
            )}
          >
            {v === 'day' ? 'Día' : v === 'week' ? 'Semana' : 'Mes'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgendaHeader;
