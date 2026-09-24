import { Star, Scissors, Briefcase, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockAgenda } from '../../data/mockAgenda';

export const Barberos = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Barberos</h1>
          <p className="text-text-secondary mt-1">Gestión del equipo y rendimiento.</p>
        </div>
        
        <button className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Añadir Barbero
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockAgenda.barbers.map(barber => (
            <div 
              key={barber.id} 
              onClick={() => navigate(`/barberos/${barber.id}`)}
              className="bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold">
                  {barber.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">{barber.name}</h3>
                  <p className="text-sm text-text-secondary">Master Barber</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-background border border-border rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-yellow-500 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-xs text-text-secondary">Calificación</p>
                  <p className="font-bold text-text-primary">4.9/5</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-primary mb-1">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-text-secondary">Servicios</p>
                  <p className="font-bold text-text-primary">124 este mes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-text-secondary border-t border-border pt-4">
                <Scissors className="w-4 h-4" />
                <span>Especialidad: Degradados</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
