import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { mockData } from '../../data/mockData';

const SalesChart = () => {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Evolución de Ventas</h3>
          <p className="text-sm text-text-secondary">Ingresos brutos por servicios y productos</p>
        </div>
        <select className="bg-background border border-border text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary text-text-primary">
          <option>Hoy</option>
          <option>7 días</option>
          <option>30 días</option>
        </select>
      </div>
      
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockData.salesChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E5A93D" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E5A93D" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2C313D" vertical={false} />
            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `S/${value}`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1A1D24', borderColor: '#2C313D', borderRadius: '8px', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5A93D' }}
            />
            <Area type="monotone" dataKey="sales" stroke="#E5A93D" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
