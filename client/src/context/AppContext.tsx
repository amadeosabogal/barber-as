import React, { createContext, useContext, useState, ReactNode } from 'react';

type Transaction = {
  id: number;
  time: string;
  concept: string;
  type: 'Ingreso' | 'Egreso';
  method: string;
  amount: number;
};

export type InventoryItem = {
  id: number;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  cost: number;
  status: 'Disponible' | 'Stock bajo' | 'Agotado';
};

export type InventoryMovement = {
  id: number;
  date: string;
  product: string;
  type: 'Entrada' | 'Salida' | 'Ajuste';
  quantity: number;
  user: string;
};

type AppContextType = {
  isRegisterOpen: boolean;
  openRegister: (amount: number, note: string) => void;
  closeRegister: () => void;
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id' | 'time'>, itemsSold?: any[]) => void;
  registerTotals: {
    efectivo: number;
    yape: number;
    plin: number;
    tarjeta: number;
    transferencia: number;
    ingresos: number;
    egresos: number;
    saldoInicial: number;
  };
  inventory: InventoryItem[];
  setInventory: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  inventoryMovements: InventoryMovement[];
  addInventoryMovement: (mov: Omit<InventoryMovement, 'id' | 'date'>) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialInventory: InventoryItem[] = [
  { id: 8, name: 'Pomada Mate Reuzel', category: 'Productos', stock: 15, minStock: 5, price: 85.0, cost: 45.0, status: 'Disponible' },
  { id: 9, name: 'Aceite para Barba', category: 'Productos', stock: 3, minStock: 5, price: 55.0, cost: 25.0, status: 'Stock bajo' },
  { id: 10, name: 'Shampoo Anticaída', category: 'Productos', stock: 0, minStock: 3, price: 65.0, cost: 30.0, status: 'Agotado' },
  { id: 11, name: 'Cera Fijadora Brillante', category: 'Productos', stock: 20, minStock: 10, price: 45.0, cost: 20.0, status: 'Disponible' },
  { id: 12, name: 'Peine de Madera', category: 'Productos', stock: 4, minStock: 10, price: 20.0, cost: 8.0, status: 'Stock bajo' }
];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [saldoInicial, setSaldoInicial] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [inventoryMovements, setInventoryMovements] = useState<InventoryMovement[]>([]);

  const openRegister = (amount: number, note: string) => {
    setIsRegisterOpen(true);
    setSaldoInicial(amount);
    setTransactions([{
      id: Date.now(),
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      concept: `Apertura de caja: ${note}`,
      type: 'Ingreso',
      method: 'Efectivo',
      amount: amount
    }]);
  };

  const closeRegister = () => {
    setIsRegisterOpen(false);
    setTransactions([]);
    setSaldoInicial(0);
  };

  const addInventoryMovement = (mov: Omit<InventoryMovement, 'id' | 'date'>) => {
    setInventoryMovements(prev => [{
      ...mov,
      id: Date.now() + Math.random(),
      date: new Date().toLocaleDateString('es-ES') + ' ' + new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    }, ...prev]);
  };

  const updateInventoryStock = (itemId: number, qtyToReduce: number) => {
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newStock = Math.max(0, item.stock - qtyToReduce);
        let newStatus: 'Disponible' | 'Stock bajo' | 'Agotado' = 'Disponible';
        if (newStock === 0) newStatus = 'Agotado';
        else if (newStock <= item.minStock) newStatus = 'Stock bajo';
        
        return { ...item, stock: newStock, status: newStatus };
      }
      return item;
    }));
  };

  const addTransaction = (tx: Omit<Transaction, 'id' | 'time'>, itemsSold?: any[]) => {
    const newTx: Transaction = {
      ...tx,
      id: Date.now() + Math.random(),
      time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
    };
    setTransactions(prev => [newTx, ...prev]);

    if (itemsSold && itemsSold.length > 0) {
      itemsSold.forEach(item => {
        if (item.category === 'Productos') {
          updateInventoryStock(item.id, item.quantity);
          addInventoryMovement({
            product: item.name,
            type: 'Salida',
            quantity: item.quantity,
            user: 'Sistema POS'
          });
        }
      });
    }
  };

  const registerTotals = transactions.reduce(
    (acc, tx) => {
      const amount = tx.type === 'Ingreso' ? tx.amount : -tx.amount;
      
      if (tx.type === 'Ingreso' && tx.concept.includes('Apertura')) {
        // Saldo inicial ya está guardado en el estado
      } else if (tx.type === 'Ingreso') {
        acc.ingresos += tx.amount;
      } else {
        acc.egresos += tx.amount;
      }

      switch (tx.method) {
        case 'Efectivo': acc.efectivo += amount; break;
        case 'Yape': acc.yape += amount; break;
        case 'Plin': acc.plin += amount; break;
        case 'Tarjeta': acc.tarjeta += amount; break;
        case 'Transferencia': acc.transferencia += amount; break;
      }
      
      return acc;
    },
    { efectivo: 0, yape: 0, plin: 0, tarjeta: 0, transferencia: 0, ingresos: 0, egresos: 0, saldoInicial }
  );

  return (
    <AppContext.Provider value={{ 
      isRegisterOpen, openRegister, closeRegister, transactions, addTransaction, registerTotals,
      inventory, setInventory, inventoryMovements, addInventoryMovement 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
