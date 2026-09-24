import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, CalendarDays, Users, Scissors, UserSquare2, 
  MonitorSmartphone, Wallet, Package, Award, Target, Megaphone, 
  BrainCircuit, BarChart3, Settings, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
}

const NavItem = ({ to, icon: Icon, label, isCollapsed }: NavItemProps) => (
  <NavLink
    to={to}
    title={isCollapsed ? label : undefined}
    className={({ isActive }) => cn(
      "flex items-center px-3 py-2.5 rounded-lg mb-1 transition-colors group relative",
      isActive 
        ? "bg-primary/10 text-primary" 
        : "text-text-secondary hover:bg-surfaceHover hover:text-text-primary",
      isCollapsed && "justify-center px-0"
    )}
  >
    <Icon className={cn("w-5 h-5", !isCollapsed && "mr-3")} />
    {!isCollapsed && <span className="font-medium text-sm">{label}</span>}
    
    {/* Tooltip for collapsed mode */}
    {isCollapsed && (
      <div className="absolute left-full ml-4 px-2 py-1 bg-surface border border-border text-text-primary text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
        {label}
      </div>
    )}
  </NavLink>
);

const NavGroup = ({ title, isCollapsed, children }: { title: string, isCollapsed: boolean, children: React.ReactNode }) => (
  <div className="mb-6">
    {!isCollapsed && (
      <h3 className="px-3 text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">
        {title}
      </h3>
    )}
    {isCollapsed && <div className="h-4"></div>}
    <div>{children}</div>
  </div>
);

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={cn(
      "h-screen bg-surface border-r border-border flex flex-col transition-all duration-300 relative",
      isCollapsed ? "w-20" : "w-64"
    )}>
      {/* Logo Area */}
      <div className="h-16 flex items-center px-4 border-b border-border mb-4 overflow-hidden">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
          <Scissors className="w-5 h-5 text-background" />
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-bold text-lg text-text-primary whitespace-nowrap tracking-tight">
            BARBER SYSTEM
          </span>
        )}
      </div>

      {/* Collapse Toggle */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-surface border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors z-10"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 scrollbar-hide pb-4">
        <NavGroup title="PRINCIPAL" isCollapsed={isCollapsed}>
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" isCollapsed={isCollapsed} />
          <NavItem to="/agenda" icon={CalendarDays} label="Agenda" isCollapsed={isCollapsed} />
          <NavItem to="/clientes" icon={Users} label="Clientes" isCollapsed={isCollapsed} />
        </NavGroup>

        <NavGroup title="OPERACIONES" isCollapsed={isCollapsed}>
          <NavItem to="/servicios" icon={Scissors} label="Servicios" isCollapsed={isCollapsed} />
          <NavItem to="/barberos" icon={UserSquare2} label="Barberos" isCollapsed={isCollapsed} />
          <NavItem to="/pos" icon={MonitorSmartphone} label="Punto de Venta" isCollapsed={isCollapsed} />
          <NavItem to="/caja" icon={Wallet} label="Caja" isCollapsed={isCollapsed} />
          <NavItem to="/inventario" icon={Package} label="Inventario" isCollapsed={isCollapsed} />
        </NavGroup>

        <NavGroup title="CRECIMIENTO" isCollapsed={isCollapsed}>
          <NavItem to="/membresias" icon={Award} label="Membresías" isCollapsed={isCollapsed} />
          <NavItem to="/fidelizacion" icon={Target} label="Fidelización" isCollapsed={isCollapsed} />
          <NavItem to="/marketing" icon={Megaphone} label="Marketing" isCollapsed={isCollapsed} />
        </NavGroup>

        <NavGroup title="INTELIGENCIA" isCollapsed={isCollapsed}>
          <NavItem to="/intelligence" icon={BrainCircuit} label="Barbería Intelligence" isCollapsed={isCollapsed} />
          <NavItem to="/reportes" icon={BarChart3} label="Reportes" isCollapsed={isCollapsed} />
        </NavGroup>

        <NavGroup title="SISTEMA" isCollapsed={isCollapsed}>
          <NavItem to="/configuracion" icon={Settings} label="Configuración" isCollapsed={isCollapsed} />
        </NavGroup>
      </div>
    </aside>
  );
};
