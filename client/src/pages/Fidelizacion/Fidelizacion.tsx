import { Gift, Award, Star, Settings } from 'lucide-react';

const rewards = [
  { id: 1, title: 'Corte Gratis', points: 500, icon: Gift, color: 'text-primary' },
  { id: 2, title: 'Barba Gratis', points: 300, icon: Gift, color: 'text-green-500' },
  { id: 3, title: '20% Descuento', points: 200, icon: Award, color: 'text-yellow-500' },
  { id: 4, title: 'Pomada Reuzel', points: 800, icon: Star, color: 'text-purple-500' },
];

export const Fidelizacion = () => {
  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Fidelización</h1>
          <p className="text-text-secondary mt-1">Sistema de puntos y recompensas.</p>
        </div>
        
        <button className="bg-surface hover:bg-surfaceHover border border-border text-text-primary font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <Settings className="w-5 h-5" />
          Configuración
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface border border-border rounded-xl p-6 lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-text-primary mb-4">Reglas de Acumulación</h2>
            <div className="flex items-center gap-6 bg-background rounded-xl p-6 border border-border">
              <div className="text-center">
                <p className="text-sm font-semibold text-text-secondary mb-1">Gasto (S/)</p>
                <p className="text-4xl font-black text-text-primary">1</p>
              </div>
              <div className="text-text-secondary text-2xl font-black">=</div>
              <div className="text-center">
                <p className="text-sm font-semibold text-text-secondary mb-1">Puntos</p>
                <p className="text-4xl font-black text-primary">1</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary mt-4">Los puntos se calculan automáticamente tras cada venta en el POS.</p>
          </div>

          <div className="bg-surface border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-text-primary mb-4">Métricas Rápidas</h2>
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">Puntos Emitidos Totales</p>
                <p className="text-2xl font-black text-text-primary">45,230</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-xs font-semibold text-text-secondary mb-1 uppercase tracking-wider">Puntos Canjeados</p>
                <p className="text-2xl font-black text-text-primary">12,400</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mb-4">Catálogo de Recompensas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map(reward => {
            const Icon = reward.icon;
            return (
              <div key={reward.id} className="bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-colors group">
                <div className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4 ${reward.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">{reward.title}</h3>
                <p className="text-sm font-bold text-text-secondary">{reward.points} puntos</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
