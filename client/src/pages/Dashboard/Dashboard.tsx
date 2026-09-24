import React from 'react';
import KPIStats from '../../components/dashboard/KPIStats';
import SalesChart from '../../components/dashboard/SalesChart';
import TodayAppointments from '../../components/dashboard/TodayAppointments';
import BarberPerformance from '../../components/dashboard/BarberPerformance';
import TopServices from '../../components/dashboard/TopServices';
import BusinessAlerts from '../../components/dashboard/BusinessAlerts';
import SmartSummary from '../../components/dashboard/SmartSummary';

export const Dashboard = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Dashboard</h1>
        <p className="text-text-secondary mt-1">Resumen del rendimiento de tu barbería de hoy.</p>
      </div>

      <SmartSummary />
      
      <KPIStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
          <TodayAppointments />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <BusinessAlerts />
          <TopServices />
          <BarberPerformance />
        </div>
      </div>
    </div>
  );
};
