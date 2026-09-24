import { useState } from 'react';
import { Edit2, Ban, CheckCircle2, MoreVertical, Plus } from 'lucide-react';
import { mockServicesData } from '../../data/mockServices';
import { cn } from '../../utils/cn';

export const Servicios = () => {
  const [services, setServices] = useState(mockServicesData);

  const toggleStatus = (id: number) => {
    setServices(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: s.status === 'Activo' ? 'Inactivo' : 'Activo' };
      }
      return s;
    }));
  };

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Servicios</h1>
          <p className="text-text-secondary mt-1">Gestión del catálogo y comisiones.</p>
        </div>
        
        <button className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Nuevo Servicio
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
          <table className="w-full text-left text-sm">
            <thead className="bg-surfaceHover/50">
              <tr className="border-b border-border text-text-secondary">
                <th className="py-4 px-6 font-semibold">Servicio</th>
                <th className="py-4 px-6 font-semibold">Categoría</th>
                <th className="py-4 px-6 font-semibold">Precio / Duración</th>
                <th className="py-4 px-6 font-semibold text-center">Comisión</th>
                <th className="py-4 px-6 font-semibold">Estado</th>
                <th className="py-4 px-6 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {services.map(s => (
                <tr key={s.id} className={cn("transition-colors", s.status === 'Activo' ? 'hover:bg-surfaceHover/50' : 'bg-background opacity-60')}>
                  <td className="py-4 px-6 font-bold text-text-primary">{s.name}</td>
                  <td className="py-4 px-6 text-text-secondary">{s.category}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-primary">S/ {s.price.toFixed(2)}</span>
                      <span className="text-xs text-text-secondary">{s.duration} min</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-surfaceHover border border-border font-bold">
                      {s.commission}%
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {s.status === 'Activo' ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20 w-max">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Activo
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-zinc-400 bg-zinc-800 border border-zinc-700 w-max">
                        <Ban className="w-3.5 h-3.5" /> Inactivo
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-text-secondary hover:text-primary bg-surfaceHover rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => toggleStatus(s.id)}
                        className={cn("p-2 rounded-lg transition-colors", s.status === 'Activo' ? 'text-text-secondary hover:text-red-500 bg-surfaceHover' : 'text-green-500 hover:text-green-400 bg-green-500/10')}
                        title={s.status === 'Activo' ? 'Desactivar' : 'Activar'}
                      >
                        {s.status === 'Activo' ? <Ban className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
