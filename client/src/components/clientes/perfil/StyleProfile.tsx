import { Scissors, AlertCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

const StyleProfile = ({ profile }: { profile: any }) => {
  if (!profile) return null;

  return (
    <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
        <Scissors className="w-64 h-64 text-primary" />
      </div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
          <Scissors className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-text-primary">Ficha de Estilo</h2>
          <p className="text-sm text-text-secondary">Preferencias técnicas del cliente</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 relative z-10">
        <div className="bg-background border border-border rounded-lg p-4">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Corte Habitual</p>
          <p className="text-text-primary font-medium">{profile.haircut}</p>
        </div>
        
        <div className="bg-background border border-border rounded-lg p-4">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Tipo de Fade</p>
          <p className="text-text-primary font-medium">{profile.fadeType}</p>
        </div>
        
        <div className="bg-background border border-border rounded-lg p-4">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Longitud Superior</p>
          <p className="text-text-primary font-medium">{profile.topLength}</p>
        </div>
        
        <div className="bg-background border border-border rounded-lg p-4">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Estilo de Barba</p>
          <p className="text-text-primary font-medium">{profile.beardStyle}</p>
        </div>
      </div>

      <div className="mt-4 space-y-4 relative z-10">
        <div className="bg-background border border-border rounded-lg p-4">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-1">Preferencias</p>
          <p className="text-sm text-text-primary leading-relaxed">{profile.preferences}</p>
        </div>
        
        {profile.notes && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1">Observaciones Críticas</p>
              <p className="text-sm text-text-primary leading-relaxed">{profile.notes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleProfile;
