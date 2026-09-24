import { useState } from 'react';
import ProductCatalog from '../../components/pos/ProductCatalog';
import CartSide from '../../components/pos/CartSide';
import PaymentModal from '../../components/pos/PaymentModal';
import { useAppContext } from '../../context/AppContext';

export const POS = () => {
  const { isRegisterOpen } = useAppContext();
  const [cart, setCart] = useState<any[]>([]);
  const [selectedClient, setSelectedClient] = useState<string>('');
  const [selectedBarber, setSelectedBarber] = useState<string>('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = (item: any) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQ = i.quantity + delta;
        return newQ > 0 ? { ...i, quantity: newQ } : i;
      }
      return i;
    }));
  };

  const handleRemoveItem = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const handleSuccessPayment = () => {
    setIsPaymentModalOpen(false);
    setShowSuccess(true);
    setCart([]);
    setSelectedClient('');
    setSelectedBarber('');
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="animate-in fade-in duration-500 h-[calc(100vh-6rem)] flex flex-col relative">
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Punto de Venta</h1>
        <p className="text-text-secondary mt-1">Registra cobros rápidamente.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        <div className="flex-[2] min-w-0">
          <ProductCatalog onAddToCart={handleAddToCart} />
        </div>
        
        <div className="w-full lg:w-[400px] shrink-0">
          <CartSide 
            cart={cart}
            updateQuantity={handleUpdateQuantity}
            removeItem={handleRemoveItem}
            onPay={() => setIsPaymentModalOpen(true)}
            selectedClient={selectedClient}
            setSelectedClient={setSelectedClient}
            selectedBarber={selectedBarber}
            setSelectedBarber={setSelectedBarber}
            isRegisterOpen={isRegisterOpen}
          />
        </div>
      </div>

      {isPaymentModalOpen && (
        <PaymentModal 
          total={total}
          client={selectedClient}
          items={cart}
          onClose={() => setIsPaymentModalOpen(false)}
          onSuccess={handleSuccessPayment}
        />
      )}

      {showSuccess && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4 z-50">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Cobro registrado exitosamente
        </div>
      )}
    </div>
  );
};
