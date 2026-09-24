import { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';
import CashRegisterStatus from '../../components/caja/CashRegisterStatus';
import TransactionsTable from '../../components/caja/TransactionsTable';
import { OpenRegisterModal, CloseRegisterModal } from '../../components/caja/CashRegisterModals';
import { useAppContext } from '../../context/AppContext';

export const Caja = () => {
  const { isRegisterOpen } = useAppContext();
  
  const [showOpenModal, setShowOpenModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Control de Caja</h1>
          <p className="text-text-secondary mt-1">Supervisión financiera del turno actual.</p>
        </div>
        
        {isRegisterOpen ? (
          <button 
            onClick={() => setShowCloseModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-500/20"
          >
            <Lock className="w-5 h-5" />
            Cerrar Caja
          </button>
        ) : (
          <button 
            onClick={() => setShowOpenModal(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20"
          >
            <Unlock className="w-5 h-5" />
            Abrir Caja
          </button>
        )}
      </div>

      {!isRegisterOpen ? (
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl bg-surface/50 min-h-[400px]">
          <div className="w-16 h-16 rounded-full bg-surfaceHover flex items-center justify-center text-text-secondary mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">La caja está cerrada</h2>
          <p className="text-text-secondary">Debes aperturar la caja para poder registrar cobros y movimientos.</p>
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto">
          <CashRegisterStatus />
          <TransactionsTable />
        </div>
      )}

      {showOpenModal && <OpenRegisterModal onClose={() => setShowOpenModal(false)} />}
      {showCloseModal && <CloseRegisterModal onClose={() => setShowCloseModal(false)} />}
    </div>
  );
};
