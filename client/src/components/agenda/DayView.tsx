import React from 'react';
import AppointmentCard from './AppointmentCard';

interface DayViewProps {
  barbers: any[];
  appointments: any[];
  onAppointmentClick: (apt: any) => void;
  onTimeSlotClick: (barberId: number, time: string) => void;
}

const DayView = ({ barbers, appointments, onAppointmentClick, onTimeSlotClick }: DayViewProps) => {
  // Generar bloques de tiempo de 09:00 a 20:00 cada 30 min
  const generateTimeSlots = () => {
    const slots = [];
    for (let h = 9; h <= 20; h++) {
      slots.push(`${h.toString().padStart(2, '0')}:00`);
      if (h < 20) slots.push(`${h.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const slotHeight = 60; // pixeles por bloque de 30 min (120px por hora)

  const getAppointmentPosition = (apt: any) => {
    const [hours, minutes] = apt.startTime.split(':').map(Number);
    const startOffsetMinutes = (hours - 9) * 60 + minutes;
    
    // Cada 30 min = slotHeight px. Entonces 1 min = slotHeight / 30 px.
    const top = (startOffsetMinutes * slotHeight) / 30;
    const height = (apt.duration * slotHeight) / 30;

    return { top: `${top}px`, height: `${height}px` };
  };

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden flex flex-col h-[700px]">
      {/* Cabecera de Barberos */}
      <div className="flex border-b border-border bg-surfaceHover/50">
        <div className="w-20 shrink-0 border-r border-border"></div>
        {barbers.map(barber => (
          <div key={barber.id} className="flex-1 min-w-[200px] border-r border-border p-3 text-center flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
              {barber.avatar}
            </div>
            <span className="font-bold text-text-primary">{barber.name}</span>
          </div>
        ))}
      </div>

      {/* Grilla de Tiempo */}
      <div className="flex-1 overflow-y-auto overflow-x-auto relative">
        <div className="flex min-w-max">
          {/* Eje Y de Horas */}
          <div className="w-20 shrink-0 border-r border-border bg-surface sticky left-0 z-20">
            {timeSlots.map(time => (
              <div key={time} className="text-xs text-text-secondary font-medium text-right pr-3 -mt-2.5 relative z-20" style={{ height: `${slotHeight}px` }}>
                {time.endsWith(':00') ? time : ''}
              </div>
            ))}
          </div>

          {/* Columnas de Barberos */}
          <div className="flex flex-1 relative bg-background">
            {/* Líneas horizontales de tiempo */}
            <div className="absolute inset-0 pointer-events-none">
              {timeSlots.map((time, idx) => (
                <div 
                  key={time} 
                  className={`w-full border-b ${time.endsWith(':00') ? 'border-border/80' : 'border-border/30 border-dashed'}`} 
                  style={{ height: `${slotHeight}px` }} 
                />
              ))}
            </div>

            {/* Citas por Barbero */}
            {barbers.map(barber => {
              const barberApts = appointments.filter(a => a.barberId === barber.id);
              return (
                <div key={barber.id} className="flex-1 min-w-[200px] border-r border-border relative">
                  {/* Espacio clickeable para nueva cita */}
                  <div className="absolute inset-0 z-0 flex flex-col">
                     {timeSlots.map(time => (
                       <div 
                         key={time} 
                         onClick={() => onTimeSlotClick(barber.id, time)}
                         className="w-full hover:bg-primary/5 cursor-pointer transition-colors" 
                         style={{ height: `${slotHeight}px` }} 
                       />
                     ))}
                  </div>
                  
                  {/* Citas Renderizadas */}
                  {barberApts.map(apt => (
                    <AppointmentCard 
                      key={apt.id} 
                      appointment={apt} 
                      onClick={onAppointmentClick}
                      style={getAppointmentPosition(apt)}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;
