import { X, Wallet, CreditCard, Smartphone } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAppContext } from '../../context/AppContext';

const PaymentModal = ({ 
  total, 
  client,
  items,
  onClose, 
  onSuccess 
}: { 
  total: number, 
  client: string,
  items: any[],
  onClose: () => void, 
  onSuccess: () => void 
}) => {
  const { addTransaction } = useAppContext();

  const handlePay = (method: string) => {
    addTransaction({
      concept: `Venta POS - ${client}`,
      type: 'Ingreso',
      method,
      amount: total
    }, items);
    onSuccess();
  };

  const methods = [
    { id: 'Efectivo', icon: Wallet, color: 'text-green-500 bg-green-500/10 hover:bg-green-500/20 border-green-500/20' },
    { id: 'Yape', icon: Smartphone, color: 'text-purple-500 bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20' },
    { id: 'Plin', icon: Smartphone, color: 'text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20' },
    { id: 'Tarjeta', icon: CreditCard, color: 'text-blue-600 bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20' },
    { id: 'Transferencia', icon: Wallet, color: 'text-text-primary bg-surfaceHover hover:bg-surface border-border' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-surface border border-border rounded-xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border bg-surfaceHover/30">
          <h2 className="text-lg font-bold text-text-primary">Completar Pago</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-sm text-text-secondary font-medium mb-1">Monto a cobrar</p>
          <p className="text-4xl font-black text-primary mb-8">S/ {total.toFixed(2)}</p>

          <p className="text-sm text-text-secondary font-medium mb-3 text-left">Selecciona el método de pago:</p>
          
          <div className="grid grid-cols-2 gap-3">
            {methods.map(m => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => handlePay(m.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all",
                    m.color
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-bold text-sm">{m.id}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
