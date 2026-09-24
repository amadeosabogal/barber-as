import { useState } from 'react';
import { Plus } from 'lucide-react';
import InventoryTable from '../../components/inventario/InventoryTable';
import MovementsHistory from '../../components/inventario/MovementsHistory';
import { InventoryMovementModal } from '../../components/inventario/InventoryMovementModal';

export const Inventario = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Inventario</h1>
          <p className="text-text-secondary mt-1">Control de stock, alertas y movimientos.</p>
        </div>
        
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20"
        >
          <Plus className="w-5 h-5" />
          Registrar Movimiento
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-6 pb-6">
        <InventoryTable />
        <MovementsHistory />
      </div>

      {showModal && <InventoryMovementModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
