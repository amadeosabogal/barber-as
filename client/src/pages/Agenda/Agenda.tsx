import { useState } from 'react';
import { Plus } from 'lucide-react';
import AgendaHeader from '../../components/agenda/AgendaHeader';
import DayView from '../../components/agenda/DayView';
import WaitingList from '../../components/agenda/WaitingList';
import NewAppointmentModal from '../../components/agenda/NewAppointmentModal';
import AppointmentActionsModal from '../../components/agenda/AppointmentActionsModal';
import { mockAgenda } from '../../data/mockAgenda';

export const Agenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2026-09-23T12:00:00'));
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');
  
  // Modals state
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [selectedBarberId, setSelectedBarberId] = useState<number | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  
  // Actions modal state
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  // Mock data state
  const [appointments, setAppointments] = useState(mockAgenda.appointments);

  // Date navigation
  const onPrevDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const onNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const onToday = () => {
    setCurrentDate(new Date('2026-09-23T12:00:00')); // Hardcoded today for mock purposes
  };

  // Interactions
  const handleTimeSlotClick = (barberId: number, time: string) => {
    setSelectedBarberId(barberId);
    setSelectedTime(time);
    setIsNewModalOpen(true);
  };

  const handleAppointmentClick = (apt: any) => {
    setSelectedAppointment(apt);
  };

  const handleUpdateStatus = (id: number, status: string) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status } : apt));
  };

  return (
    <div className="animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Agenda Inteligente</h1>
          <p className="text-text-secondary mt-1">Control visual de reservas y tiempos.</p>
        </div>
        <button 
          onClick={() => {
            setSelectedBarberId(undefined);
            setSelectedTime(undefined);
            setIsNewModalOpen(true);
          }}
          className="bg-primary hover:bg-primary-hover text-background font-bold py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20"
        >
          <Plus className="w-5 h-5" />
          Nueva cita
        </button>
      </div>

      <AgendaHeader 
        currentDate={currentDate} 
        view={view} 
        setView={setView} 
        onPrevDay={onPrevDay}
        onNextDay={onNextDay}
        onToday={onToday}
      />

      {/* Main Layout: Agenda + Waiting List */}
      <div className="flex flex-col xl:flex-row gap-6 flex-1 min-h-0">
        <div className="flex-1 min-w-0">
          {view === 'day' ? (
            <DayView 
              barbers={mockAgenda.barbers} 
              appointments={appointments}
              onAppointmentClick={handleAppointmentClick}
              onTimeSlotClick={handleTimeSlotClick}
            />
          ) : (
            <div className="bg-surface border border-dashed border-border rounded-xl h-[700px] flex items-center justify-center">
              <p className="text-text-secondary text-lg">Vista de {view === 'week' ? 'semana' : 'mes'} en desarrollo.</p>
            </div>
          )}
        </div>
        
        <div className="w-full xl:w-80 shrink-0 h-[700px]">
          <WaitingList list={mockAgenda.waitingList} />
        </div>
      </div>

      {isNewModalOpen && (
        <NewAppointmentModal 
          onClose={() => setIsNewModalOpen(false)}
          initialBarberId={selectedBarberId}
          initialTime={selectedTime}
          barbers={mockAgenda.barbers}
        />
      )}

      {selectedAppointment && (
        <AppointmentActionsModal 
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </div>
  );
};
