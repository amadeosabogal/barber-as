import { Crown, Check, Plus, Edit2, Shield } from 'lucide-react';
import { cn } from '../../utils/cn';

const plans = [
  {
    id: 1,
    name: 'GOLD',
    price: 99.0,
    period: 'mes',
    icon: Crown,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/50',
    status: 'Activo',
    benefits: [
      '4 cortes clásicos o premium',
      '1 servicio de barba spa',
      '10% dscto. en productos',
      'Prioridad en lista de espera'
    ],
    usage: '4 cortes + 1 barba'
  },
  {
    id: 2,
    name: 'BASIC',
    price: 59.0,
    period: 'mes',
    icon: Shield,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/50',
    status: 'Activo',
    benefits: [
      '2 cortes clásicos',
      '1 perfilado de barba',
      '5% dscto. en productos'
    ],
    usage: '2 cortes + 1 barba'
  }
];

export const Membresias = () => {
  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Planes y Membresías</h1>
          <p className="text-text-secondary mt-1">Gestión de suscripciones recurrentes para retención de clientes.</p>
        </div>
        
        <button className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          Crear Plan
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map(plan => {
            const Icon = plan.icon;
            return (
              <div key={plan.id} className={cn(
                "bg-surface border-2 rounded-2xl p-6 flex flex-col relative transition-all hover:shadow-2xl hover:-translate-y-1",
                plan.borderColor
              )}>
                <button className="absolute top-4 right-4 p-2 rounded-lg text-text-secondary hover:text-primary bg-background border border-border transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6", plan.bgColor, plan.color)}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-text-primary">S/ {plan.price.toFixed(2)}</span>
                  <span className="text-text-secondary font-medium">/{plan.period}</span>
                </div>
                
                <div className="space-y-4 flex-1 mb-8">
                  <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Beneficios incluidos:</p>
                  {plan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary/20 text-primary shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-text-primary font-medium text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-background rounded-xl p-4 border border-border text-center">
                  <p className="text-xs text-text-secondary mb-1">Total de servicios:</p>
                  <p className="font-bold text-primary">{plan.usage}</p>
                </div>
              </div>
            );
          })}
          
          {/* Tarjeta de añadir nuevo plan */}
          <div className="bg-surface/50 border-2 border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary/50 hover:bg-surfaceHover/50 transition-colors min-h-[400px]">
            <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary mb-4 group-hover:text-primary">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Nuevo Plan</h3>
            <p className="text-sm text-text-secondary">Diseña una membresía personalizada para aumentar la retención.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
