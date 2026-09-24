import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockClients } from '../../data/mockClients';
import { cn } from '../../utils/cn';
import NewClientModal from '../../components/clientes/NewClientModal';

const ClientesTable = ({ clients, onRowClick }: { clients: any[], onRowClick: (id: number) => void }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Frecuente': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Nuevo': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'VIP': return 'bg-primary/10 text-primary border-primary/20';
      case 'Inactivo': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-surfaceHover text-text-secondary border-border';
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surfaceHover/50">
            <tr className="border-b border-border text-text-secondary">
              <th className="py-4 px-6 font-semibold">Cliente</th>
              <th className="py-4 px-6 font-semibold">Teléfono</th>
              <th className="py-4 px-6 font-semibold">Última visita</th>
              <th className="py-4 px-6 font-semibold text-center">Visitas</th>
              <th className="py-4 px-6 font-semibold text-right">Gasto total</th>
              <th className="py-4 px-6 font-semibold">Barbero habitual</th>
              <th className="py-4 px-6 font-semibold text-center">Estado</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {clients.map((client) => (
              <tr 
                key={client.id} 
                className="hover:bg-surfaceHover/50 transition-colors cursor-pointer group"
                onClick={() => onRowClick(client.id)}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {client.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-semibold text-text-primary group-hover:text-primary transition-colors">{client.name}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-text-secondary">{client.phone}</td>
                <td className="py-4 px-6 text-text-secondary">{client.lastVisit}</td>
                <td className="py-4 px-6 text-center text-text-secondary font-medium">{client.visits}</td>
                <td className="py-4 px-6 text-right font-semibold text-text-primary">S/ {client.totalSpent.toFixed(2)}</td>
                <td className="py-4 px-6 text-text-secondary">{client.favoriteBarber}</td>
                <td className="py-4 px-6 text-center">
                  <span className={cn("px-3 py-1 rounded-full text-xs font-bold border", getStatusBadge(client.status))}>
                    {client.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="p-2 text-text-secondary hover:text-primary transition-colors rounded-lg hover:bg-background">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Clientes = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['Todos', 'Nuevos', 'Frecuentes', 'VIP', 'Inactivos'];

  const filteredClients = mockClients.filter(c => {
    const matchesFilter = filter === 'Todos' || c.status === (filter === 'Nuevos' ? 'Nuevo' : filter === 'Frecuentes' ? 'Frecuente' : filter === 'Inactivos' ? 'Inactivo' : filter);
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Clientes</h1>
          <p className="text-text-secondary mt-1">Gestión de base de datos y perfiles CRM.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nuevo cliente
        </button>
      </div>

      <div className="bg-surface border border-border p-4 rounded-xl flex flex-col lg:flex-row gap-4 justify-between items-center">
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                filter === f ? "bg-primary/20 text-primary border border-primary/30" : "bg-background text-text-secondary hover:text-text-primary border border-border"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o teléfono..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary text-text-primary placeholder-text-secondary transition-colors"
          />
        </div>
      </div>

      <ClientesTable clients={filteredClients} onRowClick={(id) => navigate(`/clientes/${id}`)} />

      {isModalOpen && <NewClientModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
