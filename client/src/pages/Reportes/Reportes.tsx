import { useState } from 'react';
import { Download, FileText, Filter, Calendar as CalendarIcon, User, Scissors, CreditCard } from 'lucide-react';
import { cn } from '../../utils/cn';

const categories = ['Ventas', 'Servicios', 'Clientes', 'Productos', 'Caja', 'Barberos'];

// Datos simulados para previsualización (simulando "Ventas")
const previewData = [
  { id: 'V-1001', date: '23/09/2026', client: 'Carlos M.', service: 'Corte + Barba', amount: 'S/ 65.00', method: 'Yape', barber: 'Roberto' },
  { id: 'V-1002', date: '23/09/2026', client: 'Luis G.', service: 'Corte Clásico', amount: 'S/ 45.00', method: 'Efectivo', barber: 'Daniel' },
  { id: 'V-1003', date: '23/09/2026', client: 'Miguel T.', service: 'Perfilado', amount: 'S/ 25.00', method: 'Plin', barber: 'Carlos' },
  { id: 'V-1004', date: '22/09/2026', client: 'Jorge V.', service: 'Corte Premium', amount: 'S/ 80.00', method: 'Tarjeta', barber: 'Roberto' },
];

export const Reportes = () => {
  const [activeCategory, setActiveCategory] = useState('Ventas');

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Reportes</h1>
        <p className="text-text-secondary mt-1">Generación y exportación de información estructurada.</p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 pb-6">
        
        {/* Panel Lateral: Filtros */}
        <div className="w-full lg:w-72 flex flex-col gap-6">
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> Categoría de Reporte
            </h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                    activeCategory === cat 
                      ? "bg-primary/10 text-primary" 
                      : "text-text-secondary hover:bg-surfaceHover hover:text-text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-5 flex-1">
            <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-primary" /> Filtros
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                  <CalendarIcon className="w-3.5 h-3.5" /> Periodo
                </label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-primary">
                  <option>Este Mes</option>
                  <option>Mes Anterior</option>
                  <option>Últimos 7 días</option>
                  <option>Hoy</option>
                  <option>Personalizado...</option>
                </select>
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                  <User className="w-3.5 h-3.5" /> Barbero
                </label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-primary">
                  <option>Todos</option>
                  <option>Roberto</option>
                  <option>Daniel</option>
                  <option>Carlos</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                  <Scissors className="w-3.5 h-3.5" /> Servicio
                </label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-primary">
                  <option>Todos</option>
                  <option>Peluquería</option>
                  <option>Barbería</option>
                  <option>Combos</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary mb-2 uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5" /> Método de Pago
                </label>
                <select className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:border-primary">
                  <option>Todos</option>
                  <option>Efectivo</option>
                  <option>Yape/Plin</option>
                  <option>Tarjeta</option>
                </select>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-surfaceHover border border-border hover:border-primary text-text-primary font-bold py-2 rounded-lg transition-colors text-sm">
              Aplicar Filtros
            </button>
          </div>
        </div>

        {/* Panel Principal: Preview & Export */}
        <div className="flex-1 flex flex-col bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
          <div className="p-5 border-b border-border bg-surfaceHover/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-text-primary">Vista Previa: Reporte de {activeCategory}</h3>
              <p className="text-xs text-text-secondary mt-1">Mostrando resultados para "Este Mes" (4 resultados)</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-background border border-border hover:border-primary text-text-primary font-bold text-sm rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> Excel
              </button>
              <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-background font-bold text-sm rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" /> PDF
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto p-5">
            <div className="border border-border rounded-xl overflow-hidden bg-background">
              <table className="w-full text-left text-sm">
                <thead className="bg-surfaceHover/50">
                  <tr className="border-b border-border text-text-secondary">
                    <th className="py-3 px-4 font-semibold">ID</th>
                    <th className="py-3 px-4 font-semibold">Fecha</th>
                    <th className="py-3 px-4 font-semibold">Cliente</th>
                    <th className="py-3 px-4 font-semibold">Servicio</th>
                    <th className="py-3 px-4 font-semibold">Barbero</th>
                    <th className="py-3 px-4 font-semibold text-center">Método</th>
                    <th className="py-3 px-4 font-semibold text-right">Monto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {previewData.map(row => (
                    <tr key={row.id} className="hover:bg-surfaceHover/50 transition-colors">
                      <td className="py-3 px-4 text-text-secondary font-mono text-xs">{row.id}</td>
                      <td className="py-3 px-4 text-text-primary">{row.date}</td>
                      <td className="py-3 px-4 font-bold text-text-primary">{row.client}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.service}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.barber}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-2 py-0.5 rounded text-xs border border-border bg-surfaceHover font-semibold text-text-secondary">
                          {row.method}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-bold text-primary">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Resumen al final de la tabla */}
              <div className="bg-surfaceHover/30 p-4 border-t border-border flex justify-end">
                <div className="text-right">
                  <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Total Periodo</p>
                  <p className="text-xl font-black text-text-primary">S/ 215.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
