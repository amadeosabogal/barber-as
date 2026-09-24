import React from 'react';
import { TrendingUp, Users, Scissors, CalendarCheck, Receipt, PackageOpen } from 'lucide-react';
import { mockData } from '../../data/mockData';
import { cn } from '../../utils/cn';

const KPIStats = () => {
  const kpis = [
    { label: 'Ventas de hoy', value: `S/ ${mockData.kpis.todaySales}`, trend: mockData.kpis.todaySalesTrend, icon: TrendingUp, color: 'text-primary' },
    { label: 'Servicios realizados', value: mockData.kpis.servicesDone, trend: mockData.kpis.servicesTrend, icon: Scissors, color: 'text-blue-500' },
    { label: 'Clientes atendidos', value: mockData.kpis.clientsServed, trend: mockData.kpis.clientsTrend, icon: Users, color: 'text-green-500' },
    { label: 'Citas de hoy', value: mockData.kpis.todayAppointments, trend: mockData.kpis.appointmentsTrend, icon: CalendarCheck, color: 'text-purple-500' },
    { label: 'Ticket promedio', value: `S/ ${mockData.kpis.averageTicket}`, trend: mockData.kpis.averageTicketTrend, icon: Receipt, color: 'text-orange-500' },
    { label: 'Productos vendidos', value: mockData.kpis.productsSold, trend: mockData.kpis.productsTrend, icon: PackageOpen, color: 'text-cyan-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {kpis.map((kpi, idx) => {
        const isPositive = kpi.trend.startsWith('+');
        const isNeutral = kpi.trend === '0' || kpi.trend === '0%';
        
        return (
          <div key={idx} className="bg-surface rounded-xl p-5 border border-border flex items-center hover:border-primary/50 transition-colors group">
            <div className={cn("w-12 h-12 rounded-lg bg-background flex items-center justify-center mr-4 group-hover:scale-110 transition-transform", kpi.color)}>
              <kpi.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-text-secondary font-medium">{kpi.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <h4 className="text-2xl font-bold text-text-primary">{kpi.value}</h4>
                {!isNeutral && (
                  <span className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-full",
                    isPositive ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {kpi.trend}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPIStats;
