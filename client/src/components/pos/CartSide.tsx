import { Trash2, Plus, Minus, User, Scissors } from 'lucide-react';
import { mockClients } from '../../data/mockClients';
import { mockAgenda } from '../../data/mockAgenda';

interface CartSideProps {
  cart: any[];
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  onPay: () => void;
  selectedClient: string;
  setSelectedClient: (v: string) => void;
  selectedBarber: string;
  setSelectedBarber: (v: string) => void;
  isRegisterOpen: boolean;
}

const CartSide = ({ 
  cart, 
  updateQuantity, 
  removeItem, 
  onPay, 
  selectedClient, 
  setSelectedClient,
  selectedBarber,
  setSelectedBarber,
  isRegisterOpen
}: CartSideProps) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  // Simular un pequeño descuento manual si se quisiera, por ahora es 0
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="flex flex-col h-full bg-surface border border-border rounded-xl p-4 overflow-hidden">
      
      {/* Selectors */}
      <div className="space-y-3 mb-4 bg-background p-3 rounded-lg border border-border">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-text-secondary" />
          <select 
            value={selectedClient} 
            onChange={e => setSelectedClient(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-primary focus:outline-none"
          >
            <option value="">Seleccionar Cliente...</option>
            {mockClients.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            <option value="Cliente Ocasional">Cliente Ocasional (Sin registro)</option>
          </select>
        </div>
        <hr className="border-border" />
        <div className="flex items-center gap-2">
          <Scissors className="w-4 h-4 text-text-secondary" />
          <select 
            value={selectedBarber} 
            onChange={e => setSelectedBarber(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-text-primary focus:outline-none"
          >
            <option value="">Seleccionar Barbero...</option>
            {mockAgenda.barbers.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-2 mb-4">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-text-secondary">
            <p>Venta actual vacía</p>
            <p className="text-xs mt-1">Selecciona productos a la izquierda</p>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="bg-background border border-border rounded-lg p-3 flex justify-between items-center group hover:border-primary/50 transition-colors">
              <div className="flex-1 min-w-0 pr-2">
                <p className="text-sm font-bold text-text-primary truncate">{item.name}</p>
                <p className="text-xs text-text-secondary">S/ {item.price.toFixed(2)} c/u</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-surface rounded-md border border-border px-1">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-text-secondary hover:text-primary"><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-bold text-text-primary w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-text-secondary hover:text-primary"><Plus className="w-3 h-3" /></button>
                </div>
                <div className="w-16 text-right">
                  <p className="text-sm font-bold text-text-primary">S/ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-text-secondary hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-background border border-border rounded-lg p-4 space-y-2 mb-4">
        <div className="flex justify-between text-sm text-text-secondary">
          <span>Subtotal</span>
          <span>S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-text-secondary">
          <span>Descuento</span>
          <span>- S/ {discount.toFixed(2)}</span>
        </div>
        <hr className="border-border my-2" />
        <div className="flex justify-between text-lg font-black text-text-primary">
          <span>Total</span>
          <span>S/ {total.toFixed(2)}</span>
        </div>
      </div>

      {!isRegisterOpen ? (
        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold rounded-lg text-center">
          La caja está cerrada. Ábrela para cobrar.
        </div>
      ) : (
        <button 
          onClick={onPay}
          disabled={cart.length === 0 || !selectedClient || !selectedBarber}
          className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-background font-black text-lg py-4 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center justify-center gap-2"
        >
          COBRAR S/ {total.toFixed(2)}
        </button>
      )}
    </div>
  );
};

export default CartSide;
