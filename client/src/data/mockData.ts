export const mockData = {
  kpis: {
    todaySales: 680,
    todaySalesTrend: '+12.5%',
    servicesDone: 12,
    servicesTrend: '+2',
    clientsServed: 10,
    clientsTrend: '+15%',
    todayAppointments: 16,
    appointmentsTrend: '0',
    averageTicket: 56.6,
    averageTicketTrend: '+4.2%',
    productsSold: 5,
    productsTrend: '-1'
  },
  salesChart: [
    { name: 'Lun', sales: 400 },
    { name: 'Mar', sales: 300 },
    { name: 'Mié', sales: 550 },
    { name: 'Jue', sales: 480 },
    { name: 'Vie', sales: 700 },
    { name: 'Sáb', sales: 850 },
    { name: 'Dom', sales: 680 },
  ],
  todayAppointments: [
    { id: 1, time: '14:00', client: 'Carlos Mendoza', service: 'Corte + Barba', barber: 'Miguel A.', status: 'Atendida' },
    { id: 2, time: '15:30', client: 'Luis Torres', service: 'Corte Clásico', barber: 'Juan P.', status: 'Atendida' },
    { id: 3, time: '16:00', client: 'Roberto Gómez', service: 'Barba Spa', barber: 'Miguel A.', status: 'Pendiente' },
    { id: 4, time: '17:30', client: 'Andrés Silva', service: 'Corte + Barba', barber: 'David R.', status: 'Confirmada' },
    { id: 5, time: '18:00', client: 'Fernando Ruiz', service: 'Corte Premium', barber: 'Juan P.', status: 'Pendiente' },
    { id: 6, time: '19:00', client: 'Mario Vargas', service: 'Corte Niño', barber: 'David R.', status: 'Cancelada' },
  ],
  barberPerformance: [
    { id: 1, name: 'Miguel A.', services: 6, sales: 340, avgTicket: 56.6 },
    { id: 2, name: 'Juan P.', services: 4, sales: 210, avgTicket: 52.5 },
    { id: 3, name: 'David R.', services: 2, sales: 130, avgTicket: 65.0 },
  ],
  topServices: [
    { id: 1, name: 'Corte + Barba', count: 42 },
    { id: 2, name: 'Corte Clásico', count: 35 },
    { id: 3, name: 'Perfilado de Barba', count: 21 },
    { id: 4, name: 'Corte Premium', count: 18 },
  ],
  alerts: [
    { id: 1, type: 'warning', message: '3 productos con stock bajo' },
    { id: 2, type: 'info', message: '4 citas pendientes para hoy' },
    { id: 3, type: 'danger', message: '6 clientes frecuentes sin regresar en 45 días' },
    { id: 4, type: 'success', message: 'Caja pendiente de cierre' }
  ],
  smartSummary: "Hoy llevas S/ 680 en ventas y 12 servicios realizados. Corte + Barba es el servicio más solicitado. Actualmente tienes 4 citas pendientes para el resto del día."
};
