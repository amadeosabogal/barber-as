import React from 'react';
import { mockData } from '../../data/mockData';

const BarberPerformance = () => {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 overflow-hidden">
      <h3 className="text-lg font-bold text-text-primary mb-6">Rendimiento de barberos</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-text-secondary">
              <th className="pb-3 font-medium">Barbero</th>
              <th className="pb-3 font-medium text-center">Servicios</th>
              <th className="pb-3 font-medium text-right">Ventas</th>
              <th className="pb-3 font-medium text-right">Ticket Prom.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {mockData.barberPerformance.map((barber) => (
              <tr key={barber.id} className="hover:bg-surfaceHover/50 transition-colors">
                <td className="py-3 font-medium text-text-primary flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                    {barber.name.substring(0, 2).toUpperCase()}
                  </div>
                  {barber.name}
                </td>
                <td className="py-3 text-center text-text-secondary">{barber.services}</td>
                <td className="py-3 text-right font-semibold text-text-primary">S/ {barber.sales}</td>
                <td className="py-3 text-right text-text-secondary">S/ {barber.avgTicket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarberPerformance;
