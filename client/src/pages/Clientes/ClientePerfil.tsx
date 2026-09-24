import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, MessageCircle, Star } from 'lucide-react';
import { mockClients } from '../../data/mockClients';
import StyleProfile from '../../components/clientes/perfil/StyleProfile';
import VisualHistory from '../../components/clientes/perfil/VisualHistory';
import ServiceHistory from '../../components/clientes/perfil/ServiceHistory';
import LoyaltyInfo from '../../components/clientes/perfil/LoyaltyInfo';
import { cn } from '../../utils/cn';

export const ClientePerfil = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const client = mockClients.find(c => c.id === Number(id));

  if (!client) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
        <h2 className="text-2xl font-bold text-text-primary">Cliente no encontrado</h2>
        <button onClick={() => navigate('/clientes')} className="mt-4 text-primary hover:underline">Volver a clientes</button>
      </div>
    );
  }

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
    <div className="animate-in fade-in duration-500 pb-8">
      {/* Header and Back Button */}
      <div className="mb-6">
        <button 
          onClick={() => navigate('/clientes')}
          className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a clientes
        </button>
      </div>

      {/* Profile Header Card */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-3xl shadow-lg border-2 border-primary/20">
            {client.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">{client.name}</h1>
              <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-bold border", getStatusBadge(client.status))}>
                {client.status}
              </span>
            </div>
            <p className="text-text-secondary flex items-center gap-3 text-sm">
              <span>{client.phone}</span>
              <span className="w-1 h-1 rounded-full bg-border"></span>
              <span>Registrado: {client.registrationDate}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-background border border-border hover:border-primary/50 text-text-primary hover:text-primary p-2.5 rounded-lg transition-colors group">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="bg-background border border-border hover:border-primary/50 text-text-primary hover:text-primary p-2.5 rounded-lg transition-colors group">
            <Edit className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-6 rounded-lg transition-colors">
            Agendar cita
          </button>
        </div>
      </div>

      {/* Quick KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-surface border border-border rounded-xl p-4">
          <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Visitas Totales</p>
          <p className="text-2xl font-bold text-text-primary">{client.visits}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-4">
          <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Gasto Total</p>
          <p className="text-2xl font-bold text-text-primary">S/ {client.totalSpent.toFixed(2)}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-4">
          <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Ticket Promedio</p>
          <p className="text-2xl font-bold text-text-primary">S/ {client.avgTicket.toFixed(2)}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-4">
          <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">Última Visita</p>
          <p className="text-2xl font-bold text-text-primary">{client.lastVisit}</p>
        </div>
      </div>

      {/* --- Membresía y Sistema de Puntos --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Tarjeta de Membresía */}
        <div className="bg-surface border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">Membresía Activa</p>
                <h3 className="text-2xl font-black text-text-primary">Plan GOLD</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold border border-green-500/20">
                Activa
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-6">Próxima renovación: 23 de Octubre, 2026</p>
          </div>
          
          <div className="space-y-3 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-text-primary">Cortes Clásicos/Premium</span>
                <span className="font-bold text-primary">3 / 4</span>
              </div>
              <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold text-text-primary">Servicio de Barba</span>
                <span className="font-bold text-primary">1 / 1</span>
              </div>
              <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                <div className="bg-green-500 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de Puntos */}
        <div className="bg-surface border border-primary/30 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 pointer-events-none"></div>
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Programa de Lealtad</p>
                <h3 className="text-2xl font-black text-text-primary">Nivel Plata</h3>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-6">1 punto por cada S/ 1 gastado</p>
          </div>
          
          <div className="bg-background border border-border rounded-lg p-4 flex justify-between items-center relative z-10">
            <div>
              <p className="text-xs font-semibold text-text-secondary mb-1">Puntos Disponibles</p>
              <p className="text-3xl font-black text-primary">450</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-text-secondary mb-1">Puntos Usados</p>
              <p className="text-lg font-bold text-text-primary">120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Style Profile & Loyalty */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <StyleProfile profile={client.styleProfile} />
        <LoyaltyInfo loyalty={client.loyalty} />
      </div>

      {/* Visual History */}
      <VisualHistory history={client.visualHistory} />

      {/* Service History */}
      <ServiceHistory history={client.serviceHistory} />
      
    </div>
  );
};
