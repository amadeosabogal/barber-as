import { TrendingUp, AlertTriangle, Lightbulb, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const riskClients = [
  { id: 1, name: 'Carlos Mendoza', lastVisit: '15/07/2026', frequency: '21 días', daysSince: 70, status: 'Alto Riesgo' },
  { id: 2, name: 'Luis García', lastVisit: '02/08/2026', frequency: '15 días', daysSince: 52, status: 'En Riesgo' },
  { id: 3, name: 'Miguel Torres', lastVisit: '10/08/2026', frequency: '30 días', daysSince: 44, status: 'Atención' },
];

const barberPerformance = [
  { id: 1, name: 'Roberto (Master)', services: 145, sales: 4850, clients: 85, avgTicket: 33.4, recurrence: '82%' },
  { id: 2, name: 'Daniel', services: 120, sales: 3200, clients: 95, avgTicket: 26.6, recurrence: '65%' },
  { id: 3, name: 'Carlos', services: 98, sales: 2500, clients: 80, avgTicket: 25.5, recurrence: '58%' },
];

const mostRequestedServices = [
  { name: 'Corte Clásico', volume: 245, percent: 85 },
  { name: 'Corte + Barba', volume: 180, percent: 62 },
  { name: 'Perfilado de Barba', volume: 95, percent: 32 },
  { name: 'Corte Niño', volume: 45, percent: 15 },
];

const HeatmapCell = ({ intensity }: { intensity: number }) => {
  // intensity de 0 a 4
  const bgColors = [
    'bg-surfaceHover',
    'bg-primary/20',
    'bg-primary/40',
    'bg-primary/70',
    'bg-primary'
  ];
  return <div className={cn("w-full pt-[100%] rounded-sm", bgColors[intensity] || bgColors[0])}></div>;
};

export const Intelligence = () => {
  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Barbería Intelligence</h1>
        <p className="text-text-secondary mt-1">Análisis profundo del rendimiento y comportamiento de tus clientes.</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 pb-8">
        
        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface border border-primary/20 rounded-xl p-5 flex gap-4">
            <div className="mt-1"><Lightbulb className="w-6 h-6 text-primary" /></div>
            <div>
              <h3 className="font-bold text-text-primary mb-1">Horario Pico</h3>
              <p className="text-sm text-text-secondary">Los sábados entre 4 PM y 7 PM concentran la mayor cantidad de citas.</p>
            </div>
          </div>
          <div className="bg-surface border border-primary/20 rounded-xl p-5 flex gap-4">
            <div className="mt-1"><Lightbulb className="w-6 h-6 text-primary" /></div>
            <div>
              <h3 className="font-bold text-text-primary mb-1">Servicio Estrella</h3>
              <p className="text-sm text-text-secondary">Corte + Barba representa el servicio con mayor volumen de ingresos.</p>
            </div>
          </div>
          <div className="bg-surface border border-red-500/20 rounded-xl p-5 flex gap-4">
            <div className="mt-1"><AlertTriangle className="w-6 h-6 text-red-500" /></div>
            <div>
              <h3 className="font-bold text-text-primary mb-1">Alerta de Fuga</h3>
              <p className="text-sm text-text-secondary">14 clientes llevan más tiempo que su intervalo habitual sin visitar.</p>
            </div>
          </div>
        </div>

        {/* Gráficos Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Ticket Promedio */}
          <div className="bg-surface border border-border rounded-xl p-6 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-text-primary mb-1">Ticket Promedio</h2>
              <p className="text-sm text-text-secondary mb-6">Comparación con mes anterior</p>
            </div>
            
            <div className="text-center py-6">
              <p className="text-5xl font-black text-primary mb-4">S/ 42.50</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 font-bold text-sm border border-green-500/20">
                <TrendingUp className="w-4 h-4" /> +12.5%
              </div>
              <p className="text-xs text-text-secondary mt-3">Mes anterior: S/ 37.80</p>
            </div>
          </div>

          {/* Servicios Más Solicitados */}
          <div className="bg-surface border border-border rounded-xl p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-text-primary mb-1">Servicios de Mayor Volumen</h2>
            <p className="text-sm text-text-secondary mb-6">Distribución de demanda por tipo de servicio</p>
            
            <div className="space-y-5">
              {mostRequestedServices.map((service, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-text-primary">{service.name}</span>
                    <span className="font-bold text-text-secondary">{service.volume} servicios</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${service.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heatmap de Horarios */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold text-text-primary mb-1">Horarios de Mayor Demanda</h2>
          <p className="text-sm text-text-secondary mb-6">Concentración histórica de citas por día y hora</p>
          
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-12 gap-1 mb-2">
                <div className="col-span-1"></div>
                {['10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p'].map(h => (
                  <div key={h} className="col-span-1 text-center text-xs text-text-secondary font-semibold">{h}</div>
                ))}
              </div>
              
              {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                <div key={day} className="grid grid-cols-12 gap-1 mb-1 items-center">
                  <div className="col-span-1 text-xs font-bold text-text-secondary">{day}</div>
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="col-span-1">
                      {/* Simular datos: Sábados tarde más intensos, mañanas bajas */}
                      <HeatmapCell intensity={day === 'Sáb' && i > 5 ? Math.floor(Math.random() * 2) + 3 : Math.floor(Math.random() * 3)} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-text-secondary font-semibold">
              <span>Menos demanda</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-surfaceHover rounded-sm"></div>
                <div className="w-3 h-3 bg-primary/20 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary/40 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary/70 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary rounded-sm"></div>
              </div>
              <span>Mayor demanda</span>
            </div>
          </div>
        </div>

        {/* Tablas Inferiores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Rendimiento Barberos */}
          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="p-5 border-b border-border bg-surfaceHover/30">
              <h3 className="text-lg font-bold text-text-primary">Rendimiento de Barberos</h3>
              <p className="text-xs text-text-secondary mt-1">Métricas objetivas del mes actual</p>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-surfaceHover/50">
                  <tr className="border-b border-border text-text-secondary">
                    <th className="py-3 px-4 font-semibold">Barbero</th>
                    <th className="py-3 px-4 font-semibold text-center">Servicios</th>
                    <th className="py-3 px-4 font-semibold text-center">Ticket Prom.</th>
                    <th className="py-3 px-4 font-semibold text-center">Retención</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {barberPerformance.map(b => (
                    <tr key={b.id} className="hover:bg-surfaceHover/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-text-primary">{b.name}</td>
                      <td className="py-3 px-4 text-center text-text-secondary">{b.services}</td>
                      <td className="py-3 px-4 text-center font-semibold text-text-primary">S/ {b.avgTicket.toFixed(2)}</td>
                      <td className="py-3 px-4 text-center text-primary font-bold">{b.recurrence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clientes en Riesgo */}
          <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="p-5 border-b border-border bg-surfaceHover/30">
              <h3 className="text-lg font-bold text-text-primary">Clientes en Riesgo</h3>
              <p className="text-xs text-text-secondary mt-1">Llevan más tiempo del habitual sin regresar</p>
            </div>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-surfaceHover/50">
                  <tr className="border-b border-border text-text-secondary">
                    <th className="py-3 px-4 font-semibold">Cliente</th>
                    <th className="py-3 px-4 font-semibold">Última Visita</th>
                    <th className="py-3 px-4 font-semibold text-center">Desvío</th>
                    <th className="py-3 px-4 font-semibold text-center">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {riskClients.map(c => (
                    <tr key={c.id} className="hover:bg-surfaceHover/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-text-primary">{c.name}</td>
                      <td className="py-3 px-4 text-text-secondary">
                        {c.lastVisit}
                        <span className="block text-xs text-text-secondary/70">Habitual: cada {c.frequency}</span>
                      </td>
                      <td className="py-3 px-4 text-center font-black text-text-primary">{c.daysSince} días</td>
                      <td className="py-3 px-4 text-center">
                        <span className={cn(
                          "px-2 py-1 rounded-full text-xs font-bold border",
                          c.status === 'Alto Riesgo' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                          c.status === 'En Riesgo' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' :
                          'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        )}>
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
