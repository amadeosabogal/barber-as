import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../data/mockData';
import { cn } from '../../utils/cn';

const TodayAppointments = () => {
  const navigate = useNavigate();
  
  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Confirmada': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Pendiente': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'Atendida': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Cancelada': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-surfaceHover text-text-secondary border-border';
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-5 mb-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-text-primary">Citas de hoy</h3>
        <button 
          onClick={() => navigate('/agenda')}
          className="text-sm text-primary hover:text-primary-hover font-medium cursor-pointer"
        >
          Ver todas
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-text-secondary">
              <th className="pb-3 font-medium">Hora</th>
              <th className="pb-3 font-medium">Cliente</th>
              <th className="pb-3 font-medium">Servicio</th>
              <th className="pb-3 font-medium">Barbero</th>
              <th className="pb-3 font-medium text-right">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {mockData.todayAppointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-surfaceHover/50 transition-colors">
                <td className="py-3 font-semibold text-text-primary">{apt.time}</td>
                <td className="py-3 font-medium">{apt.client}</td>
                <td className="py-3 text-text-secondary">{apt.service}</td>
                <td className="py-3 text-text-secondary">{apt.barber}</td>
                <td className="py-3 text-right">
                  <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold border", getStatusStyle(apt.status))}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodayAppointments;
