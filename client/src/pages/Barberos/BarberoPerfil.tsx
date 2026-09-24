import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, TrendingUp, Scissors, Calendar, Users, Wallet } from 'lucide-react';
import { mockAgenda } from '../../data/mockAgenda';

export const BarberoPerfil = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const barber = mockAgenda.barbers.find(b => b.id === Number(id));

  if (!barber) return <div className="p-8 text-center text-text-secondary">Barbero no encontrado.</div>;

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Perfil de Barbero</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        {/* Header Section */}
        <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="w-32 h-32 rounded-full bg-primary/20 text-primary flex items-center justify-center text-4xl font-bold border-4 border-surface shadow-xl z-10 shrink-0">
            {barber.avatar}
          </div>
          
          <div className="text-center md:text-left z-10 flex-1">
            <h2 className="text-3xl font-black text-text-primary mb-2">{barber.name}</h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
              <span className="px-3 py-1 bg-surfaceHover border border-border rounded-full text-sm font-semibold text-text-primary flex items-center gap-2">
                <Scissors className="w-4 h-4 text-primary" /> Master Barber
              </span>
              <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-full text-sm font-bold flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" /> 4.9 (120 reseñas)
              </span>
            </div>
            <p className="text-text-secondary">Se unió en Enero 2026 • +2.5k servicios realizados.</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg"><Calendar className="w-5 h-5" /></div>
              <p className="text-sm font-semibold text-text-secondary">Citas Hoy</p>
            </div>
            <p className="text-2xl font-black text-text-primary">8</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500/10 text-green-500 rounded-lg"><Wallet className="w-5 h-5" /></div>
              <p className="text-sm font-semibold text-text-secondary">Ventas Mes</p>
            </div>
            <p className="text-2xl font-black text-text-primary">S/ 4,250</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
              <p className="text-sm font-semibold text-text-secondary">Comisión (50%)</p>
            </div>
            <p className="text-2xl font-black text-text-primary">S/ 2,125</p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg"><Users className="w-5 h-5" /></div>
              <p className="text-sm font-semibold text-text-secondary">Clientes Únicos</p>
            </div>
            <p className="text-2xl font-black text-text-primary">85</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-text-primary mb-4">Servicios más realizados</h3>
            <div className="space-y-4">
              {[
                { name: 'Corte Clásico', count: 65, percent: 52 },
                { name: 'Corte + Barba', count: 42, percent: 34 },
                { name: 'Perfilado de Barba', count: 17, percent: 14 }
              ].map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-text-primary">{s.name}</span>
                    <span className="text-text-secondary">{s.count} veces</span>
                  </div>
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center border-dashed">
            <Calendar className="w-10 h-10 text-text-secondary mb-3" />
            <h3 className="text-lg font-bold text-text-primary mb-1">Agenda Individual</h3>
            <p className="text-text-secondary text-sm mb-4">Revisa la disponibilidad detallada de {barber.name}.</p>
            <button className="px-5 py-2.5 rounded-lg bg-surfaceHover border border-border text-text-primary font-bold hover:border-primary transition-colors">
              Ver Agenda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
