import React, { useState } from 'react';
import { X, Lock, Unlock } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const OpenRegisterModal = ({ onClose }: { onClose: () => void }) => {
  const { openRegister } = useAppContext();
  const [amount, setAmount] = useState('0');
  const [note, setNote] = useState('');

  const handleOpen = () => {
    openRegister(parseFloat(amount) || 0, note);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface border border-border rounded-xl w-full max-w-sm overflow-hidden shadow-2xl">
        <div className="p-6 text-center border-b border-border">
          <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3">
            <Unlock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">Apertura de Caja</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Monto Inicial (S/)</label>
            <input 
              type="number" 
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary text-xl font-bold focus:outline-none focus:border-primary transition-colors text-center"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Observación (Opcional)</label>
            <textarea 
              rows={2}
              value={note}
              onChange={e => setNote(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Ej. Billetes de 10 y monedas"
            />
          </div>
        </div>
        
        <div className="p-4 border-t border-border flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:bg-surfaceHover transition-colors">Cancelar</button>
          <button onClick={handleOpen} className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-primary text-background hover:bg-primary-hover transition-colors">Abrir Caja</button>
        </div>
      </div>
    </div>
  );
};

export const CloseRegisterModal = ({ onClose }: { onClose: () => void }) => {
  const { closeRegister, registerTotals } = useAppContext();
  const esperado = registerTotals.efectivo + registerTotals.saldoInicial;
  
  const [counted, setCounted] = useState(esperado.toString());
  const [note, setNote] = useState('');
  
  const countedNum = parseFloat(counted) || 0;
  const difference = countedNum - esperado;
  const needsNote = Math.abs(difference) > 0;

  const handleClose = () => {
    if (needsNote && !note.trim()) return;
    closeRegister();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-surface border border-border rounded-xl w-full max-w-sm overflow-hidden shadow-2xl">
        <div className="p-6 text-center border-b border-border">
          <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-text-primary">Cierre de Caja</h2>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <p className="text-sm font-semibold text-text-secondary mb-1">Efectivo Esperado</p>
            <p className="text-2xl font-black text-text-primary">S/ {esperado.toFixed(2)}</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-text-secondary">Efectivo Contado (S/)</label>
            <input 
              type="number" 
              value={counted}
              onChange={e => setCounted(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-text-primary text-xl font-bold focus:outline-none focus:border-primary transition-colors text-center"
            />
          </div>

          <div className="flex justify-between items-center px-2">
            <span className="text-sm font-semibold text-text-secondary">Diferencia:</span>
            <span className={`text-lg font-black ${difference === 0 ? 'text-green-500' : 'text-red-500'}`}>
              {difference > 0 ? '+' : ''} S/ {difference.toFixed(2)}
            </span>
          </div>

          {needsNote && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
              <label className="text-sm font-semibold text-red-500 flex items-center gap-2">
                Observación Requerida *
              </label>
              <textarea 
                rows={2}
                value={note}
                onChange={e => setNote(e.target.value)}
                className="w-full bg-background border border-red-500/50 rounded-lg px-4 py-2.5 text-text-primary text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Motivo de la diferencia..."
              />
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-border flex gap-3">
          <button onClick={onClose} className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-text-secondary hover:bg-surfaceHover transition-colors">Cancelar</button>
          <button 
            onClick={handleClose} 
            disabled={needsNote && !note.trim()}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cerrar Turno
          </button>
        </div>
      </div>
    </div>
  );
};
