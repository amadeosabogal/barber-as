export const mockAgenda = {
  barbers: [
    { id: 1, name: 'Miguel A.', avatar: 'MA' },
    { id: 2, name: 'Juan P.', avatar: 'JP' },
    { id: 3, name: 'David R.', avatar: 'DR' },
  ],
  appointments: [
    {
      id: 1,
      client: 'Carlos Mendoza',
      service: 'Corte + Barba',
      barberId: 1,
      date: '2026-09-23',
      startTime: '09:00',
      duration: 60, // in minutes
      status: 'Atendida', // Pendiente, Confirmada, En espera, Atendida, Cancelada, No asistió
      notes: 'Cliente frecuente, prefirió adelantar cita.'
    },
    {
      id: 2,
      client: 'Luis Torres',
      service: 'Corte Clásico',
      barberId: 2,
      date: '2026-09-23',
      startTime: '10:00',
      duration: 45,
      status: 'Confirmada',
      notes: ''
    },
    {
      id: 3,
      client: 'Roberto Gómez',
      service: 'Barba Spa',
      barberId: 1,
      date: '2026-09-23',
      startTime: '11:00',
      duration: 30,
      status: 'En espera',
      notes: 'Ya llegó, esperando en recepción.'
    },
    {
      id: 4,
      client: 'Andrés Silva',
      service: 'Corte + Barba',
      barberId: 3,
      date: '2026-09-23',
      startTime: '14:30',
      duration: 60,
      status: 'Pendiente',
      notes: ''
    },
    {
      id: 5,
      client: 'Fernando Ruiz',
      service: 'Corte Premium',
      barberId: 2,
      date: '2026-09-23',
      startTime: '16:00',
      duration: 60,
      status: 'No asistió',
      notes: 'No contestó el teléfono.'
    },
    {
      id: 6,
      client: 'Mario Vargas',
      service: 'Corte Niño',
      barberId: 3,
      date: '2026-09-23',
      startTime: '17:00',
      duration: 30,
      status: 'Cancelada',
      notes: 'Llamó para cancelar por enfermedad.'
    },
  ],
  waitingList: [
    {
      id: 101,
      client: 'Eduardo Paz',
      service: 'Corte Clásico',
      requestedTime: '15:00 - 18:00',
      priority: 'Alta', // Alta, Media, Baja
      status: 'Esperando', // Esperando, Asignado
    },
    {
      id: 102,
      client: 'Martín Solis',
      service: 'Corte + Barba',
      requestedTime: 'Cualquier hora tarde',
      priority: 'Media',
      status: 'Esperando',
    }
  ]
};
