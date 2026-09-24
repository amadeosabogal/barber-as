import React from 'react';
import { Search, Bell, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useAppContext } from '../../context/AppContext';

export const Topbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isRegisterOpen } = useAppContext();

  return (
    <header className="h-16 bg-surface/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center flex-1 gap-4">
        <button className="lg:hidden text-text-secondary hover:text-primary">
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Search */}
        <div className="hidden md:flex relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-text-secondary" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            placeholder="Buscar clientes, citas, ventas..."
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Caja Status */}
        <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 border rounded-full ${isRegisterOpen ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
          <div className={`w-2 h-2 rounded-full ${isRegisterOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className={`text-xs font-semibold ${isRegisterOpen ? 'text-green-500' : 'text-red-500'}`}>
            {isRegisterOpen ? 'Caja abierta' : 'Caja cerrada'}
          </span>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-surfaceHover"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button className="relative text-text-secondary hover:text-text-primary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-background">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-border cursor-pointer">
          <div className="text-right hidden md:block">
            <p className="text-sm font-semibold text-text-primary leading-tight">Miguel Admin</p>
            <p className="text-xs text-text-secondary">Administrador</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary font-bold">
            MA
          </div>
        </div>
      </div>
    </header>
  );
};
