import { Clock, Plus } from 'lucide-react';
import { cn } from '../../utils/cn';

const WaitingList = ({ list }: { list: any[] }) => {
  const getPriorityStyle = (priority: string) => {
    switch(priority) {
      case 'Alta': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'Media': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'Baja': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-text-secondary bg-surfaceHover border-border';
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-border flex items-center justify-between bg-surfaceHover/30">
        <div>
          <h3 className="font-bold text-text-primary">Lista de Espera</h3>
          <p className="text-xs text-text-secondary">{list.length} clientes en fila</p>
        </div>
        <button className="w-8 h-8 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-background flex items-center justify-center transition-colors">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {list.map(item => (
          <div key={item.id} className="p-3 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex items-start justify-between mb-2">
              <span className="font-bold text-sm text-text-primary group-hover:text-primary transition-colors">{item.client}</span>
              <span className={cn("px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider", getPriorityStyle(item.priority))}>
                {item.priority}
              </span>
            </div>
            <p className="text-xs text-text-secondary mb-3">{item.service}</p>
            <div className="flex items-center gap-1.5 text-xs font-medium text-text-primary bg-surface p-2 rounded-md border border-border">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {item.requestedTime}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaitingList;
