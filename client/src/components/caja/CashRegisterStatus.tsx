import { Wallet, Smartphone, CreditCard, TrendingUp, TrendingDown } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const CashRegisterStatus = () => {
  const { registerTotals } = useAppContext();
  
  const balance = registerTotals.saldoInicial + registerTotals.ingresos - registerTotals.egresos;

  const stats = [
    { label: 'Efectivo en Caja', value: registerTotals.efectivo + registerTotals.saldoInicial, icon: Wallet, color: 'text-green-500 bg-green-500/10' },
    { label: 'Yape', value: registerTotals.yape, icon: Smartphone, color: 'text-purple-500 bg-purple-500/10' },
    { label: 'Plin', value: registerTotals.plin, icon: Smartphone, color: 'text-blue-400 bg-blue-400/10' },
    { label: 'Tarjetas', value: registerTotals.tarjeta, icon: CreditCard, color: 'text-blue-600 bg-blue-600/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface border border-border rounded-xl p-5">
          <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Saldo Inicial</p>
          <p className="text-2xl font-bold text-text-primary">S/ {registerTotals.saldoInicial.toFixed(2)}</p>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-green-500/10 text-green-500 shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1">Ingresos</p>
            <p className="text-2xl font-bold text-green-500">S/ {registerTotals.ingresos.toFixed(2)}</p>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
          <div className="p-3 rounded-lg bg-red-500/10 text-red-500 shrink-0">
            <TrendingDown className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1">Egresos</p>
            <p className="text-2xl font-bold text-red-500">S/ {registerTotals.egresos.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-text-primary mb-6">Desglose por método de pago</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-background border border-border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <div className={`p-3 rounded-full ${stat.color} mb-3`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-text-secondary mb-1">{stat.label}</p>
                <p className="text-lg font-black text-text-primary">S/ {stat.value.toFixed(2)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CashRegisterStatus;
