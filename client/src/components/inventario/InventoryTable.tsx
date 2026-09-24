import { PackageSearch, AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { cn } from '../../utils/cn';

const InventoryTable = () => {
  const { inventory } = useAppContext();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Disponible':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/20"><CheckCircle2 className="w-3.5 h-3.5" /> Disponible</span>;
      case 'Stock bajo':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20"><AlertTriangle className="w-3.5 h-3.5" /> Stock bajo</span>;
      case 'Agotado':
        return <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/20"><AlertCircle className="w-3.5 h-3.5" /> Agotado</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-lg">
      <div className="p-5 border-b border-border flex items-center justify-between bg-surfaceHover/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg text-primary">
            <PackageSearch className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-text-primary">Inventario Actual</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surfaceHover/50">
            <tr className="border-b border-border text-text-secondary">
              <th className="py-4 px-6 font-semibold">Producto</th>
              <th className="py-4 px-6 font-semibold">Categoría</th>
              <th className="py-4 px-6 font-semibold text-center">Stock</th>
              <th className="py-4 px-6 font-semibold text-center">Mínimo</th>
              <th className="py-4 px-6 font-semibold text-right">Costo / Venta</th>
              <th className="py-4 px-6 font-semibold text-center">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {inventory.map(item => (
              <tr key={item.id} className="hover:bg-surfaceHover/50 transition-colors">
                <td className="py-4 px-6 font-bold text-text-primary">{item.name}</td>
                <td className="py-4 px-6 text-text-secondary">{item.category}</td>
                <td className={cn("py-4 px-6 text-center font-black text-lg", item.stock <= item.minStock ? 'text-red-500' : 'text-text-primary')}>
                  {item.stock}
                </td>
                <td className="py-4 px-6 text-center text-text-secondary font-medium">{item.minStock}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary">S/ {item.cost.toFixed(2)}</span>
                    <span className="font-bold text-text-primary">S/ {item.price.toFixed(2)}</span>
                  </div>
                </td>
                <td className="py-4 px-6 flex justify-center">
                  {getStatusBadge(item.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
