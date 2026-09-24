import { useState } from 'react';
import { Search } from 'lucide-react';
import { mockCatalog } from '../../data/mockPOS';
import { cn } from '../../utils/cn';

const ProductCatalog = ({ onAddToCart }: { onAddToCart: (item: any) => void }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');
  
  const categories = ['Todos', 'Servicios', 'Productos'];

  const filteredItems = mockCatalog.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'Todos' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full bg-surface border border-border rounded-xl p-4 overflow-hidden">
      <div className="mb-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input 
            type="text" 
            placeholder="Buscar productos o servicios..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary text-text-primary transition-colors"
          />
        </div>
        
        <div className="flex gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors flex-1",
                filter === cat ? "bg-primary/20 text-primary border border-primary/30" : "bg-background text-text-secondary hover:text-text-primary border border-border"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredItems.map(item => (
            <button 
              key={item.id}
              onClick={() => onAddToCart(item)}
              className="bg-background border border-border rounded-lg p-3 text-left hover:border-primary/50 hover:bg-surfaceHover transition-colors flex flex-col justify-between h-28 group"
            >
              <div>
                <p className="text-xs text-text-secondary font-medium mb-1 uppercase tracking-wider">{item.category}</p>
                <p className="text-sm font-bold text-text-primary leading-tight group-hover:text-primary transition-colors line-clamp-2">{item.name}</p>
              </div>
              <p className="text-lg font-black text-text-primary mt-2">S/ {item.price.toFixed(2)}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
