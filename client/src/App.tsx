import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Clientes } from './pages/Clientes/Clientes';
import { ClientePerfil } from './pages/Clientes/ClientePerfil';
import { Agenda } from './pages/Agenda/Agenda';
import { POS } from './pages/POS/POS';
import { Caja } from './pages/Caja/Caja';
import { Servicios } from './pages/Servicios/Servicios';
import { Barberos } from './pages/Barberos/Barberos';
import { BarberoPerfil } from './pages/Barberos/BarberoPerfil';
import { Inventario } from './pages/Inventario/Inventario';
import { Membresias } from './pages/Membresias/Membresias';
import { Fidelizacion } from './pages/Fidelizacion/Fidelizacion';
import { Marketing } from './pages/Marketing/Marketing';
import { Intelligence } from './pages/Intelligence/Intelligence';
import { Reportes } from './pages/Reportes/Reportes';
import { AppProvider } from './context/AppContext';

// Placeholder component for routes that don't exist yet
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full min-h-[400px] border border-dashed border-border rounded-xl bg-surface/50">
    <h2 className="text-2xl font-bold text-text-primary mb-2">{title}</h2>
    <p className="text-text-secondary">Esta sección se implementará en la siguiente fase.</p>
  </div>
);

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="clientes/:id" element={<ClientePerfil />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="barberos" element={<Barberos />} />
          <Route path="barberos/:id" element={<BarberoPerfil />} />
          <Route path="pos" element={<POS />} />
          <Route path="caja" element={<Caja />} />
          <Route path="inventario" element={<Inventario />} />
          <Route path="membresias" element={<Membresias />} />
          <Route path="fidelizacion" element={<Fidelizacion />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="intelligence" element={<Intelligence />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="configuracion" element={<Placeholder title="Configuración" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
}

export default App;
