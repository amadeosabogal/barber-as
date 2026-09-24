import { useState } from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const InventoryMovementModal = ({ onClose }: { onClose: () => void }) => {
  const { inventory, setInventory, addInventoryMovement } = useAppContext();
  
  const [selectedProductId, setSelectedProductId] = useState('');
  const [type, setType] = useState<'Entrada' | 'Salida' | 'Ajuste'>('Entrada');
  const [quantity, setQuantity] = useState('');

  const handleSave = () => {
    const qty = parseInt(quantity) || 0;
    if (!selectedProductId || qty <= 0) return;

    const productId = parseInt(selectedProductId);
    const product = inventory.find(i => i.id === productId);
    if (!product) return;

    // Update inventory
    setInventory(prev => prev.map(item => {
      if (item.id === productId) {
        let newStock = item.stock;
        if (type === 'Entrada') newStock += qty;
        else if (type === 'Salida') newStock = Math.max(0, newStock - qty);
        else if (type === 'Ajuste') newStock = qty; // Ajuste setea el stock absoluto

        let newStatus: 'Disponible' | 'Stock bajo' | 'Agotado' = 'Disponible';
        if (newStock === 0) newStatus = 'Agotado';
        else if (newStock <= item.minStock) newStatus = 'Stock bajo';

        return { ...item, stock: newStock, status: newStatus };
      }
      return item;
    }));

    // Add movement
    addInventoryMovement({
      product: product.name,
      type,
      quantity: qty,
      user: 'Admin'
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface border border-border rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-border bg-surfaceHover/30">
          <h2 className="text-lg font-bold text-text-primary">Registrar Movimiento</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Producto</label>
            <select 
              value={selectedProductId}
              onChange={e => setSelectedProductId(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Seleccionar producto...</option>
              {inventory.map(item => (
                <option key={item.id} value={item.id}>{item.name} (Stock: {item.stock})</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Tipo de Movimiento</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Entrada', 'Salida', 'Ajuste'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`py-2 rounded-lg text-sm font-bold border transition-colors ${
                    type === t 
                      ? 'bg-primary/20 text-primary border-primary/50' 
                      : 'bg-background text-text-secondary border-border hover:border-text-secondary'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Cantidad</label>
            <input 
              type="number" 
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              placeholder={type === 'Ajuste' ? "Nuevo stock total" : "Cantidad a mover"}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary font-bold focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        <div className="p-4 border-t border-border flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:bg-surfaceHover transition-colors">Cancelar</button>
          <button 
            onClick={handleSave} 
            disabled={!selectedProductId || !quantity}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
