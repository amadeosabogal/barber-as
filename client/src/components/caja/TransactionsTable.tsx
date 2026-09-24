import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils/cn';

const TransactionsTable = () => {
  const { transactions } = useAppContext();

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden mt-6">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-bold text-text-primary">Movimientos de hoy</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surfaceHover/50">
            <tr className="border-b border-border text-text-secondary">
              <th className="py-4 px-6 font-semibold">Hora</th>
              <th className="py-4 px-6 font-semibold">Concepto</th>
              <th className="py-4 px-6 font-semibold">Tipo</th>
              <th className="py-4 px-6 font-semibold">Método</th>
              <th className="py-4 px-6 font-semibold text-right">Monto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {transactions.length > 0 ? (
              transactions.map(tx => (
                <tr key={tx.id} className="hover:bg-surfaceHover/50 transition-colors">
                  <td className="py-4 px-6 text-text-secondary">{tx.time}</td>
                  <td className="py-4 px-6 font-medium text-text-primary">{tx.concept}</td>
                  <td className="py-4 px-6">
                    <span className={cn(
                      "flex items-center gap-1 text-xs font-bold w-max",
                      tx.type === 'Ingreso' ? 'text-green-500' : 'text-red-500'
                    )}>
                      {tx.type === 'Ingreso' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-text-secondary">{tx.method}</td>
                  <td className={cn(
                    "py-4 px-6 text-right font-black",
                    tx.type === 'Ingreso' ? 'text-green-500' : 'text-red-500'
                  )}>
                    {tx.type === 'Ingreso' ? '+' : '-'} S/ {tx.amount.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-text-secondary">
                  No hay movimientos registrados hoy.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
