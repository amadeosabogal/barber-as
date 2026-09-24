import { Award, Star, Gift, CheckCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

const LoyaltyInfo = ({ loyalty }: { loyalty: any }) => {
  if (!loyalty) return null;

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'bronce': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'plata': return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
      case 'oro': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'black': return 'text-white bg-zinc-800 border-zinc-700';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  const maxPoints = 5000;
  const progress = Math.min((loyalty.points / maxPoints) * 100, 100);

  return (
    <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Fidelización</h2>
          <p className="text-sm text-text-secondary">Puntos y nivel actual</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-text-secondary font-medium mb-1">Nivel Actual</p>
          <span className={cn("px-4 py-1.5 rounded-full text-sm font-bold border flex items-center gap-2 w-max", getLevelColor(loyalty.level))}>
            <Star className="w-4 h-4" />
            {loyalty.level}
          </span>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-text-secondary font-medium mb-1">Puntos Acumulados</p>
          <p className="text-3xl font-black text-text-primary">{loyalty.points}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs text-text-secondary mb-2 font-medium">
          <span>0 pts</span>
          <span>Siguiente Nivel: {maxPoints} pts</span>
        </div>
        <div className="w-full h-2.5 bg-background rounded-full overflow-hidden border border-border">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-hover rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1">
        <p className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
          <Gift className="w-4 h-4 text-primary" />
          Beneficios Activos
        </p>
        <ul className="space-y-3">
          {loyalty.benefits.map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
              <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoyaltyInfo;
