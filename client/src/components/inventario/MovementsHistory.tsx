import { History, ArrowDownRight, ArrowUpRight, RefreshCw } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils/cn';

const MovementsHistory = () => {
  const { inventoryMovements } = useAppContext();

  const getMovementIcon = (type: string) => {
    switch (type) {
      case 'Entrada': return <ArrowUpRight className="w-4 h-4 text-green-500" />;
      case 'Salida': return <ArrowDownRight className="w-4 h-4 text-red-500" />;
      case 'Ajuste': return <RefreshCw className="w-4 h-4 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg mt-6">
      <div className="p-5 border-b border-border flex items-center gap-3 bg-surfaceHover/30">
        <div className="p-2 bg-primary/20 rounded-lg text-primary">
          <History className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-text-primary">Historial de Movimientos</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surfaceHover/50">
            <tr className="border-b border-border text-text-secondary">
              <th className="py-4 px-6 font-semibold">Fecha y Hora</th>
              <th className="py-4 px-6 font-semibold">Producto</th>
              <th className="py-4 px-6 font-semibold">Movimiento</th>
              <th className="py-4 px-6 font-semibold text-center">Cantidad</th>
              <th className="py-4 px-6 font-semibold">Usuario</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {inventoryMovements.length > 0 ? (
              inventoryMovements.map(mov => (
                <tr key={mov.id} className="hover:bg-surfaceHover/50 transition-colors">
                  <td className="py-4 px-6 text-text-secondary text-xs">{mov.date}</td>
                  <td className="py-4 px-6 font-bold text-text-primary">{mov.product}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {getMovementIcon(mov.type)}
                      <span className="font-medium text-text-primary">{mov.type}</span>
                    </div>
                  </td>
                  <td className={cn(
                    "py-4 px-6 text-center font-black",
                    mov.type === 'Entrada' ? 'text-green-500' : mov.type === 'Salida' ? 'text-red-500' : 'text-blue-500'
                  )}>
                    {mov.type === 'Entrada' ? '+' : mov.type === 'Salida' ? '-' : ''}{mov.quantity}
                  </td>
                  <td className="py-4 px-6 text-text-secondary">{mov.user}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-text-secondary">
                  No hay movimientos registrados. Realiza una venta en el POS para ver la salida automática.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovementsHistory;
